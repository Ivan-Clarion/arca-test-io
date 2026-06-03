/**
 * Minimal server-side Gemini REST client.
 * Uses the Generative Language API with header auth (x-goog-api-key).
 * The API key is read from env and never exposed to the browser.
 */

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
const API_KEY = process.env.GEMINI_API_KEY;

const endpoint = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

/**
 * Core grounding rules shared by the scan and chat endpoints:
 * the model may ONLY use the uploaded document and must refuse anything else.
 */
export const BASE_RULES = `You are Tester.io, a document-intelligence assistant.

STRICT RULES:
- You may ONLY use information found in the user's uploaded document to answer.
- If a question is unrelated to the document, or cannot be answered from its contents, politely refuse in one or two sentences and state that you can only answer questions about the uploaded document. Do NOT use outside knowledge, general facts, or assumptions.
- Never invent details, numbers, names, or dates that are not present in the document.
- Be concise and specific. When you answer, reference the exact figures, dates, names, or sections from the document.`;

/**
 * Shared schema for a chart the model may choose to include.
 * The model picks the `type`; `data` is a simple label/value series.
 */
export const CHART_SHAPE = {
  type: "OBJECT",
  description:
    "A chart visualizing quantitative data from the document. Pick the type that best fits the data.",
  properties: {
    type: {
      type: "STRING",
      enum: ["bar", "line", "area", "pie"],
      description:
        "bar = compare categories, line/area = trend over time, pie = parts of a whole.",
    },
    title: { type: "STRING", description: "Short chart title." },
    data: {
      type: "ARRAY",
      description:
        "2-8 points to plot. Empty array only when the document has no numeric data.",
      items: {
        type: "OBJECT",
        properties: {
          label: { type: "STRING" },
          value: { type: "NUMBER" },
        },
        required: ["label", "value"],
      },
    },
  },
  required: ["type", "data"],
};

/**
 * JSON schema for the initial scan output (structured for the UI).
 */
export const SCAN_SCHEMA = {
  type: "OBJECT",
  properties: {
    summary: { type: "STRING" },
    risks: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          detail: { type: "STRING" },
          severity: { type: "STRING", enum: ["low", "medium", "high"] },
        },
        required: ["title", "detail"],
      },
    },
    deadlines: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          detail: { type: "STRING" },
        },
        required: ["title"],
      },
    },
    decisions: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          detail: { type: "STRING" },
        },
        required: ["title"],
      },
    },
    chart: CHART_SHAPE,
  },
  required: ["summary", "chart"],
};

/**
 * JSON schema for chat replies. `answer` is always present; `chart` is
 * included only when a visualization helps and the data is in the document.
 */
export const CHAT_SCHEMA = {
  type: "OBJECT",
  properties: {
    answer: { type: "STRING" },
    chart: CHART_SHAPE,
  },
  required: ["answer"],
};

/**
 * Call Gemini and return the text response.
 * @param {object} opts
 * @param {string} [opts.system]       system instruction
 * @param {Array}  opts.contents       Gemini `contents` array
 * @param {object} [opts.jsonSchema]   when set, forces structured JSON output
 * @param {number} [opts.temperature]
 */
export async function callGemini({
  system,
  contents,
  jsonSchema,
  temperature = 0.3,
}) {
  if (!API_KEY) {
    throw new Error("GEMINI_API_KEY is not set. Add it to .env.local.");
  }

  const body = {
    contents,
    generationConfig: { temperature },
  };
  if (system) body.system_instruction = { parts: [{ text: system }] };
  if (jsonSchema) {
    body.generationConfig.responseMimeType = "application/json";
    body.generationConfig.responseSchema = jsonSchema;
  }

  const res = await fetch(endpoint(MODEL), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${errText.slice(0, 400)}`);
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  return parts.map((p) => p.text || "").join("");
}

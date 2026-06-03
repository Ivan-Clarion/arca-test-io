import { NextResponse } from "next/server";
import { callGemini, BASE_RULES, CHAT_SCHEMA } from "@/lib/gemini";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req) {
  try {
    const { documentText, history, question } = await req.json();

    if (!question?.trim()) {
      return NextResponse.json({ error: "No question provided." }, { status: 400 });
    }
    if (!documentText) {
      return NextResponse.json(
        { error: "No document context. Scan a file first." },
        { status: 400 }
      );
    }

    // Ground every answer in the document, and allow an optional chart.
    const system = `${BASE_RULES}

CHART RULE:
- If a chart would genuinely help answer the question AND the numeric values needed are present in the document, include a "chart" object with a short "title" and 2-8 "figures" (label + value, plus an optional unit). Use comparable units within one chart.
- Only chart numbers that actually appear in the document. If a chart does not help or the data isn't present, omit "chart" entirely.
- The "answer" field must always contain your written reply.

The uploaded document is provided below. Answer using ONLY this content.

<DOCUMENT>
${documentText}
</DOCUMENT>`;

    const contents = [];
    for (const m of Array.isArray(history) ? history : []) {
      contents.push({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: String(m.text || "") }],
      });
    }
    contents.push({ role: "user", parts: [{ text: question }] });

    const raw = await callGemini({
      system,
      contents,
      jsonSchema: CHAT_SCHEMA,
      temperature: 0.3,
    });

    let answer = raw;
    let chart = null;
    try {
      const parsed = JSON.parse(raw);
      answer = parsed.answer ?? raw;
      // Only keep a chart that actually has usable figures.
      if (parsed.chart?.figures?.some((f) => typeof f?.value === "number")) {
        chart = parsed.chart;
      }
    } catch {
      // Fall back to the raw text if structured parsing fails.
    }

    return NextResponse.json({ answer, chart });
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "Chat failed." },
      { status: 500 }
    );
  }
}

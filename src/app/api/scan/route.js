import { NextResponse } from "next/server";
import { extractText } from "@/lib/extractText";
import { callGemini, BASE_RULES, SCAN_SCHEMA } from "@/lib/gemini";

export const runtime = "nodejs";
export const maxDuration = 60;

// Cap how much text we send to keep latency and token use reasonable.
const MAX_CHARS = 200_000;

const SCAN_INSTRUCTION = `${BASE_RULES}

TASK: Scan the document and return a structured analysis as JSON with:
- "summary": a clear 2-4 sentence overview of what the document is and its key takeaways.
- "risks": notable risks, red flags, or issues (with a severity of low/medium/high).
- "deadlines": dates, milestones, or time-sensitive items.
- "decisions": decisions made, pending, or required.
- "figures": up to 6 notable numeric values worth charting (budgets, counts, percentages, attainment). Keep units comparable within the set when possible.
Only include items that are actually present in the document. Use empty arrays when a category does not apply.`;

export async function POST(req) {
  try {
    const { name, mimeType, dataBase64 } = await req.json();

    if (!dataBase64) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    let text = (
      await extractText({ name, mimeType: mimeType || "", base64: dataBase64 })
    ).trim();

    if (!text) {
      return NextResponse.json(
        { error: "Could not read any text from this file." },
        { status: 422 }
      );
    }

    let truncated = false;
    if (text.length > MAX_CHARS) {
      text = text.slice(0, MAX_CHARS);
      truncated = true;
    }

    const raw = await callGemini({
      system: SCAN_INSTRUCTION,
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Scan this document.\n\n<DOCUMENT name="${name}">\n${text}\n</DOCUMENT>`,
            },
          ],
        },
      ],
      jsonSchema: SCAN_SCHEMA,
      temperature: 0.2,
    });

    let scan;
    try {
      scan = JSON.parse(raw);
    } catch {
      // Fall back to treating the raw output as a summary if JSON parsing fails.
      scan = { summary: raw, risks: [], deadlines: [], decisions: [], figures: [] };
    }

    return NextResponse.json({ documentText: text, truncated, scan });
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "Scan failed." },
      { status: 500 }
    );
  }
}

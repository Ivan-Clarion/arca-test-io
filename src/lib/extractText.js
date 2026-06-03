import mammoth from "mammoth";
import * as XLSX from "xlsx";

/**
 * Extract plain text from an uploaded file (base64-encoded).
 * Supported: .txt .md .csv .json .log, .docx (Word), .xlsx/.xls (Excel).
 * Throws for unsupported types.
 */
export async function extractText({ name = "", mimeType = "", base64 }) {
  const buffer = Buffer.from(base64, "base64");
  const lower = name.toLowerCase();
  const ext = lower.includes(".") ? lower.slice(lower.lastIndexOf(".")) : "";

  // Word documents
  if (ext === ".docx" || mimeType.includes("wordprocessingml")) {
    const { value } = await mammoth.extractRawText({ buffer });
    return value;
  }

  // Excel spreadsheets — flatten every sheet to CSV
  if (
    ext === ".xlsx" ||
    ext === ".xls" ||
    mimeType.includes("spreadsheetml") ||
    mimeType.includes("ms-excel")
  ) {
    const wb = XLSX.read(buffer, { type: "buffer" });
    return wb.SheetNames.map(
      (sheet) =>
        `# Sheet: ${sheet}\n${XLSX.utils.sheet_to_csv(wb.Sheets[sheet])}`
    ).join("\n\n");
  }

  // Plain-text formats
  if (
    [".txt", ".md", ".csv", ".json", ".log"].includes(ext) ||
    mimeType.startsWith("text/") ||
    mimeType === "application/json"
  ) {
    return buffer.toString("utf-8");
  }

  throw new Error(
    `Unsupported file type "${name}". Upload a .txt, .md, .csv, .json, .docx, or .xlsx file.`
  );
}

/** File extensions accepted by the uploader (kept in sync with extractText). */
export const ACCEPTED_EXTENSIONS = [
  ".txt",
  ".md",
  ".csv",
  ".json",
  ".log",
  ".docx",
  ".xlsx",
  ".xls",
];

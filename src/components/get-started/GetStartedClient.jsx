"use client";

import { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  ScanLine,
  Loader2,
  Send,
  ShieldAlert,
  CalendarClock,
  GitBranch,
  BarChart3,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import BarChart from "@/components/get-started/BarChart";
import { ACCEPTED_EXTENSIONS } from "@/lib/extractText";

const severityStyles = {
  high: "bg-red-500/15 text-red-300 border-red-500/30",
  medium: "bg-amber-500/15 text-amber-200 border-amber-500/30",
  low: "bg-emerald-500/15 text-emerald-200 border-emerald-500/30",
};

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function GetStartedClient() {
  const [file, setFile] = useState(null);
  const [phase, setPhase] = useState("upload"); // upload | scanning | result
  const [scan, setScan] = useState(null);
  const [documentText, setDocumentText] = useState("");
  const [truncated, setTruncated] = useState(false);
  const [error, setError] = useState("");

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  function pickFile(f) {
    if (!f) return;
    setError("");
    setFile(f);
  }

  async function handleScan() {
    if (!file) return;
    setError("");
    setPhase("scanning");
    try {
      const dataBase64 = await fileToBase64(file);
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: file.name,
          mimeType: file.type,
          dataBase64,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Scan failed.");
      setScan(data.scan);
      setDocumentText(data.documentText || "");
      setTruncated(Boolean(data.truncated));
      setMessages([]);
      setPhase("result");
    } catch (e) {
      setError(e.message || "Something went wrong.");
      setPhase("upload");
    }
  }

  async function handleAsk(e) {
    e.preventDefault();
    const question = input.trim();
    if (!question || sending) return;

    const history = messages;
    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentText, history, question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed.");
      setMessages((m) => [
        ...m,
        { role: "model", text: data.answer, chart: data.chart },
      ]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "model", text: `⚠ ${e.message || "Something went wrong."}` },
      ]);
    } finally {
      setSending(false);
    }
  }

  function reset() {
    setFile(null);
    setScan(null);
    setDocumentText("");
    setMessages([]);
    setError("");
    setPhase("upload");
  }

  /* ------------------------------ UPLOAD ------------------------------ */
  if (phase !== "result") {
    const scanning = phase === "scanning";
    return (
      <div className="mx-auto max-w-2xl">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            pickFile(e.dataTransfer.files?.[0]);
          }}
          className={`flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed p-12 text-center transition ${
            dragging ? "border-gold bg-gold/5" : "border-border bg-surface"
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-[#1a1208]">
            <UploadCloud className="h-7 w-7" strokeWidth={2} />
          </span>
          <div>
            <h2 className="text-lg font-semibold">Upload a document</h2>
            <p className="mt-1 text-sm text-muted">
              Drag &amp; drop or browse. Tester.io reads it and surfaces what
              matters.
            </p>
          </div>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="cursor-pointer rounded-full border border-gold px-6 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            Browse files
          </button>
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS.join(",")}
            className="hidden"
            onChange={(e) => pickFile(e.target.files?.[0])}
          />

          <p className="text-xs text-muted/80">
            Supports .txt, .md, .csv, .json, .docx, .xlsx
          </p>
        </div>

        {file && (
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4">
            <span className="flex items-center gap-3 text-sm">
              <FileText className="h-5 w-5 text-gold" />
              <span className="font-medium">{file.name}</span>
              <span className="text-muted">{formatSize(file.size)}</span>
            </span>
          </div>
        )}

        {error && (
          <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleScan}
          disabled={!file || scanning}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1a1208] shadow-lg shadow-amber-900/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {scanning ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Scanning document…
            </>
          ) : (
            <>
              <ScanLine className="h-4 w-4" /> Scan everything
            </>
          )}
        </button>
      </div>
    );
  }

  /* ------------------------------ RESULT ------------------------------ */
  const risks = scan?.risks ?? [];
  const deadlines = scan?.deadlines ?? [];
  const decisions = scan?.decisions ?? [];
  const figures = scan?.figures ?? [];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-sm text-muted">
          <FileText className="h-4 w-4 text-gold" />
          {file?.name}
        </span>
        <button
          type="button"
          onClick={reset}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-gold/50 hover:text-gold"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Scan another file
        </button>
      </div>

      {truncated && (
        <p className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-200">
          This document was long, so only the first portion was analyzed.
        </p>
      )}

      {/* Summary */}
      <section className="rounded-3xl border border-gold/30 bg-surface-raised p-7">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
          <Sparkles className="h-4 w-4" /> Scan summary
        </h2>
        <p className="mt-3 leading-relaxed text-foreground/90">{scan?.summary}</p>
      </section>

      {/* Figures / graph */}
      {figures.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <BarChart3 className="h-4 w-4 text-gold" /> Key figures
          </h3>
          <BarChart figures={figures} />
        </section>
      )}

      {/* Lists */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <InsightList
          icon={ShieldAlert}
          title="Risks"
          items={risks}
          renderMeta={(item) =>
            item.severity ? (
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase ${
                  severityStyles[item.severity] ?? severityStyles.medium
                }`}
              >
                {item.severity}
              </span>
            ) : null
          }
        />
        <InsightList icon={CalendarClock} title="Deadlines" items={deadlines} />
        <InsightList
          icon={GitBranch}
          title="Decisions"
          items={decisions}
          className="sm:col-span-2"
        />
      </div>

      {/* Follow-up chat */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold">Ask about this document</h3>
        <p className="mt-1 text-sm text-muted">
          Follow-up questions are answered only from the file you uploaded.
        </p>

        {messages.length > 0 && (
          <div className="mt-5 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex w-full max-w-[88%] flex-col gap-2 ${
                    m.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "gradient-gold text-[#1a1208]"
                        : "border border-border bg-surface text-foreground/90"
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.chart?.figures?.length > 0 && (
                    <div className="w-full">
                      {m.chart.title && (
                        <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-gold">
                          <BarChart3 className="h-3.5 w-3.5" /> {m.chart.title}
                        </p>
                      )}
                      <BarChart figures={m.chart.figures} />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted">
                  <Loader2 className="h-4 w-4 animate-spin" /> Thinking…
                </div>
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleAsk} className="mt-5 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. What are the biggest risks here?"
            className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted/70 transition focus:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          />
          <button
            type="submit"
            disabled={!input.trim() || sending}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-gold text-[#1a1208] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Send question"
          >
            <Send className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </form>
      </section>
    </div>
  );
}

/** Renders a titled list of insight items, or a muted empty state. */
function InsightList({ icon: Icon, title, items, renderMeta, className = "" }) {
  return (
    <div className={`rounded-3xl border border-border bg-surface p-6 ${className}`}>
      <h3 className="flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-4 w-4 text-gold" /> {title}
        <span className="text-muted">({items.length})</span>
      </h3>
      {items.length === 0 ? (
        <p className="mt-3 text-sm text-muted">None found in this document.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-4">
          {items.map((item, i) => (
            <li key={i} className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm font-medium">
                {item.title}
                {renderMeta?.(item)}
              </span>
              {item.detail && (
                <span className="text-sm leading-relaxed text-muted">
                  {item.detail}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

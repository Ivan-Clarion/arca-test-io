"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

/**
 * Single accordion row. Smoothly expands using the grid-rows 0fr -> 1fr
 * technique (animates height with no fixed max-height guesswork).
 */
export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-surface transition hover:border-gold/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
      >
        <span className="font-semibold">{question}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

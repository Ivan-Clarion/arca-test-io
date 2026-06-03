"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

/**
 * Contact form with local validation + a simulated submit.
 * There is no backend wired up; on submit it shows a success state.
 */
const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition focus:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-surface p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full gradient-gold text-[#1a1208]">
          <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="text-xl font-semibold">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out. Our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Name</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Jane Cruz"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Work email</span>
          <input
            required
            type="email"
            name="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">Company</span>
        <input
          type="text"
          name="company"
          placeholder="Acme Inc."
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">How can we help?</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your folders and what you'd like to surface…"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-7 py-3 text-sm font-semibold tracking-wide text-[#1a1208] shadow-lg shadow-amber-900/20 transition duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        <Send className="h-4 w-4" strokeWidth={2.5} />
        Send message
      </button>
    </form>
  );
}

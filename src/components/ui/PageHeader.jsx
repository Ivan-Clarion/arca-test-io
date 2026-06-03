import Reveal from "@/components/ui/Reveal";

/**
 * Standard header for inner pages: eyebrow + title + subtitle over a
 * soft gold glow, with a bottom border separating it from page content.
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        {eyebrow && (
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-gold">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-muted">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

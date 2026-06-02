/**
 * Decorative animated backdrop for the Hero:
 * a masked grid + three drifting gold light blobs (CSS-driven, no JS).
 * Purely presentational — hidden from assistive tech.
 */
export default function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
    >
      {/* faint grid that fades toward the edges */}
      <div className="hero-grid absolute inset-0 opacity-[0.12]" />

      {/* drifting gold light blobs */}
      <div className="hero-blob hero-blob-1 -top-24 left-1/2 h-[420px] w-[560px] -translate-x-1/2" />
      <div className="hero-blob hero-blob-2 top-10 -left-20 h-72 w-72" />
      <div className="hero-blob hero-blob-3 -bottom-10 right-0 h-80 w-80" />

      {/* fade the backdrop into the page below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
    </div>
  );
}

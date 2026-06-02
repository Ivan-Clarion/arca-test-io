/**
 * Generic bento tile chrome: rounded dark surface, border, hover lift,
 * and a subtle top gold sheen. Grid spans are passed via `className`.
 */
export default function BentoCard({ className = "", children }) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 transition duration-300 hover:border-gold/50 hover:bg-surface-raised ${className}`}
    >
      {/* soft gold glow that warms on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}

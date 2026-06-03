/**
 * Lightweight bar chart for the figures Gemini extracts from a document.
 * Pure CSS bars (no chart library). Heights are normalized to the max value.
 */
export default function BarChart({ figures = [] }) {
  const valid = figures.filter(
    (f) => f && typeof f.value === "number" && isFinite(f.value)
  );
  if (valid.length === 0) return null;

  const max = Math.max(...valid.map((f) => Math.abs(f.value)), 1);

  const format = (n) =>
    Math.abs(n) >= 1000 ? n.toLocaleString(undefined, { maximumFractionDigits: 0 }) : `${n}`;

  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="flex h-52 items-end gap-3 sm:gap-5">
        {valid.map((f, i) => {
          const height = Math.max(6, (Math.abs(f.value) / max) * 100);
          return (
            <div
              key={`${f.label}-${i}`}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <span className="text-xs font-semibold text-gradient-gold">
                {format(f.value)}
                {f.unit ? ` ${f.unit}` : ""}
              </span>
              <div
                className="w-full rounded-t-lg gradient-gold transition-all duration-500"
                style={{ height: `${height}%` }}
                title={`${f.label}: ${f.value}${f.unit ? ` ${f.unit}` : ""}`}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex gap-3 sm:gap-5">
        {valid.map((f, i) => (
          <span
            key={`${f.label}-label-${i}`}
            className="flex-1 text-center text-[11px] leading-tight text-muted"
          >
            {f.label}
          </span>
        ))}
      </div>
    </div>
  );
}

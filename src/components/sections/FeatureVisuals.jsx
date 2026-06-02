/**
 * Decorative visuals for the Features bento tiles.
 * Each is purely presentational; resolved by id via `featureVisuals`.
 */

function ScanVisual() {
  // Mock document with a sweeping "scan" highlight + a read badge.
  const lines = [90, 70, 80, 55, 75, 60, 85, 50];
  return (
    <div className="relative mt-2 flex-1 rounded-2xl border border-border bg-background/60 p-5">
      <div className="flex items-center gap-1.5 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>
      <div className="flex flex-col gap-2.5">
        {lines.map((w, i) => (
          <div
            key={i}
            className={`h-2 rounded-full ${
              i === 3 ? "gradient-gold" : "bg-border"
            }`}
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      <span className="absolute bottom-4 right-4 rounded-full border border-gold/40 bg-surface px-3 py-1 text-xs font-semibold text-gold">
        100% read
      </span>
    </div>
  );
}

function RiskVisual() {
  const rows = [
    { dot: "bg-red-500", text: "License expired — 100 endpoints exposed" },
    { dot: "gradient-gold", text: "Confidential file shared externally" },
  ];
  return (
    <div className="mt-2 flex flex-col gap-2">
      {rows.map((r) => (
        <div
          key={r.text}
          className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3 py-2.5"
        >
          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${r.dot}`} />
          <span className="text-xs text-muted">{r.text}</span>
        </div>
      ))}
    </div>
  );
}

function BarsVisual() {
  const bars = [40, 65, 50, 80, 117];
  return (
    <div className="mt-3 flex h-20 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-md ${
            i === bars.length - 1 ? "gradient-gold" : "bg-border"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function FoldersVisual() {
  const depts = ["Finance", "HR", "IT", "Projects", "Sales"];
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {depts.map((d) => (
        <span
          key={d}
          className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted transition group-hover:border-gold/40 group-hover:text-gold"
        >
          {d}
        </span>
      ))}
    </div>
  );
}

export const featureVisuals = {
  scan: ScanVisual,
  risk: RiskVisual,
  bars: BarsVisual,
  folders: FoldersVisual,
};

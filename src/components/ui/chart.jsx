"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui chart primitives, adapted for JavaScript + Recharts 3 and themed
 * to the Tester.io tokens. Provides a ChartContainer that injects per-series
 * color CSS variables (from `config`) plus a styled tooltip.
 */
const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

function ChartContainer({ id, className, children, config, ...props }) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "flex w-full justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted [&_.recharts-cartesian-grid_line]:stroke-border/60 [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/** Emits `--color-<key>` variables scoped to this chart instance. */
function ChartStyle({ id, config }) {
  const colorConfig = Object.entries(config || {}).filter(
    ([, item]) => item?.color
  );
  if (!colorConfig.length) return null;

  const css = `[data-chart=${id}] {\n${colorConfig
    .map(([key, item]) => `  --color-${key}: ${item.color};`)
    .join("\n")}\n}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel = false,
  hideIndicator = false,
  nameKey,
}) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface-raised px-3 py-2 text-xs shadow-2xl shadow-black/40",
        className
      )}
    >
      {!hideLabel && label != null && (
        <div className="mb-1.5 font-medium text-foreground">{label}</div>
      )}
      <div className="flex flex-col gap-1.5">
        {payload.map((item, i) => {
          const key = nameKey || item.name || item.dataKey || "value";
          const itemConfig = config?.[key] || config?.[item.dataKey] || {};
          const color =
            item.payload?.fill || item.color || `var(--color-${key})`;
          return (
            <div key={i} className="flex items-center gap-2">
              {!hideIndicator && (
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[3px]"
                  style={{ background: color }}
                />
              )}
              <span className="text-muted">
                {itemConfig.label || item.name || key}
              </span>
              <span className="ml-auto font-mono font-medium text-foreground">
                {typeof item.value === "number"
                  ? item.value.toLocaleString()
                  : item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({ payload, className }) {
  const { config } = useChart();
  if (!payload?.length) return null;
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4 pt-3", className)}>
      {payload.map((item, i) => {
        const key = item.value;
        const itemConfig = config?.[key] || {};
        return (
          <div key={i} className="flex items-center gap-1.5 text-xs text-muted">
            <span
              className="h-2.5 w-2.5 rounded-[3px]"
              style={{ background: item.color }}
            />
            {itemConfig.label || key}
          </div>
        );
      })}
    </div>
  );
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
};

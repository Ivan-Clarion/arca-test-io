"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const PIE_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const AXIS_TICK = { fontSize: 11, fill: "var(--muted)" };

/**
 * Renders a chart whose TYPE was chosen by Gemini after scanning a document.
 * Expects: { type: "bar"|"line"|"area"|"pie", title, data: [{label, value}] }.
 * Returns null when there is no usable numeric data.
 */
export default function GeminiChart({ chart }) {
  const data = (chart?.data || []).filter(
    (d) => d && typeof d.value === "number" && isFinite(d.value)
  );
  if (data.length === 0) return null;

  const type = ["bar", "line", "area", "pie"].includes(chart.type)
    ? chart.type
    : "bar";
  const config = {
    value: { label: chart.title || "Value", color: "var(--chart-1)" },
  };

  return (
    <div className="rounded-3xl border border-border bg-surface p-5">
      {chart.title && (
        <p className="mb-3 text-sm font-semibold text-foreground">
          {chart.title}
        </p>
      )}
      <ChartContainer config={config} className="h-64">
        {renderChart(type, data)}
      </ChartContainer>
    </div>
  );
}

function renderChart(type, data) {
  if (type === "pie") {
    return (
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="label" hideLabel />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          innerRadius={55}
          outerRadius={95}
          paddingAngle={2}
          stroke="var(--background)"
          strokeWidth={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }

  if (type === "line") {
    return (
      <LineChart data={data} margin={{ top: 12, right: 16, left: 8, bottom: 0 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={AXIS_TICK} interval={0} />
        <YAxis hide />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="var(--color-value)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "var(--color-value)" }}
        />
      </LineChart>
    );
  }

  if (type === "area") {
    return (
      <AreaChart data={data} margin={{ top: 12, right: 16, left: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="fillGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.5} />
            <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={AXIS_TICK} interval={0} />
        <YAxis hide />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="var(--color-value)"
          strokeWidth={2.5}
          fill="url(#fillGold)"
        />
      </AreaChart>
    );
  }

  // default: bar
  return (
    <BarChart data={data} margin={{ top: 12, right: 16, left: 8, bottom: 0 }}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="label" tickLine={false} axisLine={false} tick={AXIS_TICK} interval={0} />
      <YAxis hide />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="value" fill="var(--color-value)" radius={[6, 6, 0, 0]} />
    </BarChart>
  );
}

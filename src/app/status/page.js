import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Status — Tester.io",
  description: "Real-time operational status and uptime for Tester.io services.",
};

const systems = [
  { name: "Document scanning", status: "Operational" },
  { name: "Folder sync", status: "Operational" },
  { name: "Insights dashboard", status: "Operational" },
  { name: "Alerts & notifications", status: "Operational" },
  { name: "API", status: "Operational" },
  { name: "Authentication & SSO", status: "Operational" },
];

const uptime = [
  { label: "Last 24 hours", value: "100%" },
  { label: "Last 7 days", value: "100%" },
  { label: "Last 90 days", value: "99.98%" },
];

export default function StatusPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Status"
        title="System status."
        subtitle="Live operational status across every Tester.io service. Subscribe for incident updates from the link below."
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-5">
            <CheckCircle2 className="h-6 w-6 text-emerald-400" strokeWidth={2} />
            <span className="font-semibold text-emerald-200">
              All systems operational
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {uptime.map((u, i) => (
            <Reveal key={u.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface px-4 py-6 text-center">
                <span className="text-2xl font-bold text-gradient-gold">
                  {u.value}
                </span>
                <span className="text-xs text-muted">{u.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
          {systems.map((system, i) => (
            <Reveal key={system.name} delay={i * 50}>
              <div className="flex items-center justify-between border-b border-border px-6 py-4 last:border-b-0">
                <span className="text-sm">{system.name}</span>
                <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {system.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-8 text-center text-sm text-muted">
            Want incident alerts? Email{" "}
            <a
              href="mailto:status@tester.io"
              className="text-gold transition hover:text-foreground"
            >
              status@tester.io
            </a>{" "}
            to subscribe.
          </p>
        </Reveal>
      </section>
    </main>
  );
}

import { Eye, ShieldCheck, Zap, Users } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import InfoCard from "@/components/ui/InfoCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About — Tester.io",
  description:
    "Why Tester.io exists: to make sure nothing important stays buried in your company's documents.",
};

const values = [
  {
    icon: Eye,
    title: "Clarity over noise",
    body: "We surface the handful of things that matter, not another dashboard you have to read.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by default",
    body: "Your documents are sensitive. Security and privacy are built into every scan, not bolted on.",
  },
  {
    icon: Zap,
    title: "Speed to insight",
    body: "From a connected folder to a prioritized list of risks in seconds — not weeks of manual review.",
  },
  {
    icon: Users,
    title: "Built for teams",
    body: "Finance, HR, IT, Projects, Sales — one place where every department's signals come together.",
  },
];

const stats = [
  { value: "5", label: "Departments mapped per scan" },
  { value: "100%", label: "Of each document read" },
  { value: "Seconds", label: "To first insight" },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="About"
        title="We make sure nothing important stays buried."
        subtitle="Tester.io started from a simple frustration: the answers were always in the documents — an expired license, an overdue role, a decision never recorded — but nobody had time to read every file."
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              Every company runs on documents. Spreadsheets track budgets and
              pipelines. Memos record decisions. Policies define how things
              should work. But those files pile up across folders faster than
              anyone can keep up — and the most important details quietly slip
              through the cracks.
            </p>
            <p>
              We built Tester.io to read what your team can&apos;t. It connects
              to your folder tree, reads every document end to end, and surfaces
              the risks, deadlines, and decisions that need attention — before
              they turn into problems.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <SectionHeading eyebrow="What we value" title="How we work." />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <InfoCard icon={value.icon} title={value.title}>
                {value.body}
              </InfoCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface px-4 py-8 text-center">
                <span className="text-3xl font-bold text-gradient-gold">
                  {stat.value}
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

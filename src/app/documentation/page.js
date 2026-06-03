import { Rocket, FolderTree, CalendarClock, ShieldCheck, Terminal, Puzzle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import BentoCard from "@/components/ui/BentoCard";

export const metadata = {
  title: "Documentation — Tester.io",
  description: "Guides and references for setting up and getting the most out of Tester.io.",
};

const docs = [
  { icon: Rocket, title: "Getting started", body: "Create your workspace, connect a folder, and read your first insights in minutes.", count: "6 articles" },
  { icon: FolderTree, title: "Connecting folders", body: "Map a folder tree or connect a drive, and control which departments are scanned.", count: "5 articles" },
  { icon: CalendarClock, title: "Scans & schedules", body: "Configure weekly, daily, or hourly scans and tune what gets flagged.", count: "4 articles" },
  { icon: ShieldCheck, title: "Security & access", body: "Roles, SSO, audit logs, and data classification settings explained.", count: "7 articles" },
  { icon: Terminal, title: "API reference", body: "Authenticate, trigger scans, and pull insights programmatically.", count: "12 endpoints" },
  { icon: Puzzle, title: "Integrations", body: "Connect Tester.io to the drives and tools your team already uses.", count: "9 articles" },
];

export default function DocumentationPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Documentation"
        title="Everything you need to get going."
        subtitle="From your first folder connection to advanced API usage — clear, practical references for every part of Tester.io."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc, i) => (
            <Reveal key={doc.title} delay={i * 70}>
              <BentoCard>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-gold text-[#1a1208]">
                  <doc.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{doc.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {doc.body}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">
                  {doc.count}
                </span>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

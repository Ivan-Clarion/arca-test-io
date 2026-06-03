import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Guides — Tester.io",
  description: "Practical, step-by-step guides for getting more out of your document scans.",
};

const guides = [
  { tag: "Setup", title: "Connecting your first folder tree", read: "4 min read", body: "A walkthrough of mapping a department folder and running your first scan." },
  { tag: "Risk", title: "Catching expired licenses before they bite", read: "6 min read", body: "How Tester.io flags lapsed licenses and unprotected endpoints across IT documents." },
  { tag: "Finance", title: "Spotting budget overruns across quarters", read: "5 min read", body: "Turn a folder of financial reviews into a clear view of cost spikes and variance." },
  { tag: "HR", title: "Tracking overdue roles automatically", read: "5 min read", body: "Surface roles that have sat open too long, straight from recruitment reports." },
  { tag: "Projects", title: "Never miss an unrecorded decision again", read: "7 min read", body: "Detect approvals with no recorded outcome and route them to the right owner." },
  { tag: "Admin", title: "Setting up roles, SSO, and audit logs", read: "8 min read", body: "Configure access controls so the right people see the right documents." },
];

export default function GuidesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Guides"
        title="Get more out of every scan."
        subtitle="Hands-on guides that walk through real workflows — from your first folder to advanced risk detection."
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col gap-3">
          {guides.map((guide, i) => (
            <Reveal key={guide.title} delay={i * 60}>
              <a
                href="#"
                className="group flex items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gradient-gold">
                    {guide.tag} · {guide.read}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{guide.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {guide.body}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-muted transition group-hover:text-gold">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

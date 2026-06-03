import { MapPin, Heart, Sprout, Globe, Coins } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import InfoCard from "@/components/ui/InfoCard";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Careers — Tester.io",
  description:
    "Join Tester.io. Help build the document intelligence platform that surfaces what matters.",
};

const perks = [
  { icon: Globe, title: "Remote-first", body: "Work from anywhere. We hire across time zones and bias toward async." },
  { icon: Coins, title: "Real ownership", body: "Meaningful equity and a say in what we build next." },
  { icon: Heart, title: "Health & wellness", body: "Comprehensive medical coverage and a wellness stipend." },
  { icon: Sprout, title: "Learning budget", body: "An annual budget for courses, books, and conferences." },
];

const roles = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote" },
  { title: "ML Engineer, Document Understanding", team: "Engineering", location: "Remote" },
  { title: "Product Designer", team: "Design", location: "Remote" },
  { title: "Customer Success Manager", team: "Success", location: "Manila / Remote" },
  { title: "Account Executive", team: "Sales", location: "Remote" },
];

export default function CareersPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Careers"
        title="Build the tool that reads everything."
        subtitle="We're a small, focused team teaching software to understand the documents companies run on. If that sounds like your kind of problem, we'd love to talk."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading eyebrow="Why join" title="Perks & benefits." />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 80}>
              <InfoCard icon={perk.icon} title={perk.title}>
                {perk.body}
              </InfoCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal>
          <SectionHeading eyebrow="Open roles" title="We're hiring." />
        </Reveal>
        <div className="mt-12 flex flex-col gap-3">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 60}>
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="mt-1 flex items-center gap-3 text-sm text-muted">
                    <span>{role.team}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {role.location}
                    </span>
                  </p>
                </div>
                <Button href="/contact" variant="outline">
                  Apply
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

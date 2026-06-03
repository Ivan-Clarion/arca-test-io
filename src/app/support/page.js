import { BookOpen, MessagesSquare, Activity, LifeBuoy } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import BentoCard from "@/components/ui/BentoCard";

export const metadata = {
  title: "Support — Tester.io",
  description: "Get help with Tester.io — documentation, live support, and system status.",
};

const options = [
  { icon: BookOpen, title: "Browse the docs", body: "Step-by-step references for setup, scans, security, and the API.", action: "Read documentation", href: "/documentation" },
  { icon: MessagesSquare, title: "Contact our team", body: "Reach support directly and get a reply within one business day.", action: "Get in touch", href: "/contact" },
  { icon: Activity, title: "Check system status", body: "See real-time uptime and any ongoing incidents across our services.", action: "View status", href: "/status" },
  { icon: LifeBuoy, title: "Read the guides", body: "Hands-on walkthroughs for common workflows and use cases.", action: "Explore guides", href: "/guides" },
];

const topics = [
  "Why is my folder not being scanned?",
  "How do I add or remove team seats?",
  "Can I change my scan schedule?",
  "How do I enable SSO for my workspace?",
  "Where can I export my insights?",
];

export default function SupportPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Support"
        title="We're here to help."
        subtitle="Whether you're setting up your first scan or rolling Tester.io out company-wide, there's a fast path to an answer."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {options.map((option, i) => (
            <Reveal key={option.title} delay={i * 80}>
              <BentoCard>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-gold text-[#1a1208]">
                  <option.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{option.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {option.body}
                </p>
                <Link
                  href={option.href}
                  className="mt-4 text-sm font-semibold text-gold transition hover:text-foreground"
                >
                  {option.action} →
                </Link>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal>
          <h2 className="text-xl font-semibold">Popular topics</h2>
        </Reveal>
        <div className="mt-6 flex flex-col gap-2">
          {topics.map((topic, i) => (
            <Reveal key={topic} delay={i * 50}>
              <a
                href="/documentation"
                className="block rounded-xl border border-border bg-surface px-5 py-4 text-sm transition hover:border-gold/40 hover:text-gold"
              >
                {topic}
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

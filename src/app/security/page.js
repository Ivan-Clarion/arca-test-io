import { Lock, KeyRound, FileLock2, ScrollText, ServerCog, EyeOff } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import InfoCard from "@/components/ui/InfoCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Security — Tester.io",
  description:
    "How Tester.io protects your documents: encryption, access controls, audit logging, and data classification.",
};

const practices = [
  { icon: Lock, title: "Encryption everywhere", body: "Documents are encrypted in transit (TLS 1.2+) and at rest (AES-256). Restricted data is encrypted with per-tenant keys." },
  { icon: KeyRound, title: "MFA & SSO", body: "Multi-factor authentication on every account, with SAML/OIDC single sign-on available on Enterprise plans." },
  { icon: FileLock2, title: "Data classification", body: "Public, Internal, Confidential, and Restricted tiers are respected end to end — confidential files are handled on a need-to-know basis." },
  { icon: ScrollText, title: "Audit logging", body: "Every scan and access is recorded. Tamper-evident audit logs are available to Team and Enterprise customers." },
  { icon: ServerCog, title: "Deployment options", body: "Run on our hardened cloud, or deploy Tester.io on-premise within your own environment for full data residency." },
  { icon: EyeOff, title: "Least privilege", body: "We read your documents to surface insights — never to train shared models. Your data stays yours." },
];

export default function SecurityPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Security"
        title="Your documents, protected by design."
        subtitle="Tester.io reads some of the most sensitive files your company has. Security isn't a feature here — it's the foundation everything is built on."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Our practices"
            title="How we keep your data safe."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice, i) => (
            <Reveal key={practice.title} delay={i * 70}>
              <InfoCard icon={practice.icon} title={practice.title}>
                {practice.body}
              </InfoCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted">
            Need our security documentation or a DPA? Email{" "}
            <a
              href="mailto:security@tester.io"
              className="text-gold transition hover:text-foreground"
            >
              security@tester.io
            </a>
            .
          </p>
        </Reveal>
      </section>
    </main>
  );
}

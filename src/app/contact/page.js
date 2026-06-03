import { Mail, Headphones, Briefcase } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import InfoCard from "@/components/ui/InfoCard";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact — Tester.io",
  description: "Get in touch with the Tester.io team — sales, support, or general questions.",
};

const channels = [
  { icon: Briefcase, title: "Sales", body: "sales@tester.io" },
  { icon: Headphones, title: "Support", body: "support@tester.io" },
  { icon: Mail, title: "General", body: "hello@tester.io" },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your folders."
        subtitle="Questions about a plan, a security review, or just want to see Tester.io on your own documents? Reach out — we usually reply within one business day."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 80}>
                <InfoCard icon={channel.icon} title={channel.title}>
                  <a
                    href={`mailto:${channel.body}`}
                    className="text-gold transition hover:text-foreground"
                  >
                    {channel.body}
                  </a>
                </InfoCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

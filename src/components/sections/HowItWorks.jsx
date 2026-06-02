import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { howItWorks } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From folder to insight in three steps."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {howItWorks.map(({ icon: Icon, step, title, description }, i) => (
            <Reveal key={step} delay={i * 120}>
              <div className="relative flex flex-col gap-4">
                <span className="text-sm font-bold tracking-widest text-gradient-gold">
                  {step}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 text-gold">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

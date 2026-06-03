import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/sections/PricingCard";
import { pricing } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            subtitle={pricing.subtitle}
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {pricing.plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 90}
              className={plan.featured ? "md:-mt-4 md:mb-4" : ""}
            >
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

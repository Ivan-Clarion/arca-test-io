import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FeatureCard from "@/components/sections/FeatureCard";
import { features } from "@/data/content";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="What it does"
          title="One scan. Every signal."
          subtitle="Tester.io turns folders full of documents into a clear, prioritized picture of your business."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(190px,1fr)] lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.id} delay={i * 70} className={feature.span}>
            <FeatureCard {...feature} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

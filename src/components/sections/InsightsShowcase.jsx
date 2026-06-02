import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InsightCard from "@/components/sections/InsightCard";
import { insights } from "@/data/content";

export default function InsightsShowcase() {
  return (
    <section id="insights" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Real scan, real findings"
          title="What Tester.io found in one folder."
          subtitle="A single scan of a sample company drive surfaced these — the kind of signals that stay buried until it's too late."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(230px,1fr)] lg:grid-cols-4">
        {insights.map((insight, i) => (
          <Reveal key={insight.id} delay={i * 70} className={insight.span}>
            <InsightCard
              {...insight}
              featured={insight.span.includes("row-span-2")}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

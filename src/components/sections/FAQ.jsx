import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FAQItem from "@/components/sections/FAQItem";
import { faq } from "@/data/content";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
        />
      </Reveal>

      <div className="mt-12 flex flex-col gap-3">
        {faq.items.map((item, i) => (
          <Reveal key={item.q} delay={i * 70}>
            <FAQItem question={item.q} answer={item.a} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

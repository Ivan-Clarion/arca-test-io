import Button from "@/components/ui/Button";
import BentoCard from "@/components/ui/BentoCard";
import Reveal from "@/components/ui/Reveal";
import { cta } from "@/data/content";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
        {/* Primary call tile */}
        <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-3">
          <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-gold/30 bg-surface p-10 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/3 h-72 w-[520px] -translate-x-1/2 rounded-full bg-gold/20 blur-[110px]"
            />
            <div className="relative flex flex-col gap-6">
              <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {cta.title}
              </h2>
              <p className="max-w-md text-muted">{cta.subtitle}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#">{cta.primaryCta}</Button>
                <Button href="#features" variant="outline">
                  {cta.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Highlight tiles */}
        {cta.highlights.map(({ icon: Icon, stat, label }, i) => (
          <Reveal key={label} delay={120 + i * 90}>
            <BentoCard className="justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 text-gold">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-3 text-2xl font-bold text-gradient-gold">
                {stat}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{label}</p>
            </BentoCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

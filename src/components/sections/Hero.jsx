import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroBackground from "@/components/sections/HeroBackground";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        <Reveal>
          <span className="rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
            {hero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Surface what matters in{" "}
            <span className="text-gradient-gold">every document.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#cta">{hero.primaryCta}</Button>
            <Button href="#features" variant="outline">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <dl className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {hero.stats.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={320 + i * 90}>
              <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface/60 px-4 py-6 backdrop-blur-sm">
                <dt className="text-3xl font-bold text-gradient-gold">
                  {stat.value}
                </dt>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

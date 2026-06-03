import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import InsightsShowcase from "@/components/sections/InsightsShowcase";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <HowItWorks />
      <InsightsShowcase />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}

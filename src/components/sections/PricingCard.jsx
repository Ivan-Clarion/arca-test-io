import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

/**
 * A single pricing plan tile.
 * The `featured` plan is visually elevated with a gold gradient border,
 * a "Most popular" badge, and a primary CTA.
 */
export default function PricingCard({
  name,
  price,
  period,
  blurb,
  features,
  cta,
  featured = false,
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-px transition duration-300 ${
        featured
          ? "gradient-gold shadow-2xl shadow-amber-900/30"
          : "bg-border hover:bg-gold/40"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-semibold tracking-wide text-[#1a1208]">
          Most popular
        </span>
      )}

      <div
        className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-8 ${
          featured ? "bg-surface-raised" : "bg-surface"
        }`}
      >
        <h3 className="text-lg font-semibold">{name}</h3>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-4xl font-bold tracking-tight text-gradient-gold">
            {price}
          </span>
          <span className="pb-1 text-sm text-muted">{period}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{blurb}</p>

        <ul className="mt-7 flex flex-1 flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-gold text-[#1a1208]">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href="/get-started"
          variant={featured ? "primary" : "outline"}
          className="mt-8 w-full"
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}

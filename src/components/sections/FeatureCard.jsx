import BentoCard from "@/components/ui/BentoCard";
import { featureVisuals } from "@/components/sections/FeatureVisuals";

/**
 * A single bento feature tile: gold icon chip, title, description,
 * and an optional decorative visual resolved from its `visual` id.
 * Grid spans are applied by the parent (on the Reveal wrapper); this
 * card simply fills its cell.
 */
export default function FeatureCard({ icon: Icon, title, description, visual }) {
  const Visual = visual ? featureVisuals[visual] : null;

  return (
    <BentoCard>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-gold text-[#1a1208]">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {Visual && <Visual />}
    </BentoCard>
  );
}

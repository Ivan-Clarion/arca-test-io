import BentoCard from "@/components/ui/BentoCard";

/**
 * Reusable content tile for inner pages: optional gold icon chip,
 * a title, and free-form body content (string or nodes).
 */
export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <BentoCard>
      {Icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-gold text-[#1a1208]">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
      )}
      {title && <h3 className="mt-4 text-lg font-semibold">{title}</h3>}
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </BentoCard>
  );
}

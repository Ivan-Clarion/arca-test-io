import Image from "next/image";

/**
 * Photo-backed bento insight tile.
 * A full-bleed image sits behind a dark gradient so the gold/white text
 * stays readable. `tone` drives the tag chip + accent color.
 * `span` carries the bento grid-span classes.
 */
const toneStyles = {
  danger: "bg-red-500/20 text-red-200 border-red-400/40",
  warning: "bg-amber-500/20 text-amber-100 border-amber-400/40",
  good: "bg-emerald-500/20 text-emerald-100 border-emerald-400/40",
};

export default function InsightCard({
  tag,
  title,
  detail,
  image,
  tone = "warning",
  featured = false,
}) {
  const chip = toneStyles[tone] ?? toneStyles.warning;

  return (
    <article
      className="group relative flex h-full min-h-57.5 flex-col justify-between overflow-hidden rounded-3xl border border-border p-6 transition hover:border-gold/50"
    >
      {/* photo */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      {/* dark gradient for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/30"
      />

      {/* content */}
      <div className="relative">
        <span
          className={`inline-block rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${chip}`}
        >
          {tag}
        </span>
      </div>

      <div className="relative">
        <h3
          className={`font-bold leading-snug ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-muted ${
            featured ? "text-base max-w-md" : "text-sm"
          }`}
        >
          {detail}
        </p>
      </div>
    </article>
  );
}

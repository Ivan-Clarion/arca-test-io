/**
 * Brand button. Two variants from the guidelines:
 *  - "primary": gradient gold fill (Get Started)
 *  - "outline": gold-outlined, transparent (Learn More)
 */
const variants = {
  primary:
    "gradient-gold text-[#1a1208] font-semibold shadow-lg shadow-amber-900/20 hover:brightness-110",
  outline:
    "border border-gold text-gold font-semibold hover:bg-gold/10",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

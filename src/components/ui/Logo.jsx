import Image from "next/image";

/**
 * Tester.io lockup: gold checkmark mark + wordmark.
 * `withWordmark={false}` renders the mark alone.
 */
export default function Logo({ withWordmark = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/tester-logo.png"
        alt="Tester.io logo"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
        priority
      />
      {withWordmark && (
        <span className="text-xl font-bold tracking-tight">
          Tester<span className="text-gradient-gold">.io</span>
        </span>
      )}
    </span>
  );
}

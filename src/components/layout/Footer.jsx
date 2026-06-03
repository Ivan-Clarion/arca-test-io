import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Tester.io home">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Tester.io. All rights reserved.</p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

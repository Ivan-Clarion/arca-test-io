import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { nav } from "@/data/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Tester.io home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            href="/#pricing"
            variant="outline"
            className="hidden sm:inline-flex"
          >
            Learn More
          </Button>
          <Button href="/#cta">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}

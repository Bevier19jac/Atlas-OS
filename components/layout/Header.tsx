import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/blueprint", label: "Blueprint" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/intake", label: "Intake" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-atlas-navy/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-bold text-atlas-navy">
            A
          </span>
          <span className="text-base font-semibold tracking-tight">Atlas OS</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/intake" size="sm">
          Start Sprint
        </Button>
      </div>
    </header>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-atlas-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Atlas OS. Strategy before software.</p>
        <div className="flex gap-5">
          <Link href="/blueprint" className="hover:text-atlas-ink">
            Blueprint
          </Link>
          <Link href="/dashboard" className="hover:text-atlas-ink">
            Dashboard
          </Link>
          <Link href="/intake" className="hover:text-atlas-ink">
            Start Intake
          </Link>
        </div>
      </div>
    </footer>
  );
}

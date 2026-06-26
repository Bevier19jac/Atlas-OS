import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function HeroSection() {
  return (
    <section className="bg-atlas-navy text-white">
      <SectionContainer className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
            The practical AI operating system for entrepreneurs
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Turn scattered ideas into executable businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Atlas OS helps ambitious entrepreneurs clarify, package, and
            execute profitable business ideas using AI, automation, and
            disciplined strategy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/intake">Start Your Idea Sprint</Button>
            <Button href="/blueprint" variant="ghost">
              View the Blueprint
            </Button>
          </div>
        </div>
        <Card className="border-white/10 bg-white/95 text-atlas-ink">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
            Sprint Objective
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            From messy idea to monetizable business blueprint.
          </h2>
          <dl className="mt-6 grid gap-4">
            {[
              ["Concept", "Clarify what the business actually is."],
              ["Customer", "Define the first reachable buyer."],
              ["Offer", "Package a paid sprint or service."],
              ["Execution", "Map the next 30 days of progress."],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-atlas-line bg-atlas-cloud p-4">
                <dt className="font-semibold text-atlas-ink">{label}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </SectionContainer>
    </section>
  );
}

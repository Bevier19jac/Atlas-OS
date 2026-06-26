import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Badge } from "@/components/ui/Badge";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { dashboardCards, sampleEntrepreneurProfile } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge>Client workspace preview</Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-atlas-ink sm:text-5xl">
            Sprint command center
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Mock dashboard for {sampleEntrepreneurProfile.name}, showing the
            future workspace for sprint progress, blueprint assets, and the
            next action.
          </p>
        </div>
        <div className="rounded-md border border-atlas-line bg-white px-4 py-3 text-sm text-slate-700 shadow-soft">
          Status: <span className="font-semibold text-atlas-green">Strategy sprint active</span>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {dashboardCards.map((card) => (
          <DashboardCard key={card.title} card={card} />
        ))}
      </div>
    </SectionContainer>
  );
}

import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";

const deliverables = [
  "Clear business concept",
  "Target customer and pain statement",
  "First paid offer and revenue model",
  "30-day execution roadmap",
  "AI and automation opportunities",
  "Build/no-build recommendation",
];

export function OfferSection() {
  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
            First paid offer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-atlas-ink sm:text-4xl">
            Atlas Idea-to-Business Sprint
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A productized strategy sprint for founders who need business
            clarity before investing in software, systems, or campaigns.
          </p>
        </div>
        <Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((deliverable) => (
              <div key={deliverable} className="rounded-md bg-atlas-cloud px-4 py-3 text-sm font-semibold text-atlas-ink">
                {deliverable}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

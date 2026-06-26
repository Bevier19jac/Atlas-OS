import { BlueprintSection } from "@/components/blueprint/BlueprintSection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { sampleAtlasBlueprint } from "@/lib/mock-data";

export default function BlueprintPage() {
  const blueprint = sampleAtlasBlueprint;

  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <Badge>{blueprint.sprintObjective.status}</Badge>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-atlas-ink sm:text-5xl">
          {blueprint.name}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A sample output of the Atlas Idea-to-Business Sprint, designed to
          show the structure before real client data, AI generation, or a
          production database are connected.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5">
          <BlueprintSection title="Business Concept" body={blueprint.businessConcept} />
          <BlueprintSection title="Target Customer" body={blueprint.targetCustomer} />
          <BlueprintSection title="Problem Statement" body={blueprint.problemStatement} />
          <BlueprintSection title="First Offer" body={blueprint.firstOffer} />
          <BlueprintSection title="Revenue Model" body={blueprint.revenueModel} />
          <BlueprintSection title="Differentiation" body={blueprint.differentiation} />
        </div>

        <div className="grid gap-5">
          <Card>
            <h2 className="text-xl font-semibold text-atlas-ink">30-Day Roadmap</h2>
            <div className="mt-5 grid gap-4">
              {blueprint.roadmap.map((item) => (
                <div key={item.week} className="rounded-md border border-atlas-line bg-atlas-cloud p-4">
                  <p className="text-sm font-semibold text-atlas-green">{item.week}</p>
                  <h3 className="mt-1 font-semibold text-atlas-ink">{item.objective}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.deliverable}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-atlas-ink">AI Automation Opportunities</h2>
            <div className="mt-5 grid gap-4">
              {blueprint.automationOpportunities.map((item) => (
                <div key={item.name} className="border-l-4 border-atlas-green pl-4">
                  <h3 className="font-semibold text-atlas-ink">{item.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.description}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-atlas-amber">
                    {item.priority} priority
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <BlueprintSection
            title="Build/No-Build Recommendation"
            body={`${blueprint.buildRecommendation.decision}: ${blueprint.buildRecommendation.rationale}`}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function FounderSection() {
  return (
    <div className="bg-white">
      <SectionContainer className="py-14 sm:py-20">
        <Card className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
              Founder credibility
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-atlas-ink">
              Built for operators who want substance before scale.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            Atlas is shaped around disciplined customer discovery, practical
            automation, and recurring revenue. The first sprint keeps the scope
            tight: clarify the business, package the offer, and identify what
            deserves to be built next.
          </p>
        </Card>
      </SectionContainer>
    </div>
  );
}

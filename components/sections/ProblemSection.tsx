import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";

const problems = [
  "Ideas stay vague because the founder jumps to tools before strategy.",
  "Offers are unclear, so prospects cannot tell what they are buying.",
  "Execution fragments across notes, automations, websites, and half-built apps.",
];

export function ProblemSection() {
  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
          The problem
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-atlas-ink sm:text-4xl">
          Most entrepreneurs do not need more tools first. They need a sharper business.
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem}>
            <p className="text-base leading-7 text-slate-700">{problem}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

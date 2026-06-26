import { IntakeForm } from "@/components/forms/IntakeForm";
import { SectionContainer } from "@/components/ui/SectionContainer";

export default function IntakePage() {
  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
          Atlas intake
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-atlas-ink sm:text-5xl">
          Start with the messy idea.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Atlas turns raw context into a focused sprint objective, practical
          business model, and execution roadmap. No pitch polish required.
        </p>
        <IntakeForm />
      </div>
    </SectionContainer>
  );
}

import { SectionContainer } from "@/components/ui/SectionContainer";

const steps = [
  {
    title: "Intake",
    description: "Capture the founder's idea, constraints, customer assumptions, and desired outcome.",
  },
  {
    title: "Strategy",
    description: "Shape the concept, pain, audience, first offer, and revenue model before building.",
  },
  {
    title: "Blueprint",
    description: "Deliver a clear 30-day roadmap with automation opportunities and a build/no-build call.",
  },
];

export function HowItWorksSection() {
  return (
    <div className="bg-white">
      <SectionContainer className="py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
            How Atlas works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-atlas-ink sm:text-4xl">
            One sprint. One objective. Real progress.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-md border border-atlas-line bg-atlas-cloud p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-atlas-navy text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-atlas-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function CTASection() {
  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="rounded-md bg-atlas-charcoal px-6 py-10 text-white sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Strategy before software.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-200">
              Start with the idea. Atlas will turn it into a business blueprint
              that can guide the next practical build decision.
            </p>
          </div>
          <Button href="/intake">Start Your Idea Sprint</Button>
        </div>
      </div>
    </SectionContainer>
  );
}

import { CTASection } from "@/components/sections/CTASection";
import { FounderSection } from "@/components/sections/FounderSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <OfferSection />
      <FounderSection />
      <CTASection />
    </>
  );
}

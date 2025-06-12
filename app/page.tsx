import { HeroSection } from "@/components/sections/hero-section";
import { SectionOne } from "@/components/sections/section-one";
import { IndustriesSection } from "@/components/sections/industries-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { InvestorHighlightSection } from "@/components/sections/investor-highlight-section";
import { SignupSection } from "@/components/sections/signup-section";

export default function Home() {
  return (
    <>
      <SectionOne />
      <HeroSection />
      <IndustriesSection />
      <CapabilitiesSection />
      <InvestorHighlightSection />
      <SignupSection />
    </>
  );
}
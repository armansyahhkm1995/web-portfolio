import CertificationSection from "@/components/sections/about/CertificationSection";
import ExpertSection from "@/components/sections/about/ExpertSection";
import FalahSection from "@/components/sections/about/FalahSection";
import HeroSection from "@/components/sections/about/HeroSection";
import LeaderSection from "@/components/sections/about/LeaderSection";
import TrustSection from "@/components/sections/about/TrustSection";
import VisionSection from "@/components/sections/about/VisionSection";
import FinalCtaSection from "@/components/sections/about/FinalCtaSection";

export default function About() {
  return (
    <>
      <HeroSection />
      <FalahSection />
      <VisionSection />
      <LeaderSection />
      <ExpertSection />
      <TrustSection />
      <CertificationSection />
      <FinalCtaSection />
    </>
  );
}

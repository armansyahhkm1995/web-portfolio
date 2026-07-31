import HeroSection from "@/components/sections/home/HeroSection";
import ProblemSection from "@/components/sections/home/ProblemSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";
import SolutionSection from "@/components/sections/home/SolutionSection";
import ExpertiseSection from "@/components/sections/home/ExpertiseSection";
import FaqSection from "@/components/sections/home/FaqSection";
import CertificationSection from "@/components/sections/home/CertificationSection";
import FinalCtaSection from "@/components/sections/home/FinalCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeaturedSection />
      <SolutionSection />
      <ExpertiseSection />
      <CertificationSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

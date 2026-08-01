import FinalCtaSection from "@/components/sections/solution/FinalCtaSection";
import HeroSection from "@/components/sections/solution/HeroSection";
import ProductSection from "@/components/sections/solution/ProductSection";
import { Suspense } from "react";

export default function SolutionsPage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={null}>
        <ProductSection />
      </Suspense>
      <FinalCtaSection />
    </>
  );
}

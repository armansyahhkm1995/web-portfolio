import { notFound } from "next/navigation";

import HeroSection from "@/components/sections/product/HeroSection";
import ChallengeSection from "@/components/sections/product/ChallengeSection";
import FinalCtaSection from "@/components/sections/product/FinalCtaSection";
import ShowcaseSection from "@/components/sections/product/ShowcaseSection";
import { getProductPageData } from "@/lib/product";

type Props = {
  params: Promise<{
    category: string;
    product: string;
  }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { category, product } = await params;

  const data = getProductPageData(category, product);

  if (!data) {
    notFound();
  }

  return (
    <>
      <HeroSection product={data} />
      <ChallengeSection product={data} />
      <ShowcaseSection product={data} />
      <FinalCtaSection />
    </>
  );
}

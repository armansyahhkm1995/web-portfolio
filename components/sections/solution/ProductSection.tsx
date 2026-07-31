"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { solutionData } from "@/data/solution/solutionData";
import ProductCard from "@/components/product/ProductCard";

export default function ProductSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  const activeSolution =
    solutionData.find((item) => item.slug === category)?.slug ??
    solutionData[0].slug;

  const currentSolution =
    solutionData.find((item) => item.slug === activeSolution) ??
    solutionData[0];

  const handleTabChange = (slug: string) => {
    router.replace(`/solutions?category=${slug}`, {
      scroll: false,
    });
  };

  return (
    <section className="site-container py-24">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="body-xs mb-5 inline-flex rounded-full border border-white/15 px-4 py-2">
          Solution Overview
        </span>

        <h2 className="display-md text-secondary">
          Integrated Solutions for Modern Operations
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Explore operational ecosystems designed to support simulation,
          training, collaboration, and infrastructure management.
        </p>
      </div>

      {/* Tabs */}

      <div className="mb-8 flex flex-wrap gap-3">
        {solutionData.map((solution) => (
          <button
            key={solution.slug}
            type="button"
            onClick={() => handleTabChange(solution.slug)}
            className={`
              body-sm
              rounded-xl
              border
              px-6
              py-3
              transition

              ${
                activeSolution === solution.slug
                  ? "border-primary bg-primary/10 text-white"
                  : "border-white/10 text-muted-foreground hover:border-primary/40"
              }
            `}
          >
            {solution.title}
          </button>
        ))}
      </div>

      {/* Product Grid */}

      <div className="grid auto-rows-85 gap-5 lg:grid-cols-3">
        {currentSolution.products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            featured={index === 0}
            solutionSlug={currentSolution.slug}
          />
        ))}
      </div>
    </section>
  );
}

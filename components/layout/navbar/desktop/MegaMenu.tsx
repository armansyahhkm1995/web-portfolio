"use client";

import { useState } from "react";
import { solutionData } from "@/data/solution/solutionData";
import MegaMenuCategories from "./MegaMenuCategories";
import MegaMenuPreview from "./MegaMenuPreview";
import MegaMenuProducts from "./MegaMenuProducts";

type MegaMenuProps = {
  menuRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
};

export default function MegaMenu({ menuRef, onClose }: MegaMenuProps) {
  const [activeSolution, setActiveSolution] = useState(solutionData[0]);
  const [activeProduct, setActiveProduct] = useState(
    solutionData[0].products[0],
  );

  return (
    <div
      ref={menuRef}
      className="
        site-container
        fixed
        left-0
        right-0
        top-20
        z-50
        h-137.5
        border-b
        border-white/5
        bg-background/90
        py-8
        shadow-2xl
        backdrop-blur-xl
      "
    >
      <div className="grid grid-cols-[280px_1fr_320px]">
        {/* LEFT */}

        <MegaMenuCategories
          solutions={solutionData}
          activeSolution={activeSolution}
          onHover={(solution) => {
            setActiveSolution(solution);
            setActiveProduct(solution.products[0]);
          }}
        />

        {/* CENTER */}

        <div className="border-r border-white/10 p-6">
          <MegaMenuPreview
            product={activeProduct}
            solutionSlug={activeSolution.slug}
            onClose={onClose}
          />
        </div>

        {/* RIGHT */}

        <MegaMenuProducts
          products={activeSolution.products}
          solutionSlug={activeSolution.slug}
          activeProduct={activeProduct}
          onHover={setActiveProduct}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

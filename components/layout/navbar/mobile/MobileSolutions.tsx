"use client";

import { ChevronLeft } from "lucide-react";

import { solutionData } from "@/data/solution/solutionData";

import MobileSolutionAccordion from "./MobileSolutionAccordion";

import type { SolutionCategory } from "@/data/solution/solutionData";

type Props = {
  selectedSolution: SolutionCategory | null;
  closeSolutions: () => void;
  toggleSolution: (solution: SolutionCategory) => void;
  onClose: () => void;
};

export default function MobileSolutions({
  selectedSolution,
  closeSolutions,
  toggleSolution,
  onClose,
}: Props) {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col">
      <button
        type="button"
        onClick={closeSolutions}
        className="site-container flex items-center gap-2 py-6"
      >
        <ChevronLeft className="size-5" />

        <span>Back</span>
      </button>

      <div className="site-container flex-1 overflow-y-auto pb-10">
        {solutionData.map((solution) => (
          <MobileSolutionAccordion
            key={solution.slug}
            solution={solution}
            expanded={selectedSolution?.slug === solution.slug}
            onToggle={() => toggleSolution(solution)}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}

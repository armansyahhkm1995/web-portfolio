"use client";

import { useEffect, useState } from "react";
import { solutionData } from "@/data/solution/solutionData";

export default function useMobileMenu(isMenuOpen: boolean) {
  const [showSolutions, setShowSolutions] = useState(false);

  const [selectedSolution, setSelectedSolution] = useState<
    (typeof solutionData)[number] | null
  >(solutionData[0]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // reset state ketika menu ditutup
  useEffect(() => {
    if (!isMenuOpen) {
      setShowSolutions(false);
      setSelectedSolution(solutionData[0]);
    }
  }, [isMenuOpen]);

  function openSolutions() {
    setShowSolutions(true);
  }

  function closeSolutions() {
    setShowSolutions(false);
  }

  function toggleSolution(solution: (typeof solutionData)[number]) {
    setSelectedSolution((prev) =>
      prev?.slug === solution.slug ? null : solution,
    );
  }

  return {
    showSolutions,
    selectedSolution,
    openSolutions,
    closeSolutions,
    toggleSolution,
  };
}

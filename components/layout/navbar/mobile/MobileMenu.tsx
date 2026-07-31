"use client";

import MobileMainMenu from "./MobileMainMenu";
import MobileSolutions from "./MobileSolutions";

import useMobileMenu from "@/hooks/useMobileMenu";

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isMenuOpen, onClose }: MobileMenuProps) {
  const {
    showSolutions,
    selectedSolution,
    openSolutions,
    closeSolutions,
    toggleSolution,
  } = useMobileMenu(isMenuOpen);

  return (
    <div
      className={`
        fixed
        left-0
        right-0
        top-20
        z-50
        border-b
        border-white/5
        bg-background/90
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-300
        md:hidden
        ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      {!showSolutions ? (
        <MobileMainMenu onClose={onClose} openSolutions={openSolutions} />
      ) : (
        <MobileSolutions
          selectedSolution={selectedSolution}
          closeSolutions={closeSolutions}
          toggleSolution={toggleSolution}
          onClose={onClose}
        />
      )}
    </div>
  );
}

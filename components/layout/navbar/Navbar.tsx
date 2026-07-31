"use client";

import { useState } from "react";

import DesktopMenu from "./desktop/DesktopMenu";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import MobileMenu from "./mobile/MobileMenu";
import ScrollProgress from "@/components/common/ScrollProgress";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Logo />
        <DesktopMenu />
        <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} onClose={closeMenu} />
      <ScrollProgress targetId="final-cta" />
    </nav>
  );
}

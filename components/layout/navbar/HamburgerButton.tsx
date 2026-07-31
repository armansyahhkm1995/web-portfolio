import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({
  isMenuOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle navigation"
      aria-expanded={isMenuOpen}
      className="text-foreground transition-colors md:hidden"
    >
      {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
}

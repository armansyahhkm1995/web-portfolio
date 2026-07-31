import Link from "next/link";
import { contactData } from "@/data/navigation/navigationData";

export default function NavbarCTA() {
  return (
    <Link
      href={contactData.href}
      className="
        body-sm
        rounded-lg
        bg-primary
        px-6
        py-3
        font-medium
        text-primary-foreground
        transition-colors
        hover:bg-hover
      "
    >
      {contactData.label}
    </Link>
  );
}

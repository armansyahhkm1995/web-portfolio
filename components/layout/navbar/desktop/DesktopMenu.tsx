"use client";

import { ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";
import NavbarCTA from "../NavbarCTA";
import NavbarLink from "../NavbarLink";
import useDesktopMenu from "@/hooks/useDesktopMenu";
import { navigationData } from "@/data/navigation/navigationData";

export default function DesktopMenu() {
  const desktopMenu = useDesktopMenu();

  return (
    <div className="hidden items-center gap-8 lg:flex">
      {navigationData.map((item) => {
        if (item.label === "Our Solutions") {
          return (
            <div
              key={item.label}
              ref={desktopMenu.menuRef}
              className="relative"
            >
              <button
                type="button"
                onClick={desktopMenu.toggleMenu}
                className="body-sm flex items-center gap-2 text-foreground transition hover:text-primary"
              >
                {item.label}

                <ChevronDown
                  className={`size-4 transition ${
                    desktopMenu.open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopMenu.open && (
                <MegaMenu
                  menuRef={desktopMenu.menuRef}
                  onClose={desktopMenu.closeMenu}
                />
              )}
            </div>
          );
        }

        return (
          <NavbarLink key={item.href} href={item.href}>
            {item.label}
          </NavbarLink>
        );
      })}

      <NavbarCTA />
    </div>
  );
}

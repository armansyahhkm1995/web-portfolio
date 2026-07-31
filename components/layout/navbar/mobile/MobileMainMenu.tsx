"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { navigationData, contactData } from "@/data/navigation/navigationData";

type Props = {
  onClose: () => void;
  openSolutions: () => void;
};

export default function MobileMainMenu({ onClose, openSolutions }: Props) {
  return (
    <div className="site-container py-8">
      <div className="flex flex-col gap-8">
        {navigationData.map((item) => {
          if (item.label === "Our Solutions") {
            return (
              <button
                key={item.label}
                type="button"
                onClick={openSolutions}
                className="flex items-center justify-between"
              >
                <span className="body-lg">{item.label}</span>

                <ChevronDown className="size-5" />
              </button>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="body-lg"
            >
              {item.label}
            </Link>
          );
        })}

        <Link
          href={contactData.href}
          onClick={onClose}
          className="
            body-md
            rounded-lg
            bg-primary
            py-3
            text-center
            text-white
          "
        >
          {contactData.label}
        </Link>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import type { SolutionCategory } from "@/data/solution/solutionData";

type Props = {
  solution: SolutionCategory;
  expanded: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export default function MobileSolutionAccordion({
  solution,
  expanded,
  onToggle,
  onClose,
}: Props) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          py-5
        "
      >
        <span className="display-xs text-white">{solution.title}</span>

        <ChevronDown className={`transition ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="pb-8">
          {/* HERO */}

          <Link
            href={`/solutions?tab=${solution.slug}`}
            onClick={onClose}
            className="group"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                fill
                src={solution.thumbnail}
                alt={solution.title}
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <div className="absolute right-5 top-5 rounded-xl bg-white/10 p-3 backdrop-blur-xl">
                <ArrowUpRight className="size-5 text-white" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="display-sm text-white">{solution.title}</h3>

                <p className="body-sm mt-2 text-white/80">
                  {solution.description}
                </p>
              </div>
            </div>
          </Link>

          {/* PRODUCTS */}

          <div className="mt-6 space-y-5">
            {solution.products.map((product) => (
              <Link
                key={product.slug}
                href={`/solutions/${solution.slug}/${product.slug}`}
                onClick={onClose}
                className="flex gap-4"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    fill
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="display-xs text-white">{product.title}</h4>

                  <p className="body-sm mt-2 text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/solution/solutionData";

type Props = {
  product: Product;
  solutionSlug: string;
  onClose: () => void;
};

export default function MegaMenuPreview({
  product,
  solutionSlug,
  onClose,
}: Props) {
  return (
    <div className="border-r border-white/10 p-6">
      <Link
        href={`/solutions/${solutionSlug}/${product.slug}`}
        onClick={onClose}
      >
        <div className="group">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              fill
              src={product.thumbnail}
              alt={product.title}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div
              className="
                absolute
                right-5
                top-5
                rounded-xl
                bg-white/10
                p-3
                backdrop-blur-xl
              "
            >
              <ArrowUpRight className="size-5 text-white" />
            </div>
          </div>

          <h3 className="display-sm mt-5 text-white">{product.title}</h3>

          <p className="body-md mt-3 text-muted-foreground">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

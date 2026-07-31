"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/solution/solutionData";

type Props = {
  products: readonly Product[];
  solutionSlug: string;
  activeProduct: Product;
  onHover: (product: Product) => void;
  onClose: () => void;
};

export default function MegaMenuProducts({
  products,
  solutionSlug,
  activeProduct,
  onHover,
  onClose,
}: Props) {
  return (
    <div className="p-6">
      <div
        className="
          max-h-82.5
          space-y-6
          overflow-y-auto
          pr-2
          scrollbar-thin
          scrollbar-thumb-white/20
          scrollbar-track-transparent
        "
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/solutions/${solutionSlug}/${product.slug}`}
            onMouseEnter={() => onHover(product)}
            onClick={onClose}
            className={`
              group
              flex
              gap-4
              rounded-xl
              p-2
              transition

              ${
                activeProduct.slug === product.slug
                  ? "bg-white/5"
                  : "hover:bg-white/5"
              }
            `}
          >
            <div
              className="
                relative
                h-20
                w-28
                shrink-0
                overflow-hidden
                rounded-xl
              "
            >
              <Image
                fill
                src={product.thumbnail}
                alt={product.title}
                className="object-cover transition duration-300 group-hover:scale-105"
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
  );
}

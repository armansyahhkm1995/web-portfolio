import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/solution/solutionData";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  solutionSlug: string;
  featured?: boolean;
};

export default function ProductCard({
  product,
  solutionSlug,
  featured = false,
}: ProductCardProps) {
  return (
    <Link
      href={`/solutions/${solutionSlug}/${product.slug}`}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        ${featured ? "lg:col-span-2" : ""}
      `}
    >
      {/* Thumbnail */}
      {/* <video
        src={product.preview}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          aspect-video
          w-full
          object-cover
        "
      /> */}
      <Image src={product.thumbnail} alt={product.title} fill />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
      {/* Arrow */}
      <div
        className="
        absolute
        right-5
        top-5
        rounded-xl
        border
        border-white/20
        bg-white/10
        p-2
        backdrop-blur-xl
      "
      >
        <ArrowUpRight className="size-5 text-white" />
      </div>
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="display-xs text-white">{product.title}</h3>

        <p
          className="
            body-md
            mt-3
            lg:max-h-0
            lg:overflow-hidden
            text-white/80
            lg:opacity-0
            lg:transition-all
            lg:duration-500
            lg:group-hover:max-h-40
            lg:group-hover:opacity-100
          "
        >
          {product.description}
        </p>
      </div>
    </Link>
  );
}

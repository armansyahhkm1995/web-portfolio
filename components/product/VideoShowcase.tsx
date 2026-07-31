import ProductDetailShowcase from "./ProductDetailShowcase";
import type { ProductPageData } from "@/lib/product";
import Image from "next/image";

type Props = {
  product: ProductPageData;
};

export default function VideoShowcase({ product }: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
      "
    >
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        src={product.showcase.media.src}
        className="
          aspect-video
          w-full
          object-cover
        "
      /> */}
      <div className="aspect-video">
        <Image
          src={product.showcase.media.thumbnail}
          alt={product.showcase.title}
          fill
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <ProductDetailShowcase product={product} />
    </div>
  );
}

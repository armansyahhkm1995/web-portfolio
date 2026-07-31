import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProductPageData } from "@/lib/product";

type Props = {
  product: ProductPageData;
};

export default function ProductDetailShowcase({ product }: Props) {
  return (
    <div
      className="
        absolute
        bottom-10
        left-10
        z-20
        max-w-lg
      "
    >
      <span
        className="
          inline-flex
          rounded-full
          border
          border-white/20
          px-4
          py-2
          body-xs
          text-white
          backdrop-blur-xl
        "
      >
        {product.category.title}
      </span>

      <h2 className="display-md mt-6 text-secondary">
        {product.product.title}
      </h2>

      <p className="body-lg mt-5 text-white/80">
        {product.product.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {product.showcase.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-white/20
              px-3
              py-1
              body-xs
              text-white
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <Button
        className="mt-8"
        onClick={() => window.open(product.showcase.action.href)}
      >
        <Download className="mr-2 size-4" />

        {product.showcase.action.label}
      </Button>
    </div>
  );
}

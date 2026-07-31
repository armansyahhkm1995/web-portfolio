"use client";

import { useRouter } from "next/navigation";
import Container from "@/components/common/Container";
import TabShowcase from "@/components/product/TabShowcase";
import VideoShowcase from "@/components/product/VideoShowcase";
import { getCategory, type ProductPageData } from "@/lib/product";

type Props = {
  product: ProductPageData;
};

export default function ShowcaseSection({ product }: Props) {
  const router = useRouter();

  const products = getCategory(product.categorySlug)?.products ?? [];

  const handleChange = (slug: string) => {
    router.push(`/solutions/${product.categorySlug}/${slug}`, {
      scroll: false,
    });
  };

  return (
    <section className="py-28">
      <Container>
        <TabShowcase
          products={products}
          activeSlug={product.slug}
          onChange={handleChange}
        />

        <VideoShowcase product={product} />
      </Container>
    </section>
  );
}

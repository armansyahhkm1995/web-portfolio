"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import TabShowcase from "@/components/product/TabShowcase";
import VideoShowcase from "@/components/product/VideoShowcase";
import {
  getCategory,
  getProductPageData,
  type ProductPageData,
} from "@/lib/product";

type Props = {
  product: ProductPageData;
};

export default function ShowcaseSection({ product }: Props) {
  const products = getCategory(product.categorySlug)?.products ?? [];

  const [activeSlug, setActiveSlug] = useState(product.slug);

  const activeProduct =
    getProductPageData(product.categorySlug, activeSlug) ?? product;

  return (
    <section className="py-28">
      <Container>
        <TabShowcase
          products={products}
          activeSlug={activeSlug}
          onChange={setActiveSlug}
        />

        <VideoShowcase product={activeProduct} />
      </Container>
    </section>
  );
}

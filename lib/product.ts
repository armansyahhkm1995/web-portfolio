import {
  solutionData,
  type Product,
  type SolutionCategory,
} from "@/data/solution/solutionData";

import {
  productDetailData,
  type ProductDetail,
} from "@/data/product/productDetailData";

/**
 * Find category by slug
 */
export function getCategory(slug: string): SolutionCategory | undefined {
  return solutionData.find((category) => category.slug === slug);
}

/**
 * Find product inside category
 */
export function getProduct(
  categorySlug: string,
  productSlug: string,
): Product | undefined {
  const category = getCategory(categorySlug);

  return category?.products.find((product) => product.slug === productSlug);
}

/**
 * Find product detail
 */
export function getProductDetail(
  productSlug: string,
): ProductDetail | undefined {
  return productDetailData.find((product) => product.slug === productSlug);
}

/**
 * Merge product summary + product detail.
 *
 * This helper should be used by
 * the product detail page.
 */
export function getProductPageData(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);

  if (!category) {
    return undefined;
  }

  const product = getProduct(categorySlug, productSlug);

  if (!product) {
    return undefined;
  }

  const detail = getProductDetail(productSlug);

  if (!detail) {
    return undefined;
  }

  // Prevent mismatched URL
  if (detail.categorySlug !== categorySlug) {
    return undefined;
  }

  return {
    category,

    product,

    ...detail,
  };
}

/**
 * Get all products
 */
export function getAllProducts(): readonly Product[] {
  return solutionData.flatMap((category) => category.products);
}

export type ProductPageData = ProductDetail & {
  readonly category: SolutionCategory;
  readonly product: Product;
};

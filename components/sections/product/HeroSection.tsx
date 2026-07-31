import { contactData } from "@/data/navigation/navigationData";
import Container from "@/components/common/Container";
import HeroTags from "@/components/product/HeroTags";
import type { ProductPageData } from "@/lib/product";
import PrimaryLinkButton from "@/components/common/PrimaryLinkButton";
import Image from "next/image";
import { formatCategoryTitle } from "@/lib/utils";

type Props = {
  product: ProductPageData;
};

export default function HeroSection({ product }: Props) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero_detail.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      <Container className="relative pt-32 pb-24">
        <div className="max-w-xl">
          {/* Category */}

          <span
            className="
              mb-6
              inline-flex
              rounded-full
              border
              border-white/15
              px-4
              py-2
              body-xs
              text-white
              backdrop-blur-xl
            "
          >
            {formatCategoryTitle(product.slug)}
          </span>

          {/* Title */}

          <h1 className="display-xl text-white">{product.hero.title}</h1>

          {/* Description */}

          <p className="body-lg mt-6 text-white/80">
            {product.hero.description}
          </p>

          {/* Recommended Tags */}

          <div className="relative my-8">
            <HeroTags tags={product.hero.recommendedFor} />
          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryLinkButton href={contactData.href}>
              Request Consultation
            </PrimaryLinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

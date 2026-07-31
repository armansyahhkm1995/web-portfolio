import Container from "@/components/common/Container";
import ChallengeCard from "@/components/product/ChallengeCard";
import type { ProductDetail } from "@/data/product/productDetailData";

type Props = {
  product: ProductDetail;
};

export default function ChallengeSection({ product }: Props) {
  return (
    <section className="py-28">
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/15
              px-4
              py-2
              body-xs
              text-white
            "
          >
            The Challenges
          </span>

          <h2 className="display-md mt-6 text-secondary">
            Common challenges that impact readiness
            <br />& mission effectiveness
          </h2>

          <p className="body-lg mt-6 text-muted-foreground">
            Modern operational environments demand more than traditional
            training methods. These challenges can limit performance, increase
            cost, and introduce unnecessary risk.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {product.challenges.map((challenge) => (
            <ChallengeCard key={challenge.title} challenge={challenge} />
          ))}
        </div>
      </Container>
    </section>
  );
}

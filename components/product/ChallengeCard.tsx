import Image from "next/image";
import GlassCard from "@/components/common/GlassCard";
import type { ProductChallenge } from "@/data/product/productDetailData";

type Props = {
  challenge: ProductChallenge;
};

export default function ChallengeCard({ challenge }: Props) {
  return (
    <GlassCard
      className="
        px-8
        py-10
        text-center
      "
    >
      {/* Icon */}
      <div className="flex justify-center">
        <Image
          src={challenge.icon}
          alt={challenge.title}
          width={64}
          height={64}
        />
      </div>

      {/* Title */}
      <h3 className="display-xs mt-8 text-white">{challenge.title}</h3>

      {/* Description */}
      <p className="body-md mt-6 text-muted-foreground">
        {challenge.description}
      </p>
    </GlassCard>
  );
}

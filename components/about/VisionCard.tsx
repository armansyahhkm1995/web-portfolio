import GlassCard from "@/components/common/GlassCard";
import type { Vision } from "@/data/about/visionData";
import Image from "next/image";

type VisionCardProps = {
  vision: Vision;
};

export default function VisionCard({ vision }: VisionCardProps) {
  return (
    <GlassCard className="flex h-full flex-col p-8">
      <Image
        src={vision.icon}
        alt={vision.title}
        aria-hidden="true"
        width={56}
        height={56}
        className="mb-8 h-14 w-14"
      />

      <h3 className="body-xl font-semibold">{vision.title}</h3>

      <p className="body-md mt-4 text-muted-foreground">{vision.description}</p>
    </GlassCard>
  );
}

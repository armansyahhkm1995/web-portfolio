import GlassCard from "@/components/common/GlassCard";
import type { Falah } from "@/data/about/falahData";
import Image from "next/image";

type FalahCardProps = {
  falahData: Falah;
};

export default function FalahCard({ falahData }: FalahCardProps) {
  return (
    <GlassCard className="flex h-full flex-col p-8">
      <Image
        src={falahData.icon}
        alt={falahData.title}
        width={56}
        height={56}
        aria-hidden="true"
        className="mb-8 h-14 w-14"
      />

      <h3 className="display-xs mb-4">{falahData.title}</h3>

      <p className="body-md text-muted-foreground">{falahData.description}</p>
    </GlassCard>
  );
}

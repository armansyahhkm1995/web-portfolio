import GlassCard from "@/components/common/GlassCard";
import type { ExpertTeam } from "@/data/about/expertData";
import Image from "next/image";

type ExpertCardProps = {
  expert: ExpertTeam;
};

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <GlassCard className="flex h-full flex-col p-8">
      {/* Total */}

      <div className="mb-8">
        <h3 className="display-lg text-primary">{expert.members}</h3>

        <p className="body-lg mt-2 font-semibold">{expert.name}</p>
      </div>

      {/* Label */}

      <p className="uppercase body-sm mb-5 text-muted-foreground">
        Capabilities
      </p>

      {/* Capability */}

      <ul className="space-y-4">
        {expert.capabilities.map((capability) => (
          <li key={capability} className="flex items-center gap-3">
            <Image
              src={expert.icon}
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
              className="h-5 w-5"
            />

            <span className="body-sm">{capability}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

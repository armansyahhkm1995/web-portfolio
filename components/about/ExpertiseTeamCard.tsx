import GlassCard from "@/components/common/GlassCard";
import type { ExpertiseTeams } from "@/data/home/expertiseData";
import Image from "next/image";

type ExpertiseTeamCardProps = {
  team: ExpertiseTeams;
};

export default function ExpertiseTeamCard({ team }: ExpertiseTeamCardProps) {
  return (
    <GlassCard className="overflow-hidden p-0">
      {/* Image */}

      <div className="relative">
        <Image
          src={team.image}
          alt={team.title}
          width={416}
          height={234}
          loading="lazy"
          sizes="(min-width:1280px) 33vw,
          (min-width:768px) 50vw,
          100vw"
          className="aspect-video w-full object-cover"
        />

        {/* Logo */}

        <div className="absolute left-6 bottom-0 translate-y-1/2">
          <Image
            src={team.logo}
            alt=""
            width={60}
            height={60}
            aria-hidden="true"
            className="h-14 w-14 object-contain"
          />
        </div>
      </div>

      {/* Content */}

      <div className="px-6 pt-10 pb-6">
        <h3 className="display-xs">{team.title}</h3>

        <p className="body-md mt-3 text-muted-foreground">{team.description}</p>
      </div>
    </GlassCard>
  );
}

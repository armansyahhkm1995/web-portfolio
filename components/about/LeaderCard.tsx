import GlassCard from "@/components/common/GlassCard";
import type { Leader } from "@/data/about/leaderData";
import Image from "next/image";

type LeaderCardProps = {
  leader: Leader;
};

export default function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <GlassCard className="group overflow-hidden p-0">
      {/* Photo */}
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={leader.photo}
          alt={leader.name}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

        {/* Content */}

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div
            className="
            overflow-hidden
            lg:max-h-0
            lg:opacity-0
            lg:transition-all
            lg:duration-1000
            lg:group-hover:max-h-96
            lg:group-hover:opacity-100
          "
          >
            {/* Badge */}

            <div className="mb-4 flex flex-wrap gap-2">
              {leader.positions.map((position) => (
                <span
                  key={position}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 body-xs backdrop-blur-md"
                >
                  {position}
                </span>
              ))}
            </div>

            <h3 className="body-xl font-semibold">{leader.name}</h3>

            <p className="body-sm mt-3 text-muted-foreground">
              {leader.description}
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

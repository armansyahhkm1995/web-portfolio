import GlassCard from "@/components/common/GlassCard";
import type { Problem } from "@/data/home/problemData";
import Image from "next/image";

type ProblemCardProps = {
  problem: Problem;
  active: boolean;
  onClick: () => void;
};

export default function ProblemCard({
  problem,
  active,
  onClick,
}: ProblemCardProps) {
  return (
    <>
      <GlassCard
        as="div"
        // type="button"
        active={active}
        onClick={onClick}
        className="w-full cursor-pointer p-8 text-left "
      >
        <Image
          src={problem.icon}
          alt=""
          width={56}
          height={56}
          aria-hidden="true"
          className="mx-auto mb-6 h-14 w-14"
        />

        <h3 className="display-xs text-center">{problem.title}</h3>
        <p className="body-md mt-4 text-center text-muted-foreground">
          {problem.description}
        </p>
      </GlassCard>

      {/* Mobile */}
      {active && (
        <div className="relative block">
          <Image
            src={problem.image}
            alt={problem.imageAlt}
            width={1200}
            height={800}
            className="
            w-full
            h-auto
            rounded-2xl
            border
            border-primary/80
            md:hidden
          "
          />
        </div>
      )}
    </>
  );
}

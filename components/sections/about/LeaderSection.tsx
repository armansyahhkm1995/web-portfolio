import { leaderData } from "@/data/about/leaderData";
import LeaderCard from "@/components/about/LeaderCard";

export default function LeaderSection() {
  return (
    <section aria-labelledby="leader-heading" className="site-container py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
          Leadership
        </span>

        <h2 className="display-md text-secondary">
          The Minds Behind Falah Innovation
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Led by experienced professionals, Falah builds future-ready
          operational solutions through innovation and collaboration.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {leaderData.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
      </div>
    </section>
  );
}

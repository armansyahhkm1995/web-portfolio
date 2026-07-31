import { expertData } from "@/data/about/expertData";
import ExpertCard from "@/components/about/ExpertCard";

export default function ExpertSection() {
  return (
    <section aria-labelledby="expert-heading" className="site-container py-24">
      {/* Header */}

      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="body-xs mb-5 inline-flex rounded-full border border-white/15 px-4 py-2">
          Our Experts
        </span>

        <h2 className="display-md text-secondary">
          A Multidisciplinary Team Behind Every Operational Solution
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Falah combines immersive technologies and integrated systems to
          deliver scalable solutions for modern operations.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertData.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
}

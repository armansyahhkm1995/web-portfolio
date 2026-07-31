import { solutionData } from "@/data/solution/solutionData";
import SolutionCard from "@/components/sections/SolutionCard";

export default function SolutionSection() {
  return (
    <section className="site-container section">
      {/* nanti diganti SectionHeader */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
          Integrated Technologies for Modern Operations
        </span>

        <h2 className="display-md text-secondary">
          Integrated Solutions for Modern Training & Operations
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          From immersive simulation to command center, Falah delivers integrated
          technologies that improve operational performance.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 auto-rows-105">
        {solutionData.map((solution) => (
          <SolutionCard key={solution.slug} solution={solution} />
        ))}
      </div>
    </section>
  );
}

import ExpertiseMetricCard from "@/components/about/ExpertiseMetricCard";
import ExpertiseTeamCard from "@/components/about/ExpertiseTeamCard";

import {
  expertiseData,
  expertiseTeams,
  marqueeExpertiseData,
} from "@/data/home/expertiseData";

export default function ExpertiseSection() {
  return (
    <section className="py-24">
      <div className="site-container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
            Built on Experience & Operational Trust
          </span>

          <h2 className="display-md text-secondary">
            Trusted Expertise for Critical Training & Operations
          </h2>

          <p className="body-lg mt-5 text-muted-foreground">
            Falah combines certified standards, industry expertise, and
            strategic experience to deliver reliable solutions for complex
            operational environments.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-16 overflow-hidden">
          {/* Mobile */}
          <div className="flex w-max animate-marquee-left gap-5 md:hidden">
            {marqueeExpertiseData.map((metric, index) => (
              <ExpertiseMetricCard
                key={`${metric.title}-${index}`}
                metric={metric}
              />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden gap-5 md:flex">
            {expertiseData.map((metric) => (
              <ExpertiseMetricCard key={metric.title} metric={metric} />
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseTeams.map((team) => (
            <ExpertiseTeamCard key={team.title} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}

import GlassCard from "@/components/common/GlassCard";
import type { ExpertiseData } from "@/data/home/expertiseData";

type ExpertiseMetricCardProps = {
  metric: ExpertiseData;
};

export default function ExpertiseMetricCard({
  metric,
}: ExpertiseMetricCardProps) {
  return (
    <GlassCard
      className="
        min-w-55
        px-8
        shrink-0
        py-6
        text-center
        md:flex-1
      "
    >
      <h3 className="display-xs text-primary">{metric.value}</h3>

      <p className="body-sm mt-2 text-muted-foreground">{metric.title}</p>
    </GlassCard>
  );
}

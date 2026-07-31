import type { WorkflowStep as WorkflowStepType } from "@/data/contact/workflowData";

type WorkflowStepProps = {
  step: WorkflowStepType;
  vertical?: boolean;
  isLast?: boolean;
};

export default function WorkflowStep({
  step,
  vertical,
  isLast,
}: WorkflowStepProps) {
  return vertical ? (
    <div className="relative flex gap-5">
      {/* Timeline */}

      <div className="flex flex-col items-center">
        <span className="display-md text-secondary">{step.step}</span>
        <div className="my-3 size-4 rounded-full bg-primary" />
        {!isLast && <div className="w-px flex-1 bg-primary/40" />}
      </div>

      {/* Content */}

      <div className="pb-10">
        <h3 className="display-xs text-secondary">{step.title}</h3>
        <p className="body-md mt-3 text-muted-foreground">{step.description}</p>
      </div>
    </div>
  ) : (
    <div className="relative pt-16">
      {/* Number */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <span className="display-md text-secondary">{step.step}</span>
      </div>

      {/* Dot */}

      <div className="absolute left-1/2 top-12 -translate-x-1/2">
        <div className="size-4 rounded-full bg-primary ring-6 ring-background" />
      </div>

      {/* Content */}

      <div className="pt-10 text-center">
        <h3 className="display-xs">{step.title}</h3>
        <p className="body-md mt-4 text-muted-foreground">{step.description}</p>
      </div>
    </div>
  );
}

import type { WorkflowStep as WorkflowStepType } from "@/data/contact/workflowData";
import WorkflowStep from "./WorkflowStep";

type WorkflowTimelineProps = {
  steps: ReadonlyArray<WorkflowStepType>;
};

export default function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div>
      {/* Mobile */}
      <div className="space-y-8 lg:hidden">
        {steps.map((step, index) => (
          <WorkflowStep
            key={step.id}
            step={step}
            vertical
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Desktop */}
      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-13.5 h-px bg-primary/60" />

        <div className="grid grid-cols-6 gap-12">
          {steps.map((step) => (
            <WorkflowStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}

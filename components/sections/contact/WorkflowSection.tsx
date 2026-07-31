import { workflowData } from "@/data/contact/workflowData";
import WorkflowTimeline from "@/components/contact/WorkflowTimeline";

export default function WorkflowSection() {
  return (
    <section className="site-container py-24">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <span className="body-xs mb-5 inline-flex rounded-full border border-white/15 px-4 py-2">
          Our Workflow
        </span>

        <h2 className="display-md text-secondary">How it works?</h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Falah combines immersive technologies and integrated systems to
          deliver scalable solutions for modern operations.
        </p>
      </div>

      <WorkflowTimeline steps={workflowData} />
    </section>
  );
}

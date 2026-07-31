export interface WorkflowStep {
  readonly id: number;
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export const workflowData: ReadonlyArray<WorkflowStep> = [
  {
    id: 1,
    step: "01",
    title: "Initial Consultation",
    description:
      "Discuss your operational challenges, objectives, and project requirements with our team.",
  },
  {
    id: 2,
    step: "02",
    title: "Requirement Analysis",
    description:
      "We evaluate your operational environment and define the most suitable technology approach.",
  },
  {
    id: 3,
    step: "03",
    title: "Solution Proposal",
    description:
      "Receive a tailored proposal including solution scope, timeline, and implementation plan.",
  },
  {
    id: 4,
    step: "04",
    title: "Development",
    description:
      "Our multidisciplinary team develops the simulation system based on agreed specifications.",
  },
  {
    id: 5,
    step: "05",
    title: "Deployment",
    description:
      "The solution is implemented, tested, and integrated into your operational environment.",
  },
  {
    id: 6,
    step: "06",
    title: "Training & Support",
    description:
      "We provide user training, technical assistance, and long-term operational support.",
  },
];

export interface Problem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly image: string;
  readonly imageAlt: string;
}

export const problemData: ReadonlyArray<Problem> = [
  {
    id: "real-world-training-risk",
    title: "Real-World Training Comes with Real Risks",
    description:
      "Operational training can be expensive, risky, and difficult to scale in real-world environments.",
    icon: "/icons/problem_1.svg",
    image: "/images/problem_1_image.png",
    imageAlt:
      "Military personnel performing field training in hazardous environments",
  },
  {
    id: "theory-alone-is-not-enough",
    title: "Theory Alone Is Not Enough",
    description:
      "Classroom instruction without hands-on experience leaves personnel underprepared for real operational conditions.",
    icon: "/icons/problem_2.svg",
    image: "/images/problem_2_image.png",
    imageAlt: "Military trainees studying manuals without practical simulation",
  },
  {
    id: "conventional-training-limits-readiness",
    title: "Conventional Training Limits Readiness",
    description:
      "Traditional methods reduce repetition, flexibility, and measurable training outcomes.",
    icon: "/icons/problem_3.svg",
    image: "/images/problem_3_image.png",
    imageAlt:
      "Traditional military training with limited equipment and scalability",
  },
];

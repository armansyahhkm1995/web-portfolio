export interface ExpertiseData {
  readonly title: string;
  readonly value: string;
}

export interface ExpertiseTeams {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly logo: string;
  readonly image: string;
}

export const expertiseData: ReadonlyArray<ExpertiseData> = [
  {
    title: "Strategic Projects",
    value: "50+",
  },
  {
    title: "Hours of Immersive Training",
    value: "10K+",
  },
  {
    title: "Simulation Accuracy",
    value: "99.4%",
  },
  {
    title: "Operational Accidents",
    value: "0",
  },
];

export const expertiseTeams: ReadonlyArray<ExpertiseTeams> = [
  {
    slug: "content-development",
    title: "Content Development",
    description:
      "Designing immersive training content, operational scenarios, and instructional materials that improve competency and mission readiness.",
    logo: "/icons/team_content.png",
    image: "/images/team_content_image.png",
  },
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Building reliable simulation platforms, enterprise applications, and interactive systems with modern software engineering practices.",
    logo: "/icons/team_software.png",
    image: "/images/team_software_image.png",
  },
  {
    slug: "it-infrastructure-development",
    title: "IT Infrastructure Development",
    description:
      "Developing secure, scalable, and high-availability infrastructure to support mission-critical training and simulation environments.",
    logo: "/icons/team_infrastructure.png",
    image: "/images/team_infrastructure_image.png",
  },
];

export const marqueeExpertiseData = [
  ...expertiseData,
  ...expertiseData,
] as const;

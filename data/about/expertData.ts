export interface ExpertTeam {
  readonly id: number;
  readonly name: string;
  readonly members: string;
  readonly capabilities: readonly string[];
  readonly icon: string;
}

export const expertData: ReadonlyArray<ExpertTeam> = [
  {
    id: 1,
    name: "Management Team",
    members: "25+",
    capabilities: [
      "Strategic business planning",
      "Operational leadership",
      "Project governance",
    ],
    icon: "/icons/checklist.png",
  },
  {
    id: 2,
    name: "Software Development Team",
    members: "35+",
    capabilities: [
      "Web & desktop application development",
      "Simulation software engineering",
      "System integration",
    ],
    icon: "/icons/checklist.png",
  },
  {
    id: 3,
    name: "Content Development Team",
    members: "60+",
    capabilities: [
      "3D asset production",
      "Instructional content development",
      "Scenario & mission design",
    ],
    icon: "/icons/checklist.png",
  },
  {
    id: 4,
    name: "IT Infrastructure Team",
    members: "20+",
    capabilities: [
      "Network infrastructure",
      "Server deployment",
      "Cloud & cybersecurity",
    ],
    icon: "/icons/checklist.png",
  },
];

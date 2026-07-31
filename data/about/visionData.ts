export interface Vision {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const visionData: ReadonlyArray<Vision> = [
  {
    id: 1,
    title: "Trusted Partnership",
    description:
      "Building long-term relationships through trust, accountability, and mutual respect.",
    icon: "/icons/trusted_partnership.png",
  },
  {
    id: 2,
    title: "Professional Excellence",
    description:
      "Developing highly skilled professionals with strong expertise and continuous improvement.",
    icon: "/icons/professional_excellence.png",
  },
  {
    id: 3,
    title: "Advanced Technology",
    description:
      "Delivering innovative technologies, reliable infrastructure, and future-ready digital solutions.",
    icon: "/icons/advanced_technology.png",
  },
  {
    id: 4,
    title: "Strategic Company Growth",
    description:
      "Creating sustainable growth through innovation, collaboration, and strategic partnerships.",
    icon: "/icons/strategic_company_growth.png",
  },
];

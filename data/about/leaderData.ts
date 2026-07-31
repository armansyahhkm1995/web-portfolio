export interface Leader {
  readonly id: number;
  readonly name: string;
  readonly positions: readonly string[];
  readonly description: string;
  readonly photo: string;
}

export const leaderData: ReadonlyArray<Leader> = [
  {
    id: 1,
    name: "Deny Darodjat Muslim",
    positions: ["Founder", "CEO", "CTO"],
    description:
      "With over 20 years of experience in telecommunications, software development, and simulation technology, Deny leads Falah's innovation and long-term technology vision.",
    photo: "/images/deny_darodjat_muslim.png",
  },
  {
    id: 2,
    name: "Noviayana",
    positions: ["CFO"],
    description:
      "Noviayana oversees financial strategy, organizational transformation, and sustainable business growth through agile leadership.",
    photo: "/images/noviayana.png",
  },
  {
    id: 3,
    name: "Canggih Sakina Hans",
    positions: ["COO"],
    description:
      "Canggih drives operational excellence by managing strategic planning, execution, and continuous organizational improvement.",
    photo: "/images/canggih.png",
  },
  {
    id: 4,
    name: "Auriga Sain",
    positions: ["CBDO"],
    description:
      "Auriga leads strategic partnerships, business development, and market expansion to strengthen Falah's long-term growth.",
    photo: "/images/auriga.png",
  },
];

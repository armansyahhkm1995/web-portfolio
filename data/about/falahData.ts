export interface Falah {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const falahData: ReadonlyArray<Falah> = [
  {
    id: 1,
    title: "Our Business",
    description:
      "We deliver immersive simulation systems and operational technology solutions that improve training effectiveness, readiness, and decision-making.",
    icon: "/icons/our_business.png",
  },
  {
    id: 2,
    title: "Our Methods",
    description:
      "Our multidisciplinary team combines software engineering, simulation development, content creation, and infrastructure expertise to build reliable solutions.",
    icon: "/icons/our_methods.png",
  },
  {
    id: 3,
    title: "Our Commitment",
    description:
      "We are committed to delivering high-quality technology, long-term partnerships, and continuous innovation that creates measurable operational value.",
    icon: "/icons/our_commitment.png",
  },
];

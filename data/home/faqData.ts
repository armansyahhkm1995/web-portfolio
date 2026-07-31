export interface Faq {
  readonly id: number;
  readonly question: string;
  readonly answer: string;
}

export const faqData: ReadonlyArray<Faq> = [
  {
    id: 1,
    question: "What industries does Falah support?",
    answer:
      "Falah develops simulation, immersive learning, IT infrastructure, and operational technology solutions for defense, government, education, healthcare, transportation, and enterprise sectors.",
  },
  {
    id: 2,
    question: "Can Falah develop customized simulation systems?",
    answer:
      "Yes. Every solution can be customized based on operational objectives, training scenarios, infrastructure, and organizational requirements.",
  },
  {
    id: 3,
    question:
      "Are Falah's solutions suitable for government and defense environments?",
    answer:
      "Yes. Our solutions are designed for mission-critical environments including defense, public sector, emergency response, and other government organizations requiring secure and reliable systems.",
  },
  {
    id: 4,
    question: "Does Falah provide implementation and operational support?",
    answer:
      "Absolutely. We provide consultation, implementation, deployment, user training, maintenance, and long-term technical support to ensure successful adoption.",
  },
  {
    id: 5,
    question: "What types of simulation solutions does Falah provide?",
    answer:
      "Our portfolio includes Virtual Training Suite, Training Simulator, Command Center, Advanced Education Systems, and Virtual Connect Suite for various operational and learning scenarios.",
  },
  {
    id: 6,
    question: "Can Falah integrate solutions with existing infrastructure?",
    answer:
      "Yes. Our systems are designed to integrate with existing hardware, software, learning management systems, communication platforms, and enterprise infrastructure whenever required.",
  },
];

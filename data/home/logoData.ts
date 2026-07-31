export interface Logo {
  readonly id: number;
  readonly name: string;
  readonly logo: string;
  readonly alt: string;
  readonly category: "Government" | "Defense" | "Technology" | "Partner";
}

export const logoData: ReadonlyArray<Logo> = [
  {
    id: 1,
    name: "Bohemia",
    logo: "/images/bohemia.png",
    alt: "Bohemia Interactive Simulations official logo",
    category: "Technology",
  },
  {
    id: 2,
    name: "Everbridge",
    logo: "/images/everbridge.png",
    alt: "Everbridge official logo",
    category: "Technology",
  },
  {
    id: 3,
    name: "HAVELSAN",
    logo: "/images/havelsan.png",
    alt: "HAVELSAN defense technology logo",
    category: "Defense",
  },
  {
    id: 4,
    name: "ILIAS",
    logo: "/images/ilias.png",
    alt: "ILIAS learning management system logo",
    category: "Technology",
  },
  {
    id: 5,
    name: "Kemhan RI",
    logo: "/images/kemhan.png",
    alt: "Ministry of Defense Republic of Indonesia logo",
    category: "Government",
  },
  {
    id: 6,
    name: "PLATH",
    logo: "/images/plath.png",
    alt: "PLATH electronic defense systems logo",
    category: "Defense",
  },
  {
    id: 7,
    name: "Strojirna",
    logo: "/images/strojirna.png",
    alt: "Strojirna defense manufacturing logo",
    category: "Defense",
  },
  {
    id: 8,
    name: "TNI AD",
    logo: "/images/tni-ad.png",
    alt: "Indonesian Army logo",
    category: "Defense",
  },
  {
    id: 9,
    name: "TNI AL",
    logo: "/images/tni-al.png",
    alt: "Indonesian Navy logo",
    category: "Defense",
  },
  {
    id: 10,
    name: "TNI AU",
    logo: "/images/tni-au.png",
    alt: "Indonesian Air Force logo",
    category: "Defense",
  },
  {
    id: 11,
    name: "Trellix",
    logo: "/images/trellix.png",
    alt: "Trellix cybersecurity logo",
    category: "Technology",
  },
  {
    id: 12,
    name: "Unity",
    logo: "/images/unity.png",
    alt: "Unity game engine logo",
    category: "Technology",
  },
];

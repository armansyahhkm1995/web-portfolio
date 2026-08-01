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
    name: "bohemia",
    logo: "/images/bohemia.png",
    alt: "Bohemia Interactive Simulations official logo",
    category: "Technology",
  },
  {
    id: 2,
    name: "everbridge",
    logo: "/images/everbridge.png",
    alt: "Everbridge official logo",
    category: "Technology",
  },
  {
    id: 3,
    name: "havelsan",
    logo: "/images/havelsan.png",
    alt: "HAVELSAN defense technology logo",
    category: "Defense",
  },
  {
    id: 4,
    name: "ilias",
    logo: "/images/ilias.png",
    alt: "ILIAS learning management system logo",
    category: "Technology",
  },
  {
    id: 5,
    name: "kemhan",
    logo: "/images/kemhan.png",
    alt: "Ministry of Defense Republic of Indonesia logo",
    category: "Government",
  },
  {
    id: 6,
    name: "plath",
    logo: "/images/plath.png",
    alt: "PLATH electronic defense systems logo",
    category: "Defense",
  },
  {
    id: 7,
    name: "strojirna",
    logo: "/images/strojirna.png",
    alt: "Strojirna defense manufacturing logo",
    category: "Defense",
  },
  {
    id: 8,
    name: "tni-ad",
    logo: "/images/tni-ad.png",
    alt: "Indonesian Army logo",
    category: "Defense",
  },
  {
    id: 9,
    name: "tni-al",
    logo: "/images/tni-al.png",
    alt: "Indonesian Navy logo",
    category: "Defense",
  },
  {
    id: 10,
    name: "tni-au",
    logo: "/images/tni-au.png",
    alt: "Indonesian Air Force logo",
    category: "Defense",
  },
  {
    id: 11,
    name: "trellix",
    logo: "/images/trellix.png",
    alt: "Trellix cybersecurity logo",
    category: "Technology",
  },
  {
    id: 12,
    name: "unity",
    logo: "/images/unity.png",
    alt: "Unity game engine logo",
    category: "Technology",
  },
];

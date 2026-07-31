export interface Certificate {
  readonly id: number;
  readonly title: string;
  readonly type: string;
  readonly description: string;
  readonly logo: string;
  readonly logoWidth: number;
  readonly logoHeight: number;
  readonly image: string;
}

export const certificateData: ReadonlyArray<Certificate> = [
  {
    id: 1,
    title: "ISO 9001:2015",
    type: "Quality Management System",
    description:
      "Ensuring structured quality management and reliable implementation across operational technology projects.",
    logo: "/images/iso_9001_logo.png",
    logoWidth: 60,
    logoHeight: 60,
    image: "/images/iso_9001.png",
  },
  {
    id: 2,
    title: "TKDN Certification",
    type: "Domestic Component Compliance",
    description:
      "Supporting national industry growth through locally compliant technology and operational solutions.",
    logo: "/images/tkdn_logo.png",
    logoWidth: 200,
    logoHeight: 60,
    image: "/images/tkdn.png",
  },
  {
    id: 3,
    title: "National Defense Industry",
    type: "Strategic Defense Technology Sector",
    description:
      "Contributing to mission-critical training and operational technology initiatives within Indonesia's national defense ecosystem.",
    logo: "/images/kemhan_logo.png",
    logoWidth: 60,
    logoHeight: 60,
    image: "/images/kementrian_pertahanan.png",
  },
];

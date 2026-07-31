export interface ProductMedia {
  readonly type: "image" | "video";
  readonly src: string;
  readonly thumbnail: string;
}

export interface ProductAction {
  readonly label: string;
  readonly href: string;
}

export interface ProductChallenge {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export type ProductTag =
  | "VR Training"
  | "Mission Readiness"
  | "Operational Simulation"
  | "Pilot Training"
  | "Emergency Response"
  | "Operational Exercise"
  | "Performance Analytics"
  | "Instructor Dashboard"
  | "Scenario-Based Learning"
  | "Immersive Learning";

export interface ProductHero {
  readonly title: string;
  readonly description: string;
  readonly media: ProductMedia;
  readonly recommendedFor: readonly ProductTag[];
}

export interface ProductShowcase {
  readonly title: string;
  readonly description: string;
  readonly media: ProductMedia;
  readonly tags: readonly ProductTag[];
  readonly action: ProductAction;
}

export interface ProductDetail {
  readonly slug: string;
  readonly categorySlug: string;
  readonly hero: ProductHero;
  readonly challenges: readonly ProductChallenge[];
  readonly showcase: ProductShowcase;
  readonly cta: ProductAction;
}

export const productDetailData: ReadonlyArray<ProductDetail> = [
  // ==========================
  // Virtual Training Suite
  // ==========================
  {
    slug: "maintenance-training",
    categorySlug: "virtual-training-suite",
    hero: {
      title: "Maintenance Training",
      description:
        "Interactive maintenance training with immersive 3D simulations and guided procedures.",
      media: {
        type: "video",
        src: "/videos/maintenance_training_product.mp4",
        thumbnail: "/images/maintenance_training_product.png",
      },
      recommendedFor: [
        "VR Training",
        "Immersive Learning",
        "Scenario-Based Learning",
      ],
    },
    challenges: [
      {
        title: "High Maintenance Cost",
        description: "Reduce equipment usage during training.",
        icon: "/icons/high_equipment_downtime.png",
      },
      {
        title: "Limited Equipment",
        description: "Practice without depending on physical assets.",
        icon: "/icons/expensive_practical_training.png",
      },
      {
        title: "Human Error",
        description: "Reduce procedural mistakes before field operation.",
        icon: "/icons/human_error_&_incorrect_procedures.png",
      },
      {
        title: "Slow Skill Development",
        description: "Repeat procedures until mastery.",
        icon: "/icons/inconsistent_procedures.png",
      },
    ],
    showcase: {
      title: "Experience Maintenance Training",
      description:
        "Interactive maintenance simulations with guided procedures.",
      media: {
        type: "video",
        src: "/videos/maintenance_training_product.mp4",
        thumbnail: "/images/maintenance_training_product.png",
      },
      tags: ["VR Training", "Immersive Learning", "Scenario-Based Learning"],
      action: {
        label: "Download Brochure",
        href: "/brochures/maintenance-training.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  {
    slug: "language-training",
    categorySlug: "virtual-training-suite",
    hero: {
      title: "Language Training",
      description:
        "Immersive language learning through realistic conversation scenarios.",
      media: {
        type: "video",
        src: "/videos/language-training.mp4",
        thumbnail: "images/language_training_product.png",
      },
      recommendedFor: ["Immersive Learning", "Scenario-Based Learning"],
    },
    challenges: [
      {
        title: "Low Speaking Confidence",
        description: "Practice conversations in realistic situations.",
        icon: "/icons/expensive_practical_training.png",
      },
      {
        title: "Limited Practice",
        description: "Train anytime without instructors.",
        icon: "/icons/challenge/cost.svg",
      },
      {
        title: "Inconsistent Evaluation",
        description: "Measure progress consistently.",
        icon: "/icons/challenge/human-error.svg",
      },
      {
        title: "Learning Motivation",
        description: "Interactive learning increases engagement.",
        icon: "/icons/challenge/downtime.svg",
      },
    ],
    showcase: {
      title: "Experience Language Training",
      description: "Conversation-based immersive language simulations.",
      media: {
        type: "video",
        src: "/videos/language_training_product.mp4",
        thumbnail: "/images/language_training_product.png",
      },
      tags: ["Immersive Learning", "Scenario-Based Learning"],
      action: {
        label: "Download Brochure",
        href: "/brochures/language-training.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  // Operational Training
  {
    slug: "operational-training",
    categorySlug: "virtual-training-suite",
    hero: {
      title: "Operational Training",
      description:
        "Technology-enhanced learning environments that improve operational readiness through immersive scenario-based simulations.",
      media: {
        type: "video",
        src: "/videos/operational-training.mp4",
        thumbnail: "/images/operational_training_product.png",
      },
      recommendedFor: [
        "VR Training",
        "Mission Readiness",
        "Operational Simulation",
      ],
    },
    challenges: [
      {
        title: "High Equipment Downtime",
        description: "Long maintenance time leads to operational disruptions.",
        icon: "/icons/challenge/downtime.svg",
      },
      {
        title: "Expensive Practical Training",
        description: "Reduce cost by replacing physical exercises.",
        icon: "/icons/challenge/cost.svg",
      },
      {
        title: "Human Error",
        description: "Improve procedural accuracy before deployment.",
        icon: "/icons/challenge/human-error.svg",
      },
      {
        title: "Inconsistent Procedures",
        description: "Standardize operational training.",
        icon: "/icons/challenge/checklist.svg",
      },
    ],
    showcase: {
      title: "Experience Operational Training",
      description: "Immersive operational mission simulations.",
      media: {
        type: "video",
        src: "/videos/operational_training_product.mp4",
        thumbnail: "/images/operational_training_product.png",
      },
      tags: [
        "Pilot Training",
        "Mission Readiness",
        "Operational Simulation",
        "Emergency Response",
      ],
      action: {
        label: "Download Brochure",
        href: "/brochures/operational-training.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  {
    slug: "troubleshooting-training",
    categorySlug: "virtual-training-suite",
    hero: {
      title: "Troubleshooting Training",
      description:
        "Interactive troubleshooting scenarios for technical problem solving.",
      media: {
        type: "video",
        src: "/videos/troubleshooting_training_product.mp4",
        thumbnail: "/images/troubleshooting_training_product.png",
      },
      recommendedFor: ["VR Training", "Performance Analytics"],
    },
    challenges: [],
    showcase: {
      title: "Experience Troubleshooting Training",
      description: "Hands-on diagnostics simulation.",
      media: {
        type: "video",
        src: "/videos/troubleshooting_training_product.mp4",
        thumbnail: "/images/troubleshooting_training_product.png",
      },
      tags: ["Performance Analytics"],
      action: {
        label: "Download Brochure",
        href: "/brochures/troubleshooting-training.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  {
    slug: "medical-training",
    categorySlug: "virtual-training-suite",
    hero: {
      title: "Medical Training",
      description: "Immersive clinical and emergency response simulations.",
      media: {
        type: "video",
        src: "/videos/medical_training_product.mp4",
        thumbnail: "/images/medical_training_product.png",
      },
      recommendedFor: ["Immersive Learning", "Emergency Response"],
    },
    challenges: [],
    showcase: {
      title: "Experience Medical Training",
      description: "Medical simulation platform.",
      media: {
        type: "video",
        src: "/videos/medical_training_product.mp4",
        thumbnail: "/images/medical_training_product.png",
      },
      tags: ["Emergency Response"],
      action: {
        label: "Download Brochure",
        href: "/brochures/medical-training.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  // ==========================
  // Training Simulator
  // ==========================
  {
    slug: "shooting-simulator",
    categorySlug: "training-simulator",
    hero: {
      title: "Shooting Simulator",
      description:
        "Realistic marksmanship and tactical engagement training simulator.",
      media: {
        type: "video",
        src: "/videos/shooting_simulator_product.mp4",
        thumbnail: "/images/shooting_simulator_product.png",
      },
      recommendedFor: ["Mission Readiness", "Operational Simulation"],
    },
    challenges: [],
    showcase: {
      title: "Experience Shooting Simulator",
      description: "Immersive live-fire simulation.",
      media: {
        type: "video",
        src: "/videos/shooting_simulator_product.mp4",
        thumbnail: "/images/shooting_simulator_product.png",
      },
      tags: ["Mission Readiness", "Operational Simulation"],
      action: {
        label: "Download Brochure",
        href: "/brochures/shooting-simulator.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  {
    slug: "flight-simulator",
    categorySlug: "training-simulator",
    hero: {
      title: "Flight Simulator",
      description: "Mission-ready pilot training simulator.",
      media: {
        type: "video",
        src: "/videos/flight_simulator_product.mp4",
        thumbnail: "/images/flight_simulator_product.png",
      },
      recommendedFor: ["Pilot Training", "Mission Readiness"],
    },
    challenges: [],
    showcase: {
      title: "Experience Flight Simulator",
      description: "High-fidelity flight training.",
      media: {
        type: "video",
        src: "/videos/flight_simulator_product.mp4",
        thumbnail: "/images/flight_simulator_product.png",
      },
      tags: ["Pilot Training"],
      action: {
        label: "Download Brochure",
        href: "/brochures/flight-simulator.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  // ==========================
  // Command Center
  // ==========================
  {
    slug: "smart-command-center",
    categorySlug: "command-center",
    hero: {
      title: "Smart Command Center",
      description: "Integrated monitoring and decision support platform.",
      media: {
        type: "video",
        src: "/videos/smart_command_center_product.mp4",
        thumbnail: "/images/smart_command_center_product.png",
      },
      recommendedFor: ["Mission Readiness"],
    },
    challenges: [],
    showcase: {
      title: "Experience Smart Command Center",
      description: "Centralized operational monitoring.",
      media: {
        type: "video",
        src: "/videos/smart_command_center_product.mp4",
        thumbnail: "/images/smart_command_center_product.png",
      },
      tags: ["Mission Readiness"],
      action: {
        label: "Download Brochure",
        href: "/brochures/smart-command-center.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  // ==========================
  // Advanced Education System
  // ==========================
  {
    slug: "learning-management-system",
    categorySlug: "advanced-education-system",
    hero: {
      title: "Learning Management System",
      description: "Modern learning management platform.",
      media: {
        type: "video",
        src: "/videos/lms_product.mp4",
        thumbnail: "/images/lms_product.png",
      },
      recommendedFor: ["Performance Analytics"],
    },
    challenges: [],
    showcase: {
      title: "Experience LMS",
      description: "Digital learning ecosystem.",
      media: {
        type: "video",
        src: "/videos/lms_product.mp4",
        thumbnail: "/images/lms_product.png",
      },
      tags: ["Performance Analytics"],
      action: {
        label: "Download Brochure",
        href: "/brochures/lms.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
  // ==========================
  // Virtual Connect Suite
  // ==========================
  {
    slug: "meet",
    categorySlug: "virtual-connect-suite",
    hero: {
      title: "MEET",
      description:
        "Secure communication platform for collaboration and remote training.",
      media: {
        type: "video",
        src: "/videos/meet_product.mp4",
        thumbnail: "/images/meet_product.png",
      },
      recommendedFor: ["Immersive Learning"],
    },
    challenges: [],
    showcase: {
      title: "Experience MEET",
      description: "Secure virtual collaboration platform.",
      media: {
        type: "video",
        src: "/videos/meet_product.mp4",
        thumbnail: "/images/meet_product.png",
      },
      tags: ["Immersive Learning"],
      action: {
        label: "Download Brochure",
        href: "/brochures/meet.pdf",
      },
    },
    cta: {
      label: "Request Consultation",
      href: "/contact",
    },
  },
];

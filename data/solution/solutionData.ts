export interface Product {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly preview: string;
  readonly thumbnail: string;
}

export interface SolutionCategory {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly previewSrc: string;
  readonly featured: boolean;
  readonly recommendedFor: readonly (
    | "Defense"
    | "Government"
    | "Education"
    | "Enterprise"
  )[];
  readonly thumbnail: string;
  readonly products: ReadonlyArray<Product>;
}

export const solutionData: ReadonlyArray<SolutionCategory> = [
  {
    slug: "virtual-training-suite",
    title: "Virtual Training Suite",
    description:
      "Immersive virtual learning environments that improve operational readiness through interactive, scenario-based training.",
    previewSrc: "/videos/virtual_training_suite_solution.mp4",
    featured: true,
    recommendedFor: ["Defense", "Government", "Education", "Enterprise"],
    thumbnail: "/images/virtual_training_suite_solution.png",
    products: [
      {
        slug: "maintenance-training",
        title: "Maintenance Training",
        description:
          "Interactive maintenance training with realistic 3D equipment and guided procedures.",
        preview: "/videos/maintenance_training_product.mp4",
        thumbnail: "/images/maintenance_training_product.png",
      },
      {
        slug: "language-training",
        title: "Language Training",
        description:
          "Immersive language learning with conversation-based simulations and speech recognition.",
        preview: "/videos/language_training_product.mp4",
        thumbnail: "/images/language_training_product.png",
      },
      {
        slug: "operational-training",
        title: "Operational Training",
        description:
          "Scenario-based operational training for military, emergency response, and industrial environments.",
        preview: "/videos/operational_training_product.mp4",
        thumbnail: "/images/operational_training_product.png",
      },
      {
        slug: "troubleshooting-training",
        title: "Troubleshooting Training",
        description:
          "Hands-on troubleshooting simulations for technical problem solving and diagnostics.",
        preview: "/videos/troubleshooting_training_product.mp4",
        thumbnail: "/images/troubleshooting_training_product.png",
      },
      {
        slug: "medical-training",
        title: "Medical Training",
        description:
          "Clinical and surgical simulation platform for healthcare professionals and medical students.",
        preview: "/videos/medical_training_product.mp4",
        thumbnail: "/images/medical_training_product.png",
      },
    ],
  },
  {
    slug: "training-simulator",
    title: "Training Simulator",
    description:
      "High-fidelity simulators that replicate real-world operations safely and realistically.",
    previewSrc: "/videos/training_simulator_solution.mp4",
    featured: false,
    recommendedFor: ["Defense", "Government", "Enterprise"],
    thumbnail: "/images/shooting_simulator_product.png",
    products: [
      {
        slug: "shooting-simulator",
        title: "Shooting Simulator",
        description: "Marksmanship and tactical engagement simulator.",
        preview: "/videos/shooting_simulator_product.mp4",
        thumbnail: "/images/shooting_simulator_product.png",
      },
      {
        slug: "flight-simulator",
        title: "Flight Simulator",
        description:
          "Pilot training with realistic cockpit and mission simulation.",
        preview: "/videos/flight_simulator_product.mp4",
        thumbnail: "/images/flight_simulator_product.png",
      },
      {
        slug: "free-fall-simulator",
        title: "Free fall Simulator",
        description:
          "Free falling simulator for tactical and civilian applications.",
        preview: "/videos/fall_simulator_product.mp4",
        thumbnail: "/images/fall_simulator_product.png",
      },
    ],
  },
  {
    slug: "command-center",
    title: "Command Center",
    description:
      "Integrated command and control platform for monitoring and decision support.",
    previewSrc: "/videos/command_center_solution.mp4",
    featured: false,
    recommendedFor: ["Defense", "Government", "Enterprise"],
    thumbnail: "/images/smart_command_center_product.png",
    products: [
      {
        slug: "smart-command-center",
        title: "Smart Command Center",
        description:
          "Centralized monitoring and operational coordination platform.",
        preview: "/videos/smart_command_center_product.mp4",
        thumbnail: "/images/smart_command_center_product.png",
      },
      {
        slug: "visitor-management-system",
        title: "Visitor management system",
        description:
          "Visitor monitoring and operational coordination platform.",
        preview: "/videos/visitor_management_system_product.mp4",
        thumbnail: "/images/visitor_management_system_product.png",
      },
      {
        slug: "network-management",
        title: "Network management",
        description:
          "Network Centralized monitoring and operational coordination platform.",
        preview: "/videos/network_management_system_product.mp4",
        thumbnail: "/images/network_management_system_product.png",
      },
    ],
  },
  {
    slug: "advanced-education-system",
    title: "Advanced Education System",
    description:
      "Modern digital learning ecosystem for educational institutions and organizations.",
    previewSrc: "/videos/smart_classroom_solution.mp4",
    featured: false,
    recommendedFor: ["Education", "Government", "Enterprise"],
    thumbnail: "/images/lms_product.png",
    products: [
      {
        slug: "learning-management-system",
        title: "Learning Management System",
        description:
          "Comprehensive LMS with classroom, assessments, and reporting.",
        preview: "/videos/lms_product.mp4",
        thumbnail: "/images/lms_product.png",
      },
    ],
  },
  {
    slug: "virtual-connect-suite",
    title: "Virtual Connect Suite",
    description:
      "Secure communication and collaboration platform for modern organizations.",
    previewSrc: "/videos/virtual_connect_suite_solution.mp4",
    featured: false,
    recommendedFor: ["Defense", "Government", "Education", "Enterprise"],
    thumbnail: "/images/meet_product.png",
    products: [
      {
        slug: "meet",
        title: "MEET",
        description:
          "Secure virtual meeting platform for collaboration and remote training.",
        preview: "/videos/meet_product.mp4",
        thumbnail: "/images/meet_product.png",
      },
    ],
  },
];

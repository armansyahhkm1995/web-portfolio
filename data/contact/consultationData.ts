export interface Consultation {
  readonly value: string;
  readonly label: string;
}

export const consultationData: ReadonlyArray<Consultation> = [
  {
    value: "immersive-simulation",
    label: "Immersive Simulation",
  },

  {
    value: "training-simulator",
    label: "Training Simulator",
  },

  {
    value: "command-center",
    label: "Command Center",
  },

  {
    value: "education-system",
    label: "Advanced Education System",
  },

  {
    value: "virtual-connect",
    label: "Virtual Connect Suite",
  },

  {
    value: "other",
    label: "Other",
  },
];

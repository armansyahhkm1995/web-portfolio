export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const footerData = {
  brand: {
    logo: "/images/falah_logo.png",
    description:
      "Immersive simulation and operational technology solutions for government, defense, education, and enterprise sectors.",
  },

  navigation: {
    solutions: [
      {
        title: "Virtual Training Suite",
        href: "/solutions?tab=virtual-training-suite",
      },
      {
        title: "Training Simulator",
        href: "/solutions?tab=training-simulator",
      },
      {
        title: "Command Center",
        href: "/solutions?tab=command-center",
      },
      {
        title: "Advanced Education System",
        href: "/solutions?tab=advanced-education-system",
      },
      {
        title: "Virtual Connect Suite",
        href: "/solutions?tab=virtual-connect-suite",
      },
    ],

    company: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },

  contact: {
    address: "Jl. Mampang Prapatan XII No.1, Jakarta Selatan 12790, Indonesia",
    googleMapsUrl: "https://maps.google.com/?q=PT+Falah+Inovasi+Teknologi",
    email: "business@falahtech.co.id",
    phone: "+622126961651",
  },

  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/FalahInovasiTeknologi/?locale=id_ID",
      icon: "/icons/falah_facebook.png",
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/falahinovasiteknologi/",
      icon: "/icons/falah_instagram.png",
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/pt-falah-inovasi-teknologi/?originalSubdomain=id",
      icon: "/icons/falah_linkedin.png",
    },

    {
      name: "TikTok",
      href: "https://www.tiktok.com/discover/review-kerja-pt-falah-inovasi-teknologi",
      icon: "/icons/falah_tiktok.png",
    },

    {
      name: "YouTube",
      href: "https://www.youtube.com/@falahinovasiteknologi",
      icon: "/icons/falah_youtube.png",
    },
  ],

  copyright: "© 2026 Falah Inovasi Teknologi. All rights reserved.",
};

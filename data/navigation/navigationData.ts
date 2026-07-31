export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export const navigationData: ReadonlyArray<NavigationItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Solutions",
    href: "/solutions",
  },
];

export const contactData = {
  label: "Contact Us",
  href: "/contact",
};

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategoryTitle(slug: string) {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

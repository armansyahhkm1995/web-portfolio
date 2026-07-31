import Link from "next/link";
import type { SolutionCategory } from "@/data/solution/solutionData";

type FooterNavigationProps = {
  solution: SolutionCategory;
};

export default function FooterNavigation({ solution }: FooterNavigationProps) {
  return (
    <li>
      <Link
        href={`/solutions?category=${solution.slug}`}
        className="
          body-md
          text-muted-foreground
          transition-colors
          hover:text-primary
        "
      >
        {solution.title}
      </Link>
    </li>
  );
}

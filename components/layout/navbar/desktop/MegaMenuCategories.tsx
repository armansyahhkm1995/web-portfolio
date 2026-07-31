import { SolutionCategory } from "@/data/solution/solutionData";

type Props = {
  solutions: readonly SolutionCategory[];
  activeSolution: SolutionCategory;
  onHover: (solution: SolutionCategory) => void;
};

export default function MegaMenuCategories({
  solutions,
  activeSolution,
  onHover,
}: Props) {
  return (
    <div className="border-r border-white/10 p-6">
      <div className="space-y-2">
        {solutions.map((solution) => (
          <button
            key={solution.slug}
            type="button"
            onMouseEnter={() => onHover(solution)}
            className={`
              w-full
              rounded-xl
              px-5
              py-4
              text-left
              transition

              ${
                activeSolution.slug === solution.slug
                  ? "bg-primary text-white"
                  : "hover:bg-white/5"
              }
            `}
          >
            {solution.title}
          </button>
        ))}
      </div>
    </div>
  );
}

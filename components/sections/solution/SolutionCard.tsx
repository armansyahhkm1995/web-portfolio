import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SolutionCategory } from "@/data/solution/solutionData";
import Image from "next/image";

type SolutionCardProps = {
  solution: SolutionCategory;
};

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Link
      href={`/solutions?category=${solution.slug}`}
      className={`group relative overflow-hidden rounded-3xl ${
        solution.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Video */}

      {/* <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src={solution.previewSrc}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      /> */}
      <div className="relative aspect-video">
        <Image src={solution.thumbnail} alt={solution.title} fill />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

      {/* Arrow */}

      <div className="absolute right-5 top-5 rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-xl">
        <ArrowUpRight className="size-5 text-white" />
      </div>

      {/* Content */}

      <div className="absolute inset-x-0 bottom-0 p-8">
        <h3 className="display-xs text-white">{solution.title}</h3>

        <div
          className="
          mt-4
          max-h-none
          opacity-100
          lg:mt-0
          lg:max-h-0
          lg:opacity-0
          lg:overflow-hidden
          lg:transition-all
          lg:duration-500
          lg:group-hover:mt-4
          lg:group-hover:max-h-96
          lg:group-hover:opacity-100
         "
        >
          <p className="body-md text-white/80">{solution.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {solution.recommendedFor.map((item) => (
              <span
                key={item}
                className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                body-xs
                backdrop-blur-xl
              "
              >
                {item}
              </span>
            ))}
          </div>

          {solution.featured && (
            <button
              className="
              mt-8
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              body-sm
              backdrop-blur-xl
            "
            >
              Explore Our Solutions
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

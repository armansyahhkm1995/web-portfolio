"use client";

import { useState } from "react";
import { problemData } from "@/data/home/problemData";
import ProblemCard from "@/components/home/ProblemCard";
import Image from "next/image";

export default function ProblemSection() {
  const [activeId, setActiveId] = useState(problemData[0].id);

  const activeProblem =
    problemData.find((item) => item.id === activeId) ?? problemData[0];

  return (
    <section className="site-container py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
          Traditional Training Has Limitations
        </span>

        <h2 className="display-md text-secondary">
          Modern Training Demands More than Traditional Methods
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Modern organizations require immersive and practical training to
          improve readiness, safety, and operational performance.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
        {/* LEFT */}
        <div className="space-y-5">
          {problemData.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              active={activeId === problem.id}
              onClick={() => setActiveId(problem.id)}
            />
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden overflow-hidden rounded-3xl lg:block relative">
          <Image
            src={activeProblem.image}
            alt={activeProblem.title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-full w-full object-cover border border-primary/80"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

interface ScrollProgressProps {
  targetId?: string;
}

export default function ScrollProgress({
  targetId = "final-cta",
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const target = document.getElementById(targetId);

      if (!target) {
        setProgress(0);
        return;
      }

      const scrollTop = window.scrollY;

      /**
       * posisi bawah target
       * ketika bagian bawah target menyentuh bawah viewport
       * progress menjadi 100%
       */
      const targetBottom =
        target.offsetTop + target.offsetHeight - window.innerHeight;

      const percentage = Math.min(
        Math.max((scrollTop / targetBottom) * 100, 0),
        100,
      );

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [targetId]);

  return (
    <div
      className="
        absolute
        bottom-0
        left-0
        h-0.5
        w-full
        overflow-hidden
        bg-transparent
      "
    >
      <div
        className="
          h-full
          origin-left
          bg-primary
          shadow-[0_0_12px_2px_rgba(24,102,239,.9)]
          transition-transform
          duration-75
          ease-out
        "
        style={{
          transform: `scaleX(${progress / 100})`,
        }}
      />
    </div>
  );
}

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

const containerSize = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-6 xl:px-8",
        containerSize[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

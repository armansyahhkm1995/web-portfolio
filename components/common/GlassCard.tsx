import { type ComponentPropsWithoutRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps<T extends ElementType = "div"> = {
  as?: T;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function GlassCard<T extends ElementType = "div">({
  as,
  active = false,
  children,
  className,
  ...props
}: GlassCardProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-color duration-300",

        active
          ? "border-primary/80 bg-white/8"
          : "border-white/10 bg-white/4 hover:border-primary/40 hover:bg-white/6",

        // Top Glow
        "before:absolute before:top-0 before:left-1/2 before:h-24 before:w-full before:-translate-x-1/2 before:bg-linear-to-b before:from-primary/20 before:to-transparent before:blur-3xl before:content-['']",

        className,
      )}
      {...props}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
    </Component>
  );
}

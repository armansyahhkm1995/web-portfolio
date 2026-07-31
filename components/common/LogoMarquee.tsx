import { cn } from "@/lib/utils";
import { logoData } from "@/data/home/logoData";

type LogoMarqueeProps = {
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
};

const speedMap = {
  slow: "40s",
  normal: "28s",
  fast: "18s",
};

const marqueeLogos = [...logoData, ...logoData, ...logoData];

export default function LogoMarquee({
  direction = "left",
  speed = "normal",
}: LogoMarqueeProps) {
  return (
    <div
      className="overflow-hidden"
      style={
        {
          "--marquee-duration": speedMap[speed],
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex w-max items-center",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
        )}
      >
        {marqueeLogos.map((logo, index) => (
          <img
            key={`${logo.name}-${index}`}
            src={logo.logo}
            alt={logo.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            fetchPriority="low"
            className="h-24 w-auto shrink-0 md:h-28 xl:h-32"
          />
        ))}
      </div>
    </div>
  );
}

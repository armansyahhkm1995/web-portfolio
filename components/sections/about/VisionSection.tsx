import Quotes from "@/public/icons/quotes.png";
import Image from "next/image";
import { visionData } from "@/data/about/visionData";
import VisionCard from "@/components/about/VisionCard";

export default function VisionSection() {
  return (
    <section className="site-container py-24">
      {/* Header */}

      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
          What Drives Us
        </span>

        <h2 className="display-md text-secondary">
          Building Technology with Purpose & Precision
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Falah combines innovation, expertise, and integrity to deliver
          immersive technology solutions with long-term impact.
        </p>
      </div>

      {/* Vision Statement */}

      <div className="mx-auto mb-20 max-w-5xl">
        <div className="h-px w-full bg-white/10" />

        <div className="flex items-start gap-6 py-10">
          <Image
            src={Quotes}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 opacity-70"
          />

          <p className="display-xs flex-1 text-center">
            Our Vision to Become a Leading Innovative Technology Company for
            Immersive Operational Solutions
          </p>

          <Image
            src={Quotes}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 rotate-180 opacity-70"
          />
        </div>

        <div className="h-px w-full bg-white/10" />
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {visionData.map((vision) => (
          <VisionCard key={vision.id} vision={vision} />
        ))}
      </div>
    </section>
  );
}

import Container from "@/components/common/Container";
import Image from "next/image";
import PrimaryLinkButton from "@/components/common/PrimaryLinkButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero_about.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-2xl">
          <span
            className="
              mb-6
              inline-flex
              rounded-full
              border
              border-white/15
              px-4
              py-2
              body-xs
              text-white
              backdrop-blur-xl
            "
          >
            The Experts Behind The Technology
          </span>

          <h1 className="display-xl text-white">
            Building the Future of Immersive Operational Technology
          </h1>

          <p className="body-lg mt-6 max-w-xl text-white">
            Falah Inovasi Teknologi develops immersive simulation systems,
            operational software, and integrated technologies that improve
            readiness, safety, and long-term operational performance.
          </p>

          <div className="mt-10">
            <PrimaryLinkButton href="#certificate">
              See Our Certificate
            </PrimaryLinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

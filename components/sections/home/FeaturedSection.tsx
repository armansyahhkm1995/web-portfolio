import Container from "@/components/common/Container";
import FeaturedVideoCard from "@/components/home/FeaturedVideoCard";
import { featuredData } from "@/data/home/videoData";

export default function FeaturedSection() {
  const featuredVideo = featuredData[0];
  return (
    <section className="section bg-[url('/images/featured_background.png')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
            See Immersive Training in Action
          </span>

          <h2 className="display-md text-secondary">
            Immersive Simulation Systems Built for Safer & Smarter Training
          </h2>

          <p className="body-lg mt-5 text-muted-foreground">
            Falah delivers realistic simulation systems that improve competency,
            reduce operational risk, and strengthen workforce readiness.
          </p>
        </div>

        <FeaturedVideoCard video={featuredVideo} />
      </Container>
    </section>
  );
}

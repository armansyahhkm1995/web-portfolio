import Container from "@/components/common/Container";
import LogoMarquee from "@/components/common/LogoMarquee";

export default function TrustSection() {
  return (
    <section className="bg-black py-20">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
              Trusted Across Critical Industries
            </span>

            <h2 className="display-md text-secondary">
              Trusted by Government, Defense, Education, and Enterprise
              Institutions
            </h2>

            <p className="body-lg mt-5 text-muted-foreground">
              Trusted to deliver simulation, training, and operational
              technology solutions for modern organizations.
            </p>
          </div>
        </div>
      </Container>

      {/* Logos */}
      <div className="flex flex-col gap-6">
        <LogoMarquee />
        <LogoMarquee direction="right" />
      </div>
    </section>
  );
}

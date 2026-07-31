import Container from "@/components/common/Container";
import { contactData } from "@/data/navigation/navigationData";
import PrimaryLinkButton from "@/components/common/PrimaryLinkButton";

export default function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="py-24 bg-[url('/images/final_cta.png')] bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
            Let’s Build Future-Ready Operations
          </span>

          <h2 className="display-md text-secondary">
            Ready to Build Smarter Training & Operations?
          </h2>

          <p className="body-lg mt-5 text-muted-foreground">
            Partner with Falah Inovasi Teknologi to develop immersive training
            systems, operational technologies, and digital solutions.
          </p>
        </div>
        <div className="my-10 justify-center flex flex-col gap-4 sm:flex-row">
          <PrimaryLinkButton href={contactData.href}>
            Request Consultation
          </PrimaryLinkButton>
        </div>
      </Container>
    </section>
  );
}

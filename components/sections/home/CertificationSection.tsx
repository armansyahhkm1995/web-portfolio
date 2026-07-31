import { certificateData } from "@/data/about/certificateData";
import Container from "@/components/common/Container";
import CertificateCard from "@/components/about/CertificateCard";

export default function CertificationSection() {
  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
            Meeting Recognized Industry Standards
          </span>

          <h2 className="display-md text-secondary">
            Certified Standards for Strategic Technology Delivery
          </h2>

          <p className="body-lg mt-5 text-muted-foreground">
            Falah maintains recognized standards and compliance frameworks for
            reliable technology delivery across operational environments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificateData.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </Container>
    </section>
  );
}

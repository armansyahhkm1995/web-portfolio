import { certificateData } from "@/data/about/certificateData";
import Container from "@/components/common/Container";
import CertificateShowcaseCard from "@/components/about/CertificateShowcaseCard";

export default function CertificationSection() {
  return (
    <section className="bg-background py-20" id="certificate">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
              Meeting Recognized Industry Standards
            </span>

            <h2 className="display-md text-secondary">
              Certified Standards for Strategic Technology Delivery
            </h2>

            <p className="body-lg mt-5 text-muted-foreground">
              Falah maintains recognized standards & compliance frameworks for
              reliable technology delivery across operational environments.
            </p>
          </div>

          {/* Grid */}

          <div className="grid gap-6 lg:grid-cols-3">
            {certificateData.map((certificate) => (
              <CertificateShowcaseCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

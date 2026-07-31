import GlassCard from "@/components/common/GlassCard";
import type { Certificate } from "@/data/about/certificateData";
import Image from "next/image";

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <GlassCard className="flex h-full flex-col items-center p-8 text-center">
      {/* Logo */}

      <div className="flex h-24 items-center justify-center">
        <Image
          src={certificate.logo}
          alt={certificate.title}
          width={certificate.logoWidth}
          height={certificate.logoHeight}
          className="h-auto w-auto object-contain"
        />
      </div>

      {/* Title */}

      <h3 className="display-xs mt-8">{certificate.title}</h3>

      {/* Badge */}

      <div
        className="
        mt-5
        rounded-full
        border
        border-primary/30
        bg-primary/10
        px-4
        py-2
        body-xs
        text-primary
      "
      >
        {certificate.type}
      </div>

      {/* Description */}

      <p className="body-sm mt-6 text-muted-foreground">
        {certificate.description}
      </p>
    </GlassCard>
  );
}

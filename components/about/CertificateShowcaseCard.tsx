"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import CertificateLightbox from "./CertificateLightBox";
import type { Certificate } from "@/data/about/certificateData";

type Props = {
  certificate: Certificate;
};

export default function CertificateShowcaseCard({ certificate }: Props) {
  return (
    <CertificateLightbox certificate={certificate}>
      <GlassCard
        className="
        group
        relative
        h-120
        cursor-pointer
        overflow-hidden
        p-0
      "
      >
        {/* Image */}

        <Image
          fill
          src={certificate.image}
          alt={certificate.title}
          sizes="
          (min-width:1280px) 33vw,
          (min-width:768px) 50vw,
          100vw
          "
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-linear-to-t
          from-black
          via-black/10
          to-transparent
        "
        />

        {/* Expand */}

        <div
          className="
          absolute
          right-5
          top-5
          bg-white/10
          p-3
          backdrop-blur-xl
          rounded-xl
        "
        >
          <Expand className="size-5 text-white" />
        </div>

        {/* Bottom */}

        <div className="absolute inset-x-0 bottom-0 p-8">
          <h3 className="display-xs text-white">{certificate.title}</h3>

          <div
            className="
            overflow-hidden
            lg:max-h-0
            lg:opacity-0
            lg:transition-all
            lg:duration-500
            lg:group-hover:max-h-96
            lg:group-hover:opacity-100
          "
          >
            <div
              className="
              mt-5
              inline-flex
              bg-white/10
              px-4
              py-2
              backdrop-blur-xl 
              rounded-3xl
            "
            >
              <span className="body-xs text-white">{certificate.type}</span>
            </div>

            <p className="body-sm mt-5 text-white/80">
              {certificate.description}
            </p>
          </div>
        </div>
      </GlassCard>
    </CertificateLightbox>
  );
}

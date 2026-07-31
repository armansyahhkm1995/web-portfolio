"use client";

import Image from "next/image";
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import type { Certificate } from "@/data/about/certificateData";

type Props = {
  certificate: Certificate;
  children: ReactNode;
};

export default function CertificateLightbox({ certificate, children }: Props) {
  return (
    <Dialog>
      <DialogTrigger render={<button type="button" className="contents" />}>
        {children}
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="
        fullscreen
        max-w-none
        border-none
        bg-transparent
        shadow-none
        z-60
      "
      >
        <DialogClose render={<button className="contents" />}>
          <div
            className="
            relative
            flex
            items-center
            justify-center
            w-[95vw]
            h-[95vh]
            "
          >
            <Image
              fill
              src={certificate.image}
              alt={certificate.title}
              sizes="95vw"
              className="object-contain"
            />
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

import OfficeLocationCard from "./OfficeLocationCard";
import type { OfficeLocation } from "@/data/contact/mapData";

type Props = {
  office: OfficeLocation;
};

export default function OfficeMap({ office }: Props) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/15
      shadow-2xl
      aspect-video
    "
    >
      <OfficeLocationCard office={office} />

      <iframe
        title={office.name}
        width="100%"
        height="650"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${office.latitude},${office.longitude}&z=16&output=embed`}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

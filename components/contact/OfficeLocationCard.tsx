import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OfficeLocation } from "@/data/contact/mapData";

type Props = {
  office: OfficeLocation;
};

export default function OfficeLocationCard({ office }: Props) {
  return (
    <div
      className="
      absolute
      left-4
      top-4
      right-4
      z-20
      sm:left-6
      sm:right-auto
      max-w-sm
      rounded-2xl
      border
      border-white/15
      bg-black/60
      p-6
      backdrop-blur-xl
    "
    >
      <div className="flex items-start gap-3">
        <MapPin className="mt-1 size-5 text-primary" />
        <div>
          <h3 className="display-xs text-white">{office.name}</h3>
          <p className="body-sm mt-3 text-white/80">{office.address}</p>
          <a
            href={office.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open location in Google Maps"
          >
            <Button size="sm" className="mt-5">
              Open in Google Maps
              <ExternalLink className="ml-2 size-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

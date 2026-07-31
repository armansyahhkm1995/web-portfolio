import GlassCard from "@/components/common/GlassCard";
import type { CompanyVideo } from "@/data/home/videoData";
import Image from "next/image";

type CompanyVideoCardProps = {
  video: CompanyVideo;
};

export default function CompanyVideoCard({ video }: CompanyVideoCardProps) {
  return (
    <GlassCard>
      {/* <video
        src={video.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          aspect-video
          w-full
          object-cover
        "
      /> */}
      <div className="relative aspect-video">
        <Image src={video.thumbnail} alt={video.alt} fill />
      </div>
    </GlassCard>
  );
}

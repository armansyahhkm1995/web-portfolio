import GlassCard from "@/components/common/GlassCard";
import type { FeaturedVideo } from "@/data/home/videoData";
import Image from "next/image";

type FeaturedVideoCardProps = {
  video: FeaturedVideo;
};

export default function FeaturedVideoCard({ video }: FeaturedVideoCardProps) {
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

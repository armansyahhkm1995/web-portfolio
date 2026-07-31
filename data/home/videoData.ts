export interface FeaturedVideo {
  readonly title: string;
  readonly description: string;
  readonly video: string;
  readonly thumbnail: string;
  readonly alt: string;
}

export interface CompanyVideo {
  readonly video: string;
  readonly thumbnail: string;
  readonly alt: string;
}

export const featuredData: ReadonlyArray<FeaturedVideo> = [
  {
    title: "Operational Training",
    description:
      "Advanced operational simulation systems that improve workforce readiness through immersive and realistic training environments.",
    video: "/featured_video.mp4",
    thumbnail: "/images/featured_video_thumbnail.png",
    alt: "featured video thumbnail",
  },
];

export const companyData: ReadonlyArray<CompanyVideo> = [
  {
    video: "/compro_video.mp4",
    thumbnail: "/images/compro_video_thumbnail.png",
    alt: "compro video thumbnail",
  },
];

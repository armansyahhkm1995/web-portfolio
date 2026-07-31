import type { ProductTag } from "@/data/product/productDetailData";

type Props = {
  tags: readonly ProductTag[];
};

export default function HeroTags({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            rounded-full
            border
            border-white/15
            bg-white/5
            px-4
            py-2
            body-xs
            text-white
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

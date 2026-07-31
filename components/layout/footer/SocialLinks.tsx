import Image from "next/image";
import Link from "next/link";

type SocialLinksProps = {
  socials: ReadonlyArray<{
    name: string;
    href: string;
    icon: string;
  }>;
};

export default function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          aria-label={social.name}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            transition-all
            hover:border-primary
            hover:bg-primary/10
          "
        >
          <Image src={social.icon} alt={social.name} width={18} height={18} />
        </Link>
      ))}
    </div>
  );
}

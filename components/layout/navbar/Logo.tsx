import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Falah Inovasi Teknologi">
      <Image
        src="/images/falah_logo.png"
        alt="Falah Inovasi Teknologi"
        width={153}
        height={55}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}

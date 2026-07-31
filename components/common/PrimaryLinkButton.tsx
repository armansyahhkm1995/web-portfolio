import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function PrimaryLinkButton({
  href,
  children,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "body-sm rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-hover",
        className,
      )}
    >
      {children}
    </Link>
  );
}

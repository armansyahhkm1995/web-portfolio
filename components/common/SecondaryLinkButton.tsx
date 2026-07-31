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
        "body-sm rounded-lg backdrop-blur-xl border border-white px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-hover text-center",
        className,
      )}
    >
      {children}
    </Link>
  );
}

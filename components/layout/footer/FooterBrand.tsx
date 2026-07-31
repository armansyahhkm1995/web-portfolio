import Image from "next/image";

type FooterBrandProps = {
  brand: {
    logo: string;
    description: string;
  };
};

export default function FooterBrand({ brand }: FooterBrandProps) {
  return (
    <div className="max-w-sm">
      <Image
        src={brand.logo}
        alt="Falah Inovasi Teknologi Logo"
        width={140}
        height={48}
        className="h-10 w-auto"
      />

      <p className="body-md mt-6 text-muted-foreground">{brand.description}</p>
    </div>
  );
}

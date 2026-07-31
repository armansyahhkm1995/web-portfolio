type Props = {
  products: readonly {
    slug: string;
    title: string;
  }[];
  activeSlug: string;
  onChange: (slug: string) => void;
};

export default function TabShowcase({ products, activeSlug, onChange }: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-4">
      {products.map((product) => (
        <button
          key={product.slug}
          type="button"
          onClick={() => onChange(product.slug)}
          className={`
            relative
            min-w-64
            rounded-xl
            border
            px-8
            py-4
            body-md
            transition-all
            ${
              activeSlug === product.slug
                ? "border-primary bg-primary/5 text-white"
                : "border-white/10 text-muted-foreground hover:border-primary/40"
            }
          `}
        >
          {activeSlug === product.slug && (
            <div
              className="
                absolute
                left-6
                right-6
                top-0
                h-0.5
                rounded-full
                shadow-[0_0_16px_var(--color-primary)]
              "
            />
          )}

          {product.title}
        </button>
      ))}
    </div>
  );
}

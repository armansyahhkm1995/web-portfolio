import { falahData } from "@/data/about/falahData";
import FalahCard from "@/components/about/FalahCard";

export default function FalahSection() {
  return (
    <section aria-labelledby="falah-heading" className="site-container py-24">
      {/* Header sementara */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="body-xs mb-5 inline-flex rounded-full border border-white/15 px-4 py-2">
          Who We Are
        </span>

        <h2 className="display-md text-secondary">
          Building Technology for Immersive Operations
        </h2>

        <p className="body-lg mt-5 text-muted-foreground">
          Falah Inovasi Teknologi develops simulation systems and immersive
          technologies that improve training, coordination, and operational
          performance.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {falahData.map((falah) => (
          <FalahCard key={falah.id} falahData={falah} />
        ))}
      </div>
    </section>
  );
}

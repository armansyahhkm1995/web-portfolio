import Container from "@/components/common/Container";
import OfficeMap from "@/components/contact/OfficeMap";
import { officeLocation } from "@/data/contact/mapData";

export default function MapSection() {
  return (
    <section
      id="final-cta"
      className="
      relative
      overflow-hidden
      bg-[url('/images/map_background.png')]
      bg-cover
      bg-center
      bg-no-repeat
      py-24
    "
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span
            className="
            body-xs
            inline-flex
            rounded-full
            border
            border-white/15
            px-4
            py-2
            text-white
            backdrop-blur-xl
          "
          >
            Office & Operational Presence
          </span>

          <h2 className="display-md mt-6 text-secondary">
            Built From a Collaborative Technology Environment
          </h2>

          <p className="body-lg mt-5 text-white/80">
            Falah operates from a collaborative operational-tech environment
            designed to support innovation and strategic technology initiatives.
          </p>
        </div>

        <OfficeMap office={officeLocation} />
      </Container>
    </section>
  );
}

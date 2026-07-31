import Container from "@/components/common/Container";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero_contact.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative py-24 lg:py-32">
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1fr_520px]
          "
        >
          {/* Left */}

          <div className="max-w-2xl">
            <span
              className="
                mb-6
                inline-flex
                rounded-full
                border
                border-white/15
                px-4
                py-2
                body-xs
                text-white
                backdrop-blur-xl
              "
            >
              Contact Us
            </span>

            <h1 className="display-xl text-white">
              Let&apos;s Build Future-Ready Operations Together
            </h1>

            <p className="body-lg mt-6 max-w-xl text-white/80">
              Discuss your operational challenges, training initiatives, or
              technology needs with the Falah team.
            </p>
          </div>

          {/* Right */}

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

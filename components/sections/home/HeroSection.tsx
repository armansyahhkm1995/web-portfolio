import Image from "next/image";
import Container from "@/components/common/Container";
import LogoMarquee from "@/components/common/LogoMarquee";
import { contactData } from "@/data/navigation/navigationData";
import PrimaryLinkButton from "@/components/common/PrimaryLinkButton";
import SecondaryLinkButton from "@/components/common/SecondaryLinkButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero_home.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      <Container className="pt-32 pb-24">
        <div className="max-w-xl">
          <h1 className="display-xl text-white">
            Train Smarter with Immersive Simulation Technology
          </h1>

          <p className="body-lg mt-6 text-white">
            Immersive simulation systems designed to improve training
            effectiveness, workforce readiness, and operational performance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryLinkButton href={contactData.href}>
              Request Consultation
            </PrimaryLinkButton>

            <SecondaryLinkButton href="/solutions">
              Explore Our Solutions
            </SecondaryLinkButton>
          </div>
        </div>
      </Container>

      <div className="pb-12">
        <LogoMarquee />
      </div>
    </section>
  );
}

import Container from "@/components/common/Container";
import { solutionData } from "@/data/solution/solutionData";
import FooterBrand from "@/components/layout/footer/FooterBrand";
import FooterNavigation from "@/components/layout/footer/FooterNavigation";
import FooterContact from "@/components/layout/footer/FooterContact";
import { footerData } from "@/data/footer/footerData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <Container>
        {/* Top */}
        <div className="grid gap-16 py-20 lg:grid-cols-3">
          {/* Left */}
          <FooterBrand brand={footerData.brand} />

          {/* Right */}
          <div>
            <h3 className="display-xs mb-6 text-white">Solutions</h3>
            <nav aria-label="Solutions">
              <ul className="space-y-4">
                {solutionData.map((solution) => (
                  <FooterNavigation key={solution.slug} solution={solution} />
                ))}
              </ul>
            </nav>
          </div>

          <FooterContact
            contact={footerData.contact}
            socials={footerData.socials}
          />
        </div>

        {/* Bottom */}
        <div className="border-t text-center border-white/10 py-6">
          <p className="body-sm text-muted-foreground">
            {footerData.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}

import { faqData } from "@/data/home/faqData";
import FaqCard from "@/components/home/FaqCard";

export default function FaqSection() {
  return (
    <section className="py-24">
      <div className="site-container">
        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 body-xs">
            Answers Before You Get Started
          </span>

          <h2 className="display-md text-secondary">
            Frequently Asked Questions About Falah Solutions
          </h2>

          <p className="body-lg mt-5 text-muted-foreground">
            Explore common questions about Falah's immersive simulation systems,
            operational technologies, and capabilities.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2">
          {faqData.map((faq) => (
            <FaqCard key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

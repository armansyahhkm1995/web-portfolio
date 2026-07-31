import GlassCard from "@/components/common/GlassCard";
import type { Faq } from "@/data/home/faqData";

type FaqCardProps = {
  faq: Faq;
};

export default function FaqCard({ faq }: FaqCardProps) {
  return (
    <GlassCard as="article" className="h-full p-8">
      <h3 className="display-xs">{faq.question}</h3>

      <p className="body-md mt-5 text-muted-foreground">{faq.answer}</p>
    </GlassCard>
  );
}

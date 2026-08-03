"use client";

import { submitContact } from "@/lib/services/contact";
import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GlassCard from "@/components/common/GlassCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ContactField from "./ContactField";
import ContactSelect from "./ContactSelect";
import ContactTextarea from "./ContactTextarea";
import WhatsappCard from "./WhatsappCard";
import { consultationData } from "@/data/contact/consultationData";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contactSchema";

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      interest: "",
      detail: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      await submitContact(values);

      toast.success("Consultation request submitted!", {
        description:
          "Thank you for contacting Falah. Our team will get back to you within 1–2 business days.",
      });

      reset();
    } catch {
      toast.error("Failed to submit consultation request.");
    }
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = form;

  return (
    <GlassCard className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactField
            control={control}
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
          />

          <ContactField
            control={control}
            name="organization"
            label="Organization / Institution"
            placeholder="Enter your organization"
          />

          <ContactField
            control={control}
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
          />

          <ContactField
            control={control}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
        </div>

        <ContactSelect
          control={control}
          name="interest"
          label="Consultation Interest"
          placeholder="Select consultation interest"
          options={consultationData}
        />

        <ContactTextarea
          control={control}
          name="detail"
          label="Consultation Detail"
          placeholder="Tell us about your project, goals, or challenges..."
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Consultation"}

          {!isSubmitting && <ArrowRight className="ml-2 size-5" />}
        </Button>

        <p className="body-sm text-muted-foreground">
          Response within 1–2 business days.
        </p>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="border-border w-full border-t" />
          </div>

          <div className="relative flex justify-center">
            <span className="px-4 body-sm">Or</span>
          </div>
        </div>

        <WhatsappCard />
      </form>
    </GlassCard>
  );
}

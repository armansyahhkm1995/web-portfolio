import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters."),

  organization: z.string().trim().min(3, "Organization is required."),

  email: z.string().trim().email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(/^[+0-9()\-\s]+$/, "Please enter a valid phone number."),

  interest: z.string().trim().min(1, "Please select a consultation interest."),

  detail: z.string().trim().max(1000, "Message is too long.").or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

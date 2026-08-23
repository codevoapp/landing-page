import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(180),
  company: z.string().trim().max(180).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

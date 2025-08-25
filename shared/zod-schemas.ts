import { z } from "zod";

export const insertContactSubmissionSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string(),
  budget: z.string().optional(),
  message: z.string(),
  privacyConsent: z.boolean(),
});

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const insertProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  area: z.string(),
  year: z.string(),
  imageUrl: z.string(),
  location: z.string(),
});

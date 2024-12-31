import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
});

export const orderSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  deadline: z.string().datetime("Invalid deadline format"),
  subject: z.string().min(2, "Subject is required"),
  academicLevel: z.enum(["high_school", "college", "university", "masters", "phd"]),
  pages: z.number().min(1, "Minimum 1 page required"),
  format: z.enum(["APA", "MLA", "Chicago", "Harvard", "Other"]),
  sources: z.number().min(0),
  spacing: z.enum(["single", "double"]),
  urgency: z.enum(["normal", "urgent", "very_urgent"]),
  additionalRequirements: z.string().optional(),
});

export const fileUploadSchema = z.object({
  file: z.instanceof(File).refine((file) => {
    return file.size <= 5 * 1024 * 1024; // 5MB
  }, "File size must be less than 5MB"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .optional(),
  timezone: z.string(),
  preferredLanguage: z.enum(["en", "es", "fr", "de", "other"]),
  notifications: z.object({
    email: z.boolean(),
    sms: z.boolean(),
    push: z.boolean(),
  }),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type OrderInput = z.infer<typeof orderSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;

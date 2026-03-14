import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(3, "Name is required"),
  email: z
    .string()
    .trim()
    .email("Invalid email format")
    .min(1, "Email is required"),
  password: z.string().min(4, "Password must be at least 6 characters long"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

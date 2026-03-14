import { z } from "zod";

export const addExpenseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title is required")
    .max(50, "Title cannot exceed 50 characters"),
  amount: z.coerce.number().positive("Amount must be a positive number"),
  category: z.string().trim().min(1, "Category is required"),
  date: z.string().min(1, "Date is required"), // Consider adding .datetime() if ISO format is enforced
  description: z
    .string()
    .trim()
    .max(20, "Description cannot exceed 20 characters")
    .optional()
    .or(z.literal("")),
});

export const deleteExpenseSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Expense ID format"),
});

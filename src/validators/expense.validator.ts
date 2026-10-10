import { z } from 'zod';

/**
 * Validation schema for Day 6 (Part 2/15): Add input validation and constraint rules for Expense
 * Project: AI Expense Manager
 */
export const expense.validatorSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title must contain at least 2 characters').max(200),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED']).default('ACTIVE'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  metadata: z.record(z.any()).optional(),
  createdAt: z.date().optional(),
});

export type expense.validatorInput = z.infer<typeof expense.validatorSchema>;

export const validateexpense.validator = (payload: unknown) => {
  return expense.validatorSchema.safeParse(payload);
};

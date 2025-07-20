import { z } from 'zod';
export const categoryEnum = z.enum(['Work', 'Personal', 'Other']).optional();

const eventValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    title: z.string({ required_error: 'title cannot be empty' }),
    date: z.preprocess(
      (arg) =>
        typeof arg === 'string' || arg instanceof Date
          ? new Date(arg)
          : undefined,
      z.date({ required_error: 'Date cannot be empty' }),
    ),
    time: z.string({ required_error: 'time cannot be empty' }),
    notes: z.string().optional(),
    arcived: z.boolean().default(false),
    category: categoryEnum,
  }),
});

export const eventeValidation = {
  eventValidationSchema,
};

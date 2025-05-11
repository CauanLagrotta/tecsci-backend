import { z } from "zod";

export const getInversoresQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => parseInt(val || "1"))
    .refine((val) => val > 0, { message: "A página deve ser maior que zero" }),
  limit: z
    .string()
    .optional()
    .transform((val) => parseInt(val || "5"))
    .refine((val) => val > 0 && val <= 50, {
      message: "O limite deve ser entre 1 e 50",
    }),
});

export type GetInversoresQuery = z.infer<typeof getInversoresQuerySchema>;

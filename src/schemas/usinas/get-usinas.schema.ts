import { z } from "zod";

export const getUsinasQuerySchema = z.object({
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

export const getSearchUsinasQuerySchema = z.object({
  nome: z.string().min(1, { message: "O nome deve ter ao menos 1 caractere" }),
});

export type GetUsinasQuery = z.infer<typeof getUsinasQuerySchema>;
export type GetSearchUsinasQuery = z.infer<typeof getSearchUsinasQuerySchema>;
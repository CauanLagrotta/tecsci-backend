import { z } from "zod";

export const createUsinaSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome obrigatorio e deve ter ao menos 2 caracteres")
    .max(16, "Nome deve ter no máximo 16 caracteres"),
});

export type CreateUsinaDTO = z.infer<typeof createUsinaSchema>;

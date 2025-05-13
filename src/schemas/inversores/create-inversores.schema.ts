import { z } from "zod";

export const createInversorSchema = z.object({
  nome: z.string(),
  usinaId: z.number(),
});

export type CreateInversorDTO = z.infer<typeof createInversorSchema>;

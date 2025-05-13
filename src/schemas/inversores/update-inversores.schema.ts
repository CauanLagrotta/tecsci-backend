import { z } from "zod";

export const updateInversorSchema = z.object({
  usinaId: z.number(),
  nome: z.string().optional(),
});

export type UpdateInversorDTO = z.infer<typeof updateInversorSchema>;

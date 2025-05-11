import { z } from "zod";

export const createInversorSchema = z.object({
  usinaId: z.number(),
});

export type CreateInversorDTO = z.infer<typeof createInversorSchema>;

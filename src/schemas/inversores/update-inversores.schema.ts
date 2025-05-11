import { z } from "zod";

export const updateInversorSchema = z.object({
  usinaId: z.number(),
});

export type UpdateInversorDTO = z.infer<typeof updateInversorSchema>;

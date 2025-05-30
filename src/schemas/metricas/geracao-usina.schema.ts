import { z } from "zod";

export const geracaoUsinaSchema = z.object({
  usina_id: z.coerce.number(),
  data_inicio: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de início inválida",
  }),
  data_fim: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de fim inválida",
  }),
});

export type GeracaoUsinaQuery = z.infer<typeof geracaoUsinaSchema>;

import { z } from "zod";

export const potenciaMaxPorDiaSchema = z.object({
  inversor_id: z.coerce.number(),
  data_inicio: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de início inválida",
  }),
  data_fim: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de fim inválida",
  }),
});

export type PotenciaMaxPorDiaQuery = z.infer<typeof potenciaMaxPorDiaSchema>;

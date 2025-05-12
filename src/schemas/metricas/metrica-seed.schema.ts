import { z } from "zod";

export const metricaSchema = z.object({
  inversor_id: z.number(),
  potencia_ativa_watt: z.number().nullable(),
  temperatura_celsius: z.number().nullable(),
  datetime: z.object({ $date: z.string() }),
});

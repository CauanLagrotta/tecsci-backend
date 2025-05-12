import { Request, Response } from "express";
import { potenciaMaxPorDiaSchema } from "../../schemas/metricas/potencia-max-por-dia.schema";
import { potenciaMaxPorDiaService } from "../../services/metricas/potencia-max-por-dia.service";


export async function potenciaMaxPorDiaController(req: Request, res: Response) {
  const parsed = potenciaMaxPorDiaSchema.safeParse(req.query);

  if (!parsed.success) {
     res.status(400).json({ errors: parsed.error.format() });
     return
  }

  const result = await potenciaMaxPorDiaService(parsed.data);
   res.status(200).json(result);
   return
}

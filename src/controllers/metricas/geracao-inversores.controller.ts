import { Request, Response } from "express";
import { geracaoInversoresSchema } from "../../schemas/metricas/geracao-inversores.schema";
import { geracaoInversoresService } from "../../services/metricas/geracao_inversores.service";

export const geracaoInversoresController = async (
  req: Request,
  res: Response
) => {
  const parsed = geracaoInversoresSchema.safeParse(req.query);

  if (!parsed.success) {
     res.status(400).json({ errors: parsed.error.format() });
     return
  }

  const result = await geracaoInversoresService(parsed.data);
   res.status(200).json(result);
};

import { Request, Response } from "express";
import { temperaturaMediaPorDiaSchema } from "../../schemas/metricas/temperatura-media-por-dia.schema";
import { temperaturaMediaPorDiaService } from "../../services/metricas/get-temperatura-media-por-dia.service";

export async function temperaturaMediaPorDiaController(
  req: Request,
  res: Response
) {
  try {
    const parsed = temperaturaMediaPorDiaSchema.safeParse(req.query);

    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.format() });
      return;
    }

    const result = await temperaturaMediaPorDiaService(parsed.data);
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
    return;
  }
}

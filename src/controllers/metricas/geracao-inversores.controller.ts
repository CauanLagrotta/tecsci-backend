import { Request, Response } from "express";
import { geracaoInversoresSchema } from "../../schemas/metricas/geracao-inversores.schema";
import { geracaoInversoresService } from "../../services/metricas/geracao-inversores.service";

export async function geracaoInversoresController(req: Request, res: Response) {
  try {
    const parsed = geracaoInversoresSchema.safeParse(req.query);

    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.format() });
      return;
    }

    const result = await geracaoInversoresService(parsed.data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
    return;
  }
}

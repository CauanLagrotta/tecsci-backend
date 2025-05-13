import { Response, Request } from "express";
import { geracaoUsinaSchema } from "../../schemas/metricas/geracao-usina.schema";
import { geracaoUsinaService } from "../../services/metricas/get-geracao-usina.service";

export async function geracaoUsinaController(req: Request, res: Response) {
  try {
    const parsed = geracaoUsinaSchema.safeParse(req.query);

    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.format() });
      return;
    }

    const result = await geracaoUsinaService(parsed.data);
    res.json(result);

  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
    return;
  }
}

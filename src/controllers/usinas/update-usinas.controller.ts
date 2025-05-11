import { Request, Response } from "express";
import { updateUsinaSchema } from "../../schemas/usinas/update-usinas.schema";
import { updateUsinaService } from "../../services/usinas/update-usinas.service";
import { formatDate } from "../../utils/format-date";

export async function updateUsinaController(req: Request, res: Response) {
  try {
    const result = updateUsinaSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    const { id } = req.params;
    const numericId = parseInt(id);

    const usina = await updateUsinaService(numericId, result.data);
    res.status(200).json({
      data: {
        ...usina,
        createdAt: formatDate(new Date(usina.createdAt)),
        updatedAt: formatDate(new Date(usina.updatedAt)),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Usina nao encontrada") {
        res.status(404).json({ message: error.message });
        return;
      }
    }
    res.status(500).json({ message: "Erro desconhecido" });
  }
}

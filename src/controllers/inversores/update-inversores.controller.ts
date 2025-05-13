import { Request, Response } from "express";
import { updateInversorSchema } from "../../schemas/inversores/update-inversores.schema";
import { updateInversorService } from "../../services/inversores/update-inversores.service";
import { formatDate } from "../../utils/format-date";

export async function updateInversorController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const result = updateInversorSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    const numericId = parseInt(id);

    const inversor = await updateInversorService(numericId, result.data);
    res.status(200).json({
      data: {
        ...inversor,
        createdAt: formatDate(new Date(inversor.createdAt)),
        updatedAt: formatDate(new Date(inversor.updatedAt)),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Inversor nao encontrado") {
        res.status(404).json({ message: error.message });
        return;
      }
    }
    res.status(500).json({ message: "Erro desconhecido" });
  }
}

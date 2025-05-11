import { Request, Response } from "express";
import { CreateUsinaService } from "../../services/usinas/create-usinas.service";
import { createUsinaSchema } from "../../schemas/usinas/create-usinas.schema";
import { formatDate } from "../../utils/format-date";

export async function createUsinaController(req: Request, res: Response) {
  try {
    const result = createUsinaSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    const novaUsina = await CreateUsinaService(result.data);

    res.status(201).json({
      data: {
        ...novaUsina,
        createdAt: formatDate(new Date(novaUsina?.createdAt ?? Date.now())), // Se createdAt for undefined, retorna a data atual
        updatedAt: formatDate(new Date(novaUsina?.updatedAt ?? Date.now())),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Usina ja cadastrada") {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro interno" });
      }
    } else {
      res.status(500).json({ message: "Erro desconhecido" });
    }
  }
}

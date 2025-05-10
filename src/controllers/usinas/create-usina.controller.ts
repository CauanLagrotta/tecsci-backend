import { Request, Response } from "express";
import { CreateUsinaService } from "../../services/usinas/create-usina.service";
import { createUsinaSchema } from "../../schemas/usina.schema";

export async function createUsinaController(req: Request, res: Response) {
  try {
    const result = createUsinaSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    const novaUsina = await CreateUsinaService(result.data);
    const dataCriacaoFormatada = novaUsina?.createdAt.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    }); // Ex: 10/05/2025 14:30

    const dataEdicaoFormatada = novaUsina?.updatedAt.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    res.status(201).json({
      data: {
        ...novaUsina,
        createdAt: dataCriacaoFormatada,
        updatedAt: dataEdicaoFormatada,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message == "Usina ja cadastrada") {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Erro interno" });
      }
    } else {
      res.status(500).json({ message: "Erro desconhecido" });
    }
  }
}

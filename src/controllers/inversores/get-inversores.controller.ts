import { Request, Response } from "express";
import { formatDate } from "../../utils/format-date";
import { getInversoresService } from "../../services/inversores/get-inversores.service";
import {
  GetInversoresQuery,
  getInversoresQuerySchema,
} from "../../schemas/inversores/get-inversores.schema";

export async function getInversoresController(req: Request, res: Response) {
  try {
    const { page = 1, limit = 5 } = req.validatedQuery as GetInversoresQuery;

    const { inversores, totalInversores, totalPages } =
      await getInversoresService(page, limit);

    const formattedInversores = inversores.map((inversor) => ({
      ...inversor,
      createdAt: formatDate(new Date(inversor.createdAt)),
      updatedAt: formatDate(new Date(inversor.updatedAt)),
    }));

    res.status(200).json({
      data: formattedInversores,
      pagination: {
        totalItems: totalInversores,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Página inválida") {
        res.status(400).json({ message: error.message });
        return;
      }
    }
    res.status(500).json({ message: "Erro desconhecido" });
  }
}

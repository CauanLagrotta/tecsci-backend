import { Request, Response } from "express";
import { formatDate } from "../../utils/format-date";
import {
  getUsinasService,
  getUsinasServiceSearch,
} from "../../services/usinas/get-usinas.service";
import {
  GetUsinasQuery,
  GetSearchUsinasQuery
} from "../../schemas/usinas/get-usinas.schema";


export async function getUsinasController(req: Request, res: Response) {
  try {
    const { page = 1, limit = 5 } = req.validatedQuery as GetUsinasQuery;

    const { usinas, totalUsinas, totalPages } = await getUsinasService(
      page,
      limit
    );

    const formattedUsinas = usinas.map((usina) => ({
      ...usina,
      createdAt: formatDate(new Date(usina.createdAt)),
      updatedAt: formatDate(new Date(usina.updatedAt)),
    }));

    res.status(200).json({
      data: formattedUsinas,
      pagination: {
        totalItems: totalUsinas,
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

export async function getUsinasControllerSearch(req: Request, res: Response) {
  try {
    const { nome } = req.validatedQuery as GetSearchUsinasQuery;

    const usinas = await getUsinasServiceSearch(nome);

    if (!usinas || usinas.length === 0) {
      res.status(404).json({ message: "Nenhuma usina encontrada" });
      return;
    }

    const formattedUsinas = usinas.map((usina) => ({
      ...usina,
      createdAt: formatDate(new Date(usina.createdAt)),
      updatedAt: formatDate(new Date(usina.updatedAt)),
    }));

    res.status(200).json({ data: formattedUsinas });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Nenhuma usina cadastrada") {
        res.status(404).json({ message: error.message });
        return;
      }
    }
    res.status(500).json({ message: "Erro desconhecido" });
  }
}

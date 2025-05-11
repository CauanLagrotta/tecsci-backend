import { Request, Response } from "express";
import { deleteInversoresService } from "../../services/inversores/delete-inversores.service";

export async function deleteInversorController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const numericId = parseInt(id);
    const deletedInversor = await deleteInversoresService(numericId);

    res
      .status(200)
      .json({
        message: "Inversor deletado com sucesso",
        data: deletedInversor,
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

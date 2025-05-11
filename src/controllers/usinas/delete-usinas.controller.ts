import { Response, Request } from "express";
import { deleteUsinasService } from "../../services/usinas/delete-usinas.service";

export async function deleteUsinasController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const numericId = parseInt(id);
    const deletedUsina = await deleteUsinasService(numericId);

    res
      .status(200)
      .json({ message: "Usina deletada com sucesso", data: deletedUsina });
  } catch (error) {
    if(error instanceof Error) {
      if(error.message === "Usina nao encontrada") {
        res.status(404).json({ message: error.message });
        return;
      }
    }
    res.status(500).json({ message: "Erro desconhecido" });
  }
}

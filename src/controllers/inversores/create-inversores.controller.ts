import { Request, Response } from "express";
import { createInversorSchema } from "../../schemas/inversores/create-inversores.schema";
import { createInversorService } from "../../services/inversores/create-inversores.service";

export async function createInversorController(req: Request, res: Response) {
  try {
    const result = createInversorSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    const inversor = await createInversorService(result.data);
    res.status(201).json({ data: inversor });

  } catch (error) {
    if (error instanceof Error) {
        
      if (error.message === "Usina nao encontrada") {
        res.status(404).json({ message: error.message });
        return;
      }
    }

    res.status(500).json({ message: "Erro interno do servidor" });
    return;
  }
}

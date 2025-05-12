import { Response, Request } from "express";
import { geracaoUsinaSchema } from "../../schemas/metricas/geracao-usina.schema";
import { geracaoUsinaService } from "../../services/metricas/geracao-usina.service";

export async function geracaoUsinaController (req: Request, res: Response){
    const parsed = geracaoUsinaSchema.safeParse(req.query);

    if(!parsed.success){
        res.status(400).json({ errors: parsed.error.format() });
        return
    }

    const result = await geracaoUsinaService(parsed.data);
     res.json(result);
     return
};
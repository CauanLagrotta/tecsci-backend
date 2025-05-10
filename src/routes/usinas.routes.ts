import { Router } from "express"; 
import { createUsinaController } from "../controllers/usinas/create-usina.controller";
import { validate } from "../middleware/validate.middleware";
import { createUsinaSchema } from "../schemas/usina.schema";

export const usinaRoutes = Router();

usinaRoutes.post("/usinas", validate(createUsinaSchema), createUsinaController) // POST http://localhost:3000/api/usinas
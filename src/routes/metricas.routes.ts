import { Router } from "express";

import { validate } from "../middleware/validate.middleware";

import { potenciaMaxPorDiaController } from "../controllers/metricas/potencia-max-por-dia.controller";
import { potenciaMaxPorDiaSchema } from "../schemas/metricas/potencia-max-por-dia.schema";



export const metricasRoutes = Router();

metricasRoutes.get(
  "/metricas/potencia-max-por-dia",
  validate({ query: potenciaMaxPorDiaSchema }),
  potenciaMaxPorDiaController
); // GET /api/metricas/potencia-max-por-dia?inversor_id=1&data_inicio=2024-01-01&data_fim=2024-01-31


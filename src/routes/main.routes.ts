import { Router } from "express";
import { usinaRoutes } from "./usinas.routes";
import { inversorRoutes } from "./inversores.routes";
import { metricasRoutes } from "./metricas.routes";

export const mainRouter = Router();

mainRouter.use("/api", usinaRoutes); // http://localhost:3000/api/usinas
mainRouter.use("/api", inversorRoutes); // http://localhost:3000/api/inversores
mainRouter.use("/api", metricasRoutes); // http://localhost:3000/api/metricas

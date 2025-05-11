import { Router } from "express";
import { usinaRoutes } from "./usinas.routes";
import { inversorRoutes } from "./inversores.routes";

export const mainRouter = Router();

mainRouter.use("/api", usinaRoutes); // http://localhost:3000/api/usinas
mainRouter.use("/api", inversorRoutes); // http://localhost:3000/api/inversores

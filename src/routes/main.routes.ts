import { Router } from "express";
import { usinaRoutes } from "./usinas.routes";

export const mainRouter = Router();

mainRouter.use("/api", usinaRoutes); // http://localhost:3000/api/usinas
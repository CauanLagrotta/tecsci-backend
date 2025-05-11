import { Router } from "express";
import { createInversorController } from "../controllers/inversores/create-inversores.controller";
import { createInversorSchema } from "../schemas/inversores/create-inversores.schema";
import { validate } from "../middleware/validate.middleware";

export const inversorRoutes = Router();

inversorRoutes.post(
  "/inversores",
  validate({ body: createInversorSchema }),
  createInversorController
); // POST http://localhost:3000/api/inversores

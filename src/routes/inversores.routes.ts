import { Router } from "express";
import { createInversorController } from "../controllers/inversores/create-inversores.controller";
import { getInversoresController } from "../controllers/inversores/get-inversores.controller";
import { createInversorSchema } from "../schemas/inversores/create-inversores.schema";
import { validate } from "../middleware/validate.middleware";
import { getInversoresQuerySchema } from "../schemas/inversores/get-inversores.schema";

export const inversorRoutes = Router();

inversorRoutes.post(
  "/inversores",
  validate({ body: createInversorSchema }),
  createInversorController
); // POST http://localhost:3000/api/inversores

inversorRoutes.get(
  "/inversores",
  validate({ query: getInversoresQuerySchema }),
  getInversoresController
); // GET http://localhost:3000/api/inversores?page=1&limit=10
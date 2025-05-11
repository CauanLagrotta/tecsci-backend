import { Router } from "express";
import { createInversorController } from "../controllers/inversores/create-inversores.controller";
import { getInversoresController } from "../controllers/inversores/get-inversores.controller";
import { updateInversorController } from "../controllers/inversores/update-inversores.controller";
import { deleteInversorController } from "../controllers/inversores/delete-inversores.controller";

import { createInversorSchema } from "../schemas/inversores/create-inversores.schema";
import { updateInversorSchema } from "../schemas/inversores/update-inversores.schema";
import { getInversoresQuerySchema } from "../schemas/inversores/get-inversores.schema";

import { validate } from "../middleware/validate.middleware";

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

inversorRoutes.put(
  "/inversores/:id",
  validate({ body: updateInversorSchema }),
  updateInversorController
); // PUT http://localhost:3000/api/inversores/17

inversorRoutes.delete(
  "/inversores/:id",
  deleteInversorController
); // DELETE http://localhost:3000/api/inversores/1

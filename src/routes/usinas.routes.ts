import { Router } from "express";
import { createUsinaController } from "../controllers/usinas/create-usinas.controller";
import {
  getUsinasController,
  getUsinasControllerSearch,
} from "../controllers/usinas/get-usinas.controller";
import { validate } from "../middleware/validate.middleware";
import { createUsinaSchema } from "../schemas/usinas/create-usinas.schema";
import {
  getUsinasQuerySchema,
  searchUsinasQuerySchema,
} from "../schemas/usinas/get-usinas.schema";

export const usinaRoutes = Router();

usinaRoutes.post(
  "/usinas",
  validate({ body: createUsinaSchema }),
  createUsinaController
); // POST http://localhost:3000/api/usinas

usinaRoutes.get(
  "/usinas",
  validate({ query: getUsinasQuerySchema }),
  getUsinasController
); // GET http://localhost:3000/api/usinas

usinaRoutes.get(
  "/usinas/search",
  validate({ query: searchUsinasQuerySchema }),
  getUsinasControllerSearch
); // GET http://localhost:3000/api/usinas/search

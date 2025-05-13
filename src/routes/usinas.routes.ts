import { Router } from "express";

import { validate } from "../middleware/validate.middleware";

import { createUsinaController } from "../controllers/usinas/create-usinas.controller";
import { getUsinasController, getUsinasControllerSearch } from "../controllers/usinas/get-usinas.controller";
import { updateUsinaController } from "../controllers/usinas/update-usinas.controller";
import { deleteUsinasController } from "../controllers/usinas/delete-usinas.controller";

import { createUsinaSchema } from "../schemas/usinas/create-usinas.schema";
import { getUsinasQuerySchema, getSearchUsinasQuerySchema } from "../schemas/usinas/get-usinas.schema";
import { updateUsinaSchema } from "../schemas/usinas/update-usinas.schema";


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
); // GET http://localhost:3000/api/usinas?page=1&limit=10

usinaRoutes.get(
  "/usinas/search",
  validate({ query: getSearchUsinasQuerySchema }),
  getUsinasControllerSearch
); // GET http://localhost:3000/api/usinas/search?nome=Usina%203 (buscando: Usina 3)

usinaRoutes.put(
  "/usinas/:id",
  validate({ body: updateUsinaSchema }),
  updateUsinaController
); // PUT http://localhost:3000/api/usinas/1

usinaRoutes.delete(
  "/usinas/:id",
  deleteUsinasController
); // DELETE http://localhost:3000/api/usinas/1

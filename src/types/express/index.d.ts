import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    validatedQuery?: unknown;
    validatedBody?: unknown;
    validatedParams?: unknown;
  }
}

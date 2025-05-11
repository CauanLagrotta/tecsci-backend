import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

type Schemas = {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
};

export function validate(schemas: Schemas) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) {
        const result = schemas.body.safeParse(req.body);
        if (!result.success) {
          res.status(400).json({ errors: result.error.format() });
          return;
        }
        req.validatedBody = result.data;
      }

      if (schemas.query) {
        const result = schemas.query.safeParse(req.query);
        if (!result.success) {
          res.status(400).json({ errors: result.error.format() });
          return;
        }
        req.validatedQuery = result.data;
      }

      if (schemas.params) {
        const result = schemas.params.safeParse(req.params);
        if (!result.success) {
          res.status(400).json({ errors: result.error.format() });
          return;
        }
        req.validatedParams = result.data;
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.format() });
        return;
      }
      next(error);
    }
  };
}

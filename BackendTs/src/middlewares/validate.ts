import { Request, Response, NextFunction } from "express";
import { Result, validationResult } from "express-validator";
import ValidationError from "../errors/ValidationError";

export default (req: Request, res: Response, next: NextFunction) => {
  const errors: Result = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const validateErr = new ValidationError({
    code: 422,
    message: "ValidationError",
    context: errors.array(),
  });

  return next(validateErr);
};

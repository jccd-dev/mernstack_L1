import { Request, Response, NextFunction } from "express";
import NotFoundError from "../errors/NotFoundError";

export default (req: Request, res: Response, next: NextFunction) => {
  const error = new NotFoundError({
    code: 404,
    message: "Router Not Found",
    context: null,
  });
  next(error);
};

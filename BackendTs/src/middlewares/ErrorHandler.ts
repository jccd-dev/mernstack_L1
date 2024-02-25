import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    const { statusCode, errors } = err;
    //for logging and debugging
    console.log(
      JSON.stringify(
        {
          code: err.statusCode,
          errors: err.errors,
          stack: err.stack,
        },
        null,
        2
      )
    );
    return res.status(statusCode).send({ errors });
  }

  console.log(JSON.stringify(err, null, 2));
  return res
    .status(500)
    .send({ errors: [{ message: "Internal Server Error" }] });
};

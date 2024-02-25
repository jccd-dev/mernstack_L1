import { NextFunction, Response, Request } from "express";

/**
 * Wraps an asynchronous route handler or middleware function to automatically catch any
 * thrown errors and forward them to Express's next error handling middleware. This eliminates
 * the need for repetitive try-catch blocks in asynchronous Express routes and middleware.
 *
 * @param {Function} fn - The asynchronous route handler or middleware function to wrap.
 * This function should accept Express's `req`, `res`, and `next` parameters.
 *
 * @example
 * // Example of using asyncErrorHandler with an asynchronous route handler
 * router.get('/example-route', asyncErrorHandler(async (req, res, next) => {
 *   const data = await someAsyncOperation();
 *   res.json(data);
 * }));
 * or just wrap the controller in this function : asyncErrorHandler(controller)
 */
export const asyncErrorHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    if (fn.constructor.name === "AsyncFunction") {
      fn(req, res, next).catch(next);
    } else {
      Promise.resolve(fn(req, res, next)).catch(next);
    }
  };

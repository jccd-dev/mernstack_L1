export type CustomErrorContent = {
  message: string;
  context?: { [key: string]: any } | null;
};

export abstract class CustomError extends Error {
  abstract readonly statusCode: number; // http status code
  abstract readonly errors: CustomErrorContent[]; // more detailed errors (validation error)
  //create here a boolean for logging functionality
  constructor(message: string) {
    super(message);

    //extending builtin class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

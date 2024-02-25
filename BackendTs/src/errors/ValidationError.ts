import { CustomError } from "./CustomError";

export default class ValidationError extends CustomError {
  private static readonly _statusCode = 422;
  private readonly _code: number;
  private readonly _context: { [key: string]: any };

  constructor(params?: {
    code: number;
    message: string;
    context?: { [key: string]: any };
  }) {
    const { message, code } = params || {};

    super(message || "Validation Error");
    this._code = code || ValidationError._statusCode;
    this._context = params?.context || {};

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return this._code;
  }
}

/**
 * AppEror is a custome error that extend the natice Error in JavaScript
 */
class AppError extends Error {
  status: number;
  data: object;

  constructor(message: string, status: number, data: object = {}) {
    super(message);
    this.status = status;
    this.data = data;
  }

  /**
   * Creates a new AppError instance  representing a Not Found Error
   * @param {object} data detailed information about the error
   * @returns {AppError} An instance of AppError configured as Not Found Error.
   */
  static notFoundError(data: object) {
    return new AppError("Not Found", 404, data);
  }
}

export default AppError;

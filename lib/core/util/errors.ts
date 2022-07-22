import { CustomError } from "ts-custom-error";

export class AppError extends CustomError {
  public constructor(
    public statusCode: number,
    message?: string,
    public translationKey?: string,
    public isOperational = false,
    public stack = "",
    public status = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.translationKey = translationKey;
    this.isOperational = isOperational;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const ERROR_MESSAGES = {
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  PAYMENT_REQUIRED: "Payment Required",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not Found",
  METHOD_NOT_ALLOWED: "Method Not Allowed",
  UNPROCESSABLE_ENTITY: "Unprocessable Entity",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  NOT_IMPLEMENTED: "Not Implemented",
  BAD_GATEWAY: "Bad Gateway",
  SERVICE_UNAVAILABLE: "Service Unavailable",
  GATEWAY_TIMEOUT: "Gateway Timeout",
  CONFLICT: "Conflict",
};

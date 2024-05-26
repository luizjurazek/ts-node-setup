import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
}

interface errorDetails {
  error: boolean;
  message: string;
  stack?: string;
}

function errorHandle(error: CustomError, req: Request, res: Response, next: NextFunction) {
  console.log("olá error");
  // verify if error have a statusCode defined if not, assign 500
  const statusCode: number = error.statusCode || 500;

  let message: string = "Internal Server Error";

  if (error.message) {
    message = error.message;
  }

  const errorDetails: errorDetails = {
    error: true,
    message: message,
  };

  if (process.env.NODE_ENV === "development") {
    errorDetails.stack = error.stack;
  }

  return res.status(statusCode).json(errorDetails);
}

export default errorHandle;

import { Prisma } from "@prisma/client";
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
const globalError: ErrorRequestHandler = (err, req, res, next) => {
  let status = httpStatus.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong !";
  let success = false;

  // if (err instanceof Prisma.PrismaClientKnownRequestError) {
  //   status = httpStatus.BAD_REQUEST;
  //   message = err.message;
  //   success = false;
  // }
  res.status(status).json({
    success: false,
    message: err.name || message,
    status: status,
  });
};

export default globalError;

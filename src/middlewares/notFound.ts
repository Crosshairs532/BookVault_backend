import { Request, Response } from "express";
import httpStatus from "http-status";
const notFound = (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "API NOT FOUND",
    status: httpStatus.NOT_FOUND,
  });
};
export default notFound;

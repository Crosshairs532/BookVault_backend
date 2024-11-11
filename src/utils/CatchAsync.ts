import { NextFunction, Request, RequestHandler, Response } from "express";

const CatchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default CatchAsync;

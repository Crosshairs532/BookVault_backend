import { Response } from "express";
import http from "http-status";

export const SendResponse = (res: Response, data: any) => {
  res.status(http.OK).json({
    success: data.success,
    status: data.status,
    message: data.message,
    data: data.data,
  });
};

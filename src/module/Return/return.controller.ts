import { Request, Response } from "express";
import CatchAsync from "../../utils/CatchAsync";
import { returnService } from "./return.service";
import { SendResponse } from "../../utils/sendResponse";

const returnBook = CatchAsync(async (req: Request, res: Response) => {
  const borrowId = req.body;
  console.log(borrowId);
  const result = await returnService.returnBook(borrowId);

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});

export const returnController = {
  returnBook,
};

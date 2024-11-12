import { Request, Response } from "express";
import CatchAsync from "../../utils/CatchAsync";
import { borrowService } from "./borrow.service";
import { SendResponse } from "../../utils/sendResponse";

const borrowBook = CatchAsync(async (req: Request, res: Response) => {
  const { bookId, memberId } = req.body;

  const result = await borrowService.borrowBook(bookId, memberId);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});
export const borrowController = {
  borrowBook,
};

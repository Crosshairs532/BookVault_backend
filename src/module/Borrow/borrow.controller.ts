import { Request, Response } from "express";
import CatchAsync from "../../utils/CatchAsync";
import { borrowService } from "./borrow.service";
import { SendResponse } from "../../utils/sendResponse";
import { bookService } from "../Book/book.service";

const borrowBook = CatchAsync(async (req: Request, res: Response) => {
  const result = await borrowService.borrowBook(req.body);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});

const overdueBook = CatchAsync(async (req: Request, res: Response) => {
  const result = await borrowService.overdueBook();
  const message =
    result.length > 0 ? "Overdue borrow list fetched" : "No overdue book";

  SendResponse(res, {
    success: true,
    status: 200,
    message: message,
    data: result,
  });
});

export const borrowController = {
  borrowBook,
  overdueBook,
};

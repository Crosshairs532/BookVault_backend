import { Request, Response } from "express";
import CatchAsync from "../../utils/CatchAsync";
import { TBook } from "./book.interface";
import { bookService } from "./book.service";
import { SendResponse } from "../../utils/sendResponse";

const createBooks = CatchAsync(async (req: Request, res: Response) => {
  const bookDetail = req.body;

  const result = await bookService.createBookDb(bookDetail);

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book created successfully",
    data: result,
  });
});
const getBooks = CatchAsync(async (req: Request, res: Response) => {
  const allBook = await bookService.getBookDb();

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book created successfully",
    data: allBook,
  });
});
export const BooksController = {
  createBooks,
  getBooks,
};

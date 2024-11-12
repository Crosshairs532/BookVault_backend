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
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});
const getBooks = CatchAsync(async (req: Request, res: Response) => {
  const allBook = await bookService.getBookDb();

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: allBook,
  });
});

const getSingleBook = CatchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await bookService.getSingleBookDb(bookId);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = CatchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const updateData = req.body;
  const result = await bookService.updateBookDb(bookId, updateData);

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = CatchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await bookService.deleteBookDb(bookId);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book deleted successfully",
  });
});
export const BooksController = {
  createBooks,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};

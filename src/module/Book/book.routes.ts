import { Router } from "express";
import { BooksController } from "./book.controller";

const route = Router();

route.post("/", BooksController.createBooks);
route.get("/", BooksController.getBooks);
route.get("/:bookId", BooksController.getSingleBook);
route.put("/:bookId", BooksController.updateBook);
route.delete("/:bookId", BooksController.deleteBook);

export const bookRoutes = route;

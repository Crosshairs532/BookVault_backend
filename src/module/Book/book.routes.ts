import { Router } from "express";
import { BooksController } from "./book.controller";

const route = Router();

route.post("/", BooksController.createBooks);
route.get("/", BooksController.getBooks);

export const bookRoutes = route;

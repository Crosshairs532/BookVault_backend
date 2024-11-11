import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";
import { TBook } from "./book.interface";

const createBookDb = async (bookDetail: any) => {
  const book: Prisma.BookCreateInput = await prisma.book.create({
    data: bookDetail,
  });

  return book;
};
const getBookDb = async () => {
  const book: Prisma.BookCreateInput[] = await prisma.book.findMany({});

  return book;
};

export const bookService = {
  createBookDb,
  getBookDb,
};

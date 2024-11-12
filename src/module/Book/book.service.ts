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
const getSingleBookDb = async (id: string) => {
  const book = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  return book;
};

const updateBookDb = async (id: string, updatedData: any) => {
  const isExist = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  const updated = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: {
      title: updatedData.title,
      genre: updatedData.genre,
      publishedYear: updatedData.publishedYear,
      totalCopies: updatedData.totalCopies,
      availableCopies: updatedData.availableCopies,
    },
  });

  return updated;
};

const deleteBookDb = async (id: string) => {
  const isExist = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  const deletedData = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });

  console.log(deletedData);
};
export const bookService = {
  createBookDb,
  getBookDb,
  getSingleBookDb,
  updateBookDb,
  deleteBookDb,
};

import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";
import { TBook } from "./book.interface";
import { NextFunction } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const createBookDb = async (bookDetail: any, next: NextFunction) => {
  try {
    const book: Prisma.BookCreateInput = await prisma.book.create({
      data: bookDetail,
    });

    return book;
  } catch (error) {
    next(error);
  }
};
const getBookDb = async (next: NextFunction) => {
  try {
    const book: Prisma.BookCreateInput[] = await prisma.book.findMany({});

    return book;
  } catch (error) {
    next(error);
  }
};
const getSingleBookDb = async (id: string, next: NextFunction) => {
  try {
    const book = await prisma.book.findUniqueOrThrow({
      where: {
        bookId: id,
      },
    });

    return book;
  } catch (error) {
    next(error);
  }
};

const updateBookDb = async (
  id: string,
  updatedData: any,
  next: NextFunction
) => {
  try {
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
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Requested Id Not Found!");
    }
  }
};

const deleteBookDb = async (id: string, next: NextFunction) => {
  try {
    await prisma.book.findUniqueOrThrow({
      where: {
        bookId: id,
      },
    });

    const deletedData = await prisma.book.delete({
      where: {
        bookId: id,
      },
    });

    return deletedData;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Requested Id Not Found!");
    }
  }
};
export const bookService = {
  createBookDb,
  getBookDb,
  getSingleBookDb,
  updateBookDb,
  deleteBookDb,
};

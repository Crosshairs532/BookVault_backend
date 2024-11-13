import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";
import { NextFunction } from "express";
import AppError from "../../utils/AppError";
import httpStatus from "http-status";

const createBookDb = async (bookDetail: any, next: NextFunction) => {
  const book: Prisma.BookCreateInput = await prisma.book.create({
    data: bookDetail,
  });

  return book;
};
const getBookDb = async (next: NextFunction) => {
  const book: Prisma.BookCreateInput[] = await prisma.book.findMany({});

  return book;
};
const getSingleBookDb = async (id: string, next: NextFunction) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });

  if (!book) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "No Such Book exist with this ID"
    );
  }

  return book;
};

const updateBookDb = async (
  id: string,
  updatedData: any,
  next: NextFunction
) => {
  const isExist = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });

  if (!isExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "No Such Book exist with this ID"
    );
  }

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

const deleteBookDb = async (id: string, next: NextFunction) => {
  const isBook = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });

  if (!isBook) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "No Such Book exist with this ID"
    );
  }

  const deletedData = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });

  return deletedData;
};
export const bookService = {
  createBookDb,
  getBookDb,
  getSingleBookDb,
  updateBookDb,
  deleteBookDb,
};

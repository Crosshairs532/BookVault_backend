import { prisma } from "../../config/prisma";
import AppError from "../../utils/AppError";
import httpStatus from "http-status";
const borrowBook = async (borrowBookData: any) => {
  const bookExist = await prisma.book.findUnique({
    where: {
      bookId: borrowBookData.bookId,
    },
  });

  if (!bookExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid Book ID");
  }

  if (bookExist.availableCopies === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "No Available Copies!");
  }
  const memberExist = await prisma.member.findUnique({
    where: {
      memberId: borrowBookData.memberId,
    },
  });

  if (!memberExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "No Member Matches this ID!");
  }
  const borrowData = await prisma.borrowRecord.create({
    data: borrowBookData,
  });
  return borrowData;
};

const overdueBook = async () => {
  const overdue = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
    },
  });
  const overDueBooks = overdue.filter((book: any) => {
    const overdueday: number =
      Math.floor(
        (new Date(book.returnDate).getTime() -
          new Date(book.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14;
    if (overdueday > 0) {
      return (book["overdueday"] = overdueday);
    }
  });

  const books = overDueBooks.map((book: any) => ({
    borrowId: book.borrowId,
    bookTittle: book.book.title,
    borrowerName: book.member.name,
    overdueDays: book.overdueday,
  }));

  return books;
};
export const borrowService = {
  borrowBook,
  overdueBook,
};
/*


*/

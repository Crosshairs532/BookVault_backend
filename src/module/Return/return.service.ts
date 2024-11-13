import { prisma } from "../../config/prisma";
import AppError from "../../utils/AppError";

const returnBook = async (borrowId: { borrowId: string }) => {
  const isBorrowRecordExists = await prisma.borrowRecord.findUnique({
    where: {
      borrowId: borrowId.borrowId,
    },
  });

  if (!isBorrowRecordExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid Book ID");
  }
  const returnedBook = await prisma.borrowRecord.update({
    where: {
      borrowId: borrowId.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });

  console.log(returnedBook);
};

export const returnService = {
  returnBook,
};

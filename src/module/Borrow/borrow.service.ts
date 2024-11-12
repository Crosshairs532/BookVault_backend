import { prisma } from "../../config/prisma";

const borrowBook = async (bookId: string, memberId: string) => {
  const bookExist = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: bookId,
    },
  });
  const memberExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  const borrowData = await prisma.borrowRecord.create({
    data: {
      bookId,
      memberId,
    },
  });
  return borrowData;
};

export const borrowService = {
  borrowBook,
};

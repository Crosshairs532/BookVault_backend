import { prisma } from "../../config/prisma";

const returnBook = async (borrowId: { borrowId: string }) => {
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: borrowId.borrowId,
    },
  });

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

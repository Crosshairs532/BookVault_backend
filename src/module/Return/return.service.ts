import { prisma } from "../../config/prisma";

const returnBook = async (borrowId: { borrowId: string }) => {
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: borrowId.borrowId,
    },
  });

  const res = await prisma.borrowRecord.delete({
    where: {
      borrowId: borrowId.borrowId,
    },
  });

  console.log(res);
};

export const returnService = {
  returnBook,
};

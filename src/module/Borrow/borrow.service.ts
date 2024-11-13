import { prisma } from "../../config/prisma";
import moment from "moment";
const borrowBook = async (borrowBookData: any) => {
  const bookExist = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: borrowBookData.bookId,
    },
  });
  const memberExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: borrowBookData.memberId,
    },
  });
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
  const overDueBooks = overdue.map((book: any) => {
    let overdueBook;
    const overdueday = Math.abs(
      14 -
        Math.floor(
          new Date(book.returnDate - book.borrowDate) / (1000 * 60 * 60 * 24)
        )
    );
    if (overdueday > 0) {
      overdueBook = {
        borrowId: book.borrowId,
        bookTittle: book.book.title,
        borrowerName: book.member.name,
        overdueDays: overdueday,
      };
    }
    return overdueBook;
  });

  return overDueBooks;
};
export const borrowService = {
  borrowBook,
  overdueBook,
};
/*


*/

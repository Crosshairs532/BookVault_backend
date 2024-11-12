import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";

const createMemberDb = async (memberDetail: any) => {
  const member: Prisma.MemberCreateInput = await prisma.member.create({
    data: memberDetail,
  });

  return member;
};
const getMembersDb = async () => {
  const members: Prisma.MemberCreateInput[] = await prisma.member.findMany({});
  return members;
};
const getSingleMemberDb = async (id: string) => {
  const member: Prisma.MemberCreateInput =
    await prisma.member.findUniqueOrThrow({
      where: {
        memberId: id,
      },
    });

  return member;
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
export const memberService = {
  createMemberDb,
  getMembersDb,
  getSingleMemberDb,
  updateBookDb,
  deleteBookDb,
};

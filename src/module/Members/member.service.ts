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

const updateMemberDb = async (id: string, updatedData: any) => {
  const isExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const updated = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: {
      name: updatedData.name,
      email: updatedData.email,
      phone: updatedData.phone,
    },
  });

  return updated;
};

const deleteMemberDb = async (id: string) => {
  const isExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const deletedData = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });

  console.log(deletedData);
};
export const memberService = {
  createMemberDb,
  getMembersDb,
  getSingleMemberDb,
  updateMemberDb,
  deleteMemberDb,
};

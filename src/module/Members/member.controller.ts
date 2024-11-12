import { Request, Response } from "express";
import CatchAsync from "../../utils/CatchAsync";

import { SendResponse } from "../../utils/sendResponse";
import { memberService } from "./member.service";

const createMember = CatchAsync(async (req: Request, res: Response) => {
  const memberDetail = req.body;

  const result = await memberService.createMemberDb(memberDetail);

  SendResponse(res, {
    success: true,
    status: 201,
    message: "Member created successfully",
    data: result,
  });
});
const getMembers = CatchAsync(async (req: Request, res: Response) => {
  const allMembers = await memberService.getMembersDb();

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: allMembers,
  });
});

const getSingleMemberBook = CatchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  const result = await memberService.getSingleMemberDb(memberId);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = CatchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const updateData = req.body;
  const result = await memberService.updateMemberDb(memberId, updateData);

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = CatchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  const result = await memberService.deleteMemberDb(memberId);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Member deleted successfully",
  });
});

export const memberController = {
  createMember,
  getMembers,
  getSingleMemberBook,
  updateMember,
  deleteMember,
};

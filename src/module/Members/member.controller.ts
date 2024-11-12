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

const updateBook = CatchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const updateData = req.body;
  const result = await memberService.updateBookDb(bookId, updateData);

  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = CatchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await memberService.deleteBookDb(bookId);
  SendResponse(res, {
    success: true,
    status: 200,
    message: "Book deleted successfully",
  });
});

export const memberController = {
  createMember,
  getMembers,
  getSingleMemberBook,
};

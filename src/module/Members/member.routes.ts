import { Router } from "express";
import { memberController } from "./member.controller";

const route = Router();

route.post("/", memberController.createMember);
route.get("/", memberController.getMembers);
route.get("/:memberId", memberController.getSingleMemberBook);
// route.put("/:bookId", memberController.updateBook);
// route.delete("/:bookId", memberController.deleteBook);

export const memberRoutes = route;

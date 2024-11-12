import { Router } from "express";
import { memberController } from "./member.controller";

const route = Router();

route.post("/", memberController.createMember);
route.get("/", memberController.getMembers);
route.get("/:memberId", memberController.getSingleMemberBook);
route.put("/:memberId", memberController.updateMember);
route.delete("/:memberId", memberController.deleteMember);

export const memberRoutes = route;

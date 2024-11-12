import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

router.post("/", borrowController.borrowBook);
export const borrowRoutes = router;

import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

router.post("/", borrowController.borrowBook);
router.get("/overdue", borrowController.overdueBook);
export const borrowRoutes = router;

import { Router } from "express";
import { returnController } from "./return.controller";

const router = Router();

router.post("", returnController.returnBook);

export const returnBookRoutes = router;

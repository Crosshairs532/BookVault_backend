"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = require("express");
const borrow_controller_1 = require("./borrow.controller");
const router = (0, express_1.Router)();
router.post("/", borrow_controller_1.borrowController.borrowBook);
router.get("/overdue", borrow_controller_1.borrowController.overdueBook);
exports.borrowRoutes = router;

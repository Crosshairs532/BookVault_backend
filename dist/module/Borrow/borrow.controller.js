"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const borrow_service_1 = require("./borrow.service");
const sendResponse_1 = require("../../utils/sendResponse");
const borrowBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowService.borrowBook(req.body);
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 200,
        message: "Book borrowed successfully",
        data: result,
    });
}));
const overdueBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowService.overdueBook();
    const message = result.length > 0 ? "Overdue borrow list fetched" : "No overdue book";
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 200,
        message: message,
        data: result,
    });
}));
exports.borrowController = {
    borrowBook,
    overdueBook,
};

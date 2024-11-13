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
exports.BooksController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const book_service_1 = require("./book.service");
const sendResponse_1 = require("../../utils/sendResponse");
const createBooks = (0, CatchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookDetail = req.body;
    const result = yield book_service_1.bookService.createBookDb(bookDetail, next);
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 201,
        message: "Book created successfully",
        data: result,
    });
}));
const getBooks = (0, CatchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allBook = yield book_service_1.bookService.getBookDb(next);
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully",
        data: allBook,
    });
}));
const getSingleBook = (0, CatchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.bookService.getSingleBookDb(bookId, next);
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully",
        data: result,
    });
}));
const updateBook = (0, CatchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const updateData = req.body;
    const result = yield book_service_1.bookService.updateBookDb(bookId, updateData, next);
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 200,
        message: "Book updated successfully",
        data: result,
    });
}));
const deleteBook = (0, CatchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.bookService.deleteBookDb(bookId, next);
    (0, sendResponse_1.SendResponse)(res, {
        success: true,
        status: 200,
        message: "Book deleted successfully",
    });
}));
exports.BooksController = {
    createBooks,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};

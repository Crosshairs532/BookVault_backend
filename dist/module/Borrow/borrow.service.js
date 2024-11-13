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
exports.borrowService = void 0;
const prisma_1 = require("../../config/prisma");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const borrowBook = (borrowBookData) => __awaiter(void 0, void 0, void 0, function* () {
    const bookExist = yield prisma_1.prisma.book.findUnique({
        where: {
            bookId: borrowBookData.bookId,
        },
    });
    if (!bookExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Invalid Book ID");
    }
    if (bookExist.availableCopies === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Available Copies!");
    }
    const memberExist = yield prisma_1.prisma.member.findUnique({
        where: {
            memberId: borrowBookData.memberId,
        },
    });
    if (!memberExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Member Matches this ID!");
    }
    const borrowData = yield prisma_1.prisma.borrowRecord.create({
        data: borrowBookData,
    });
    return borrowData;
});
const overdueBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdue = yield prisma_1.prisma.borrowRecord.findMany({
        include: {
            book: true,
            member: true,
        },
    });
    const overDueBooks = overdue.filter((book) => {
        const overdueday = Math.floor((new Date(book.returnDate).getTime() -
            new Date(book.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14;
        if (overdueday > 0) {
            return (book["overdueday"] = overdueday);
        }
    });
    const books = overDueBooks.map((book) => ({
        borrowId: book.borrowId,
        bookTittle: book.book.title,
        borrowerName: book.member.name,
        overdueDays: book.overdueday,
    }));
    return books;
});
exports.borrowService = {
    borrowBook,
    overdueBook,
};
/*


*/

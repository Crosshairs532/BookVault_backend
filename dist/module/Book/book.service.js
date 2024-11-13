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
exports.bookService = void 0;
const prisma_1 = require("../../config/prisma");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createBookDb = (bookDetail, next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.prisma.book.create({
        data: bookDetail,
    });
    return book;
});
const getBookDb = (next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.prisma.book.findMany({});
    return book;
});
const getSingleBookDb = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.prisma.book.findUnique({
        where: {
            bookId: id,
        },
    });
    if (!book) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Such Book exist with this ID");
    }
    return book;
});
const updateBookDb = (id, updatedData, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.book.findUnique({
        where: {
            bookId: id,
        },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Such Book exist with this ID");
    }
    const updated = yield prisma_1.prisma.book.update({
        where: {
            bookId: id,
        },
        data: {
            title: updatedData.title,
            genre: updatedData.genre,
            publishedYear: updatedData.publishedYear,
            totalCopies: updatedData.totalCopies,
            availableCopies: updatedData.availableCopies,
        },
    });
    return updated;
});
const deleteBookDb = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isBook = yield prisma_1.prisma.book.findUnique({
        where: {
            bookId: id,
        },
    });
    if (!isBook) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Such Book exist with this ID");
    }
    const deletedData = yield prisma_1.prisma.book.delete({
        where: {
            bookId: id,
        },
    });
    return deletedData;
});
exports.bookService = {
    createBookDb,
    getBookDb,
    getSingleBookDb,
    updateBookDb,
    deleteBookDb,
};

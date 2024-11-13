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
exports.memberService = void 0;
const prisma_1 = require("../../config/prisma");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createMemberDb = (memberDetail) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.create({
        data: memberDetail,
    });
    return member;
});
const getMembersDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield prisma_1.prisma.member.findMany({});
    return members;
});
const getSingleMemberDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.findUnique({
        where: {
            memberId: id,
        },
    });
    if (!member) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Member Matches this ID!");
    }
    return member;
});
const updateMemberDb = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.member.findUnique({
        where: {
            memberId: id,
        },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Member Matches this ID!");
    }
    const updated = yield prisma_1.prisma.member.update({
        where: {
            memberId: id,
        },
        data: {
            name: updatedData.name,
            email: updatedData.email,
            phone: updatedData.phone,
        },
    });
    return updated;
});
const deleteMemberDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id,
        },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "No Member Matches this ID!");
    }
    const deletedData = yield prisma_1.prisma.member.delete({
        where: {
            memberId: id,
        },
    });
    console.log(deletedData);
});
exports.memberService = {
    createMemberDb,
    getMembersDb,
    getSingleMemberDb,
    updateMemberDb,
    deleteMemberDb,
};

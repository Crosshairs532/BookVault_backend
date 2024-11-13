"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const globalError = (err, req, res, next) => {
    let status = http_status_1.default.INTERNAL_SERVER_ERROR || 500;
    let message = err.message || "Internal Server Error";
    let success = false;
    if (err instanceof AppError_1.default) {
        status = err.statusCode;
        message = err.message;
    }
    res.status(status).json({
        success: success,
        message: message,
        status: status,
    });
};
exports.default = globalError;

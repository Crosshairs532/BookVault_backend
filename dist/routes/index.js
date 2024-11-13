"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_routes_1 = require("../module/Book/book.routes");
const member_routes_1 = require("../module/Members/member.routes");
const borrow_routes_1 = require("../module/Borrow/borrow.routes");
const return_routes_1 = require("../module/Return/return.routes");
const router = (0, express_1.Router)();
const BookVaultRoute = [
    {
        path: "/books",
        route: book_routes_1.bookRoutes,
    },
    {
        path: "/members",
        route: member_routes_1.memberRoutes,
    },
    {
        path: "/borrow",
        route: borrow_routes_1.borrowRoutes,
    },
    {
        path: "/return",
        route: return_routes_1.returnBookRoutes,
    },
];
BookVaultRoute.forEach((route) => {
    router.use(route.path, route === null || route === void 0 ? void 0 : route.route);
});
exports.default = router;

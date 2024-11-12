import { Router } from "express";
import { bookRoutes } from "../module/Book/book.routes";
import { memberRoutes } from "../module/Members/member.routes";
import { borrowRoutes } from "../module/Borrow/borrow.routes";
import { returnBookRoutes } from "../module/Return/return.routes";

const router = Router();

const BookVaultRoute = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRoutes,
  },
  {
    path: "/return",
    route: returnBookRoutes,
  },
];

BookVaultRoute.forEach((route) => {
  router.use(route.path, route?.route);
});

export default router;

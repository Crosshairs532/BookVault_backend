import { Router } from "express";
import { bookRoutes } from "../module/Book/book.routes";
import { memberRoutes } from "../module/Members/member.routes";

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
];

BookVaultRoute.forEach((route) => {
  router.use(route.path, route?.route);
});

export default router;

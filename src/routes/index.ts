import { Router } from "express";
import { bookRoutes } from "../module/Book/book.routes";

const router = Router();

const BookVaultRoute = [
  {
    path: "/books",
    route: bookRoutes,
  },
];

BookVaultRoute.forEach((route) => {
  router.use(route.path, route?.route);
});

export default router;

import express from "express";
import cors from "cors";
import BookVaultRoute from "./routes";
import globalError from "./middlewares/globalError";
import notFound from "./middlewares/notFound";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Book vault server is running !");
});
app.use("/api", BookVaultRoute);

app.use(globalError);
app.use(notFound);
export default app;

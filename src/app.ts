import express from "express";
import cors from "cors";
import BookVaultRoute from "./routes";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Book vault server is running !");
});
app.use("/api", BookVaultRoute);
export default app;

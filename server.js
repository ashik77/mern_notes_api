import express from "express";
import path from "path";
import rootRouter from "./routes/root.router.js";

const app = express();
const PORT = process.env.PORT || 3500;

const __dirname = path.resolve(); //otherwise ref error as using module type

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

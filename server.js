import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import rootRouter from "./routes/root.router.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { corsOptions } from "./config/corsOptions.js";

const app = express();
const PORT = process.env.PORT || 3500;

const __dirname = path.resolve(); //otherwise ref error as using module type

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", rootRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

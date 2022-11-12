import express from "express";
import { getRoot } from "./controllers/root.controller.js";

const router = express.Router();

router.get("^/$|/index(.html)?", getRoot);

export default router;

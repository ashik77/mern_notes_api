import express from "express";
import { getRoot, notFound } from "../controllers/root.controller.js";

const router = express.Router();

router.get("^/$|/index(.html)?", getRoot);

router.all("*", notFound);
export default router;

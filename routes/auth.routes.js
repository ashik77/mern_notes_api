import express from "express";
import { loginLimiter } from "../middleware/loginLimiter.js";
import { login, logout, refresh } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/", loginLimiter, login);

router.get("/refresh", refresh);

router.post("/logout", logout);

export default router;

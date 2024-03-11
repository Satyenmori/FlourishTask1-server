import express from "express";
import { getUserData } from "../controller/User.js";
import authMiddaleware from "../middleware/auth-middleware.js";

export const userRouter = express.Router();

userRouter.get("/",authMiddaleware, getUserData);

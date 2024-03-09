import express from "express";
import { createUser } from "../controller/Auth.js";

export const authRouter = express.Router();

authRouter.post("/signup", createUser);

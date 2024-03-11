import express from "express";
import { checkUser, createUser } from "../controller/Auth.js";

export const authRouter = express.Router();

authRouter.post("/signup", createUser).post("/signin", checkUser);

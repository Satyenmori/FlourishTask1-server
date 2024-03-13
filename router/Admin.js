import express from "express";
import { isAdmin } from "../middleware/isAdmin.js";
import { AdminfetchAllroom, createRoom } from "../controller/Admin.js";
import authMiddaleware from "../middleware/auth-middleware.js";

export const adminRouter = express.Router();

adminRouter
  .get("/", authMiddaleware, isAdmin, AdminfetchAllroom)
  .post("/addroom", authMiddaleware, isAdmin, createRoom);

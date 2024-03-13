import express from "express";
import { fetchAllroom } from "../controller/Rooms.js";

export const roomRouter = express.Router();

roomRouter.get("/", fetchAllroom);

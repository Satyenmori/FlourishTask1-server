import express from "express";
import { createRoom, fetchAllroom } from "../controller/Rooms.js";

export const roomRouter = express.Router();

roomRouter.post("/addroom", createRoom).get("/", fetchAllroom);

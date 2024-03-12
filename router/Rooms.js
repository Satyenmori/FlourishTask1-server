import express from "express";
import { createRoom } from "../controller/Rooms.js";

export const roomRouter = express.Router();

roomRouter.post("/addroom", createRoom);

import express from "express";
import { fetchAllroom, fetchRoomsById } from "../controller/Rooms.js";

export const roomRouter = express.Router();

roomRouter.get("/", fetchAllroom).get("/:id", fetchRoomsById);

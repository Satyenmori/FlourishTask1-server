import express from "express";
import { bookingRoom } from "../controller/Booking.js";

export const bookingRouter = express.Router();

bookingRouter.post("/", bookingRoom);

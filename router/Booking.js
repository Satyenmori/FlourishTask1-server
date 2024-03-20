import express from "express";
import { bookingRoom, fetchBookingById } from "../controller/Booking.js";

export const bookingRouter = express.Router();

bookingRouter.post("/bookroom", bookingRoom).get("/:id", fetchBookingById);

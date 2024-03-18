import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  checkin: { type: Date, require: true },
  checkout: { type: Date, require: true },
  adult: { type: String, require: true },
  child:{ type: String, require: true },
  roomname: { type: String, require: true },
  request: { type: String, require: true },
});

const Booking=new mongoose.model("Booking",bookingSchema);

export default Booking;
import Booking from "../model/Booking.js";

export const bookingRoom = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const doc = await booking.save();
    res.status(200).json({
      msg: "Room Is Booking",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

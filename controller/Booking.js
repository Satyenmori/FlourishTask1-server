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
// get Booking all data
export const getBookingdata = async (req, res) => {
  try {
    const booking = await Booking.find({});
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

// booking data fetchById

export const fetchBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const bookroomById = await Booking.findById(id);
    res.status(200).json(bookroomById);
  } catch (error) {
    res.status(500).json(error);
  }
};

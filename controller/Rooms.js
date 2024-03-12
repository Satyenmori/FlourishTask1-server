import Room from "../model/Rooms.js";

export const createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    const doc = await room.save();
    res.status(200).json({ msg: "Room is Add" });
  } catch (error) {
    res.status(500).json("Room is Not Added", error);
  }
};

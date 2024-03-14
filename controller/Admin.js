import Room from "../model/Rooms.js";

export const AdminfetchAllroom = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createRoom = async (req, res) => {
  try {
    const images = req.file.filename;    
    const room = new Room({ ...req.body, images });
    room.save();
    res.status(200).json({ msg: "Room is Add successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Room is Not Added", message: error.message });
  }
};

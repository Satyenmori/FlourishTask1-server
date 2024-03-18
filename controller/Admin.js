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
    const images = req.files.map((file) => file.filename);
    console.log(images);
    const room = new Room({ ...req.body, images });
    await room.save();
    res.status(200).json({ msg: "Room is Add successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Room is Not Added", message: error.message });
  }
};

// delete Room

export const deleteRooms = async (req, res) => {
  try {
    const id = req.params.id;
    await Room.deleteOne({ _id: id });
    return res.status(200).json({ msg: "Room is delete Successfuly" });
  } catch (error) {
    res.status(200).json(error);
  }
};

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

// Update Room Details

export const updateRoom = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const images = req.files.map((file) => file.filename);
    const updates = { ...req.body };

    // check if images exist or not
    if (Array.isArray(req.body.images)) {
      updates.images = [...req.body.images, ...images]; 
    } else if (req.body.images) {
      updates.images = [req.body.images, ...images];
    } else {
      updates.images = images;
    }

    const room = await Room.findByIdAndUpdate(roomId, updates, { new: true });
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.status(200).json({ msg: "Room updated successfully", room });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Room could not be updated", message: error.message });
  }
};

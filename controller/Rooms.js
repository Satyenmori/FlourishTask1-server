import Room from "../model/Rooms.js";

// get all room api

export const fetchAllroom = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

// fetch Rooms by Id

export const fetchRoomsById = async (req, res) => {
  const { id } = req.params;
  try {
    const roomsById = await Room.findById(id);
    res.status(200).json(roomsById);
  } catch (error) {
    res.status(500).json(error);
  }
};

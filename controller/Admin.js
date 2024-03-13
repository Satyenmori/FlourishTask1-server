import Room from "../model/Rooms.js";

export const AdminfetchAllroom = async (req, res) => {
    try {
      const rooms = await Room.find({});
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json(error);
    }
  };
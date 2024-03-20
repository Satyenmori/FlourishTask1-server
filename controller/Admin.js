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

// Delete Image sepretly 

export const deleteImage = async (req, res) => {
  const { roomId, imageIndex } = req.params;

  try {
    // Fetch the room by ID
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Remove the image at the specified index
    room.images.splice(imageIndex, 1);

    // Save the updated room
    await room.save();

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Update Room Details

export const updateRoom = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    
    const roomm = await Room.findById(roomId);
    

    // check if new images are uploaded
    if (req.files.length > 0) {
      const newImages = req.files.map((file) => file.filename);
      const updatedImages = roomm.images ? [...roomm.images, ...newImages] : newImages;
      req.body.images = updatedImages;
    }

    const room = await Room.findByIdAndUpdate(roomId, req.body, { new: true });
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

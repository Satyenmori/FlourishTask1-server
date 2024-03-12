import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
    default: 0,
  },
  bed: { type: Number, require: true },
  bath: { type: Number, require: true },
  wifi: { type: String, require: true },
  images: { type: String, require: true },
});


const Room=new mongoose.model("Room",roomsSchema);

export default Room;
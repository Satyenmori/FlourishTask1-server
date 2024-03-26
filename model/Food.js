import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, require: true },
  desc: { type: String, require: true },
  category: { type: String, require: true },
  price: { type: Number, require: true },
  rating: { type: Number, require: true },
  img: { type: String, require: true },
});

const Food = new mongoose.model("Food", foodSchema);

export default Food;

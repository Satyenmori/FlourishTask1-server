import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  label: { type: String, require: true, unique: true },
  value: { type: String, require: true, unique: true },
});

const Category = new mongoose.model("Category", categorySchema);

export default Category;

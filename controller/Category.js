import Category from "../model/Category.js";

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const doc = await category.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

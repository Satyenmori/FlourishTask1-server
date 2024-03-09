import User from "../model/User.js";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();
    res.status(200).json({ msg: "Data Saved" });
  } catch (error) {
    res.status(500).json(error);
  }
};

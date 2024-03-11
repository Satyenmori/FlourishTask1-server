// get all user Data
export const getUserData = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json("UserData Not Get", error);
  }
};

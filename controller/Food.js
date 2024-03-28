import Food from "../model/Food.js";

export const foodAdd = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(200).json({
      msg: "Food Is Saved",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fectAllFood = async (req, res) => {
  try {
    const food = await Food.find({});
    res.status(200).json(food);
  } catch (error) {
    res.status(200).json(error);
  }
};

export const fetchFoodById=async(req,res)=>{
  const{id}=req.params
  try {
    const foodById=await Food.findById(id)
    res.status(200).json([foodById])
  } catch (error) {
    res.status(500).json(error)
    
  }
}
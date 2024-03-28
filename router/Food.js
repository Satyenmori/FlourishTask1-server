import express from "express";
import { fectAllFood, fetchFoodById, foodAdd } from "../controller/Food.js";

export const foodRouter = express.Router();

foodRouter
  .post("/addfood", foodAdd)
  .get("/getfood", fectAllFood)
  .get("/:id", fetchFoodById);

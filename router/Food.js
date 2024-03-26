import express from "express";
import { fectAllFood, foodAdd } from "../controller/Food.js";

export const foodRouter = express.Router();

foodRouter.post("/addfood", foodAdd).get("/getfood", fectAllFood);

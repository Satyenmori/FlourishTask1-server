import express from "express";
import {
  createCategory,
  fetchCategory,
  filterCategory,
} from "../controller/Category.js";

export const categoryRouter = express.Router();

categoryRouter
  .post("/add", createCategory)
  .get("/", fetchCategory)
  .get("/filter", filterCategory);

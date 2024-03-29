import express from "express";
import { isAdmin } from "../middleware/isAdmin.js";
import {
  AdminfetchAllroom,
  createRoom,
  deleteImage,
  deleteRooms,
  updateRoom,
} from "../controller/Admin.js";
import authMiddaleware from "../middleware/auth-middleware.js";
import multer from "multer";

export const adminRouter = express.Router();

// multer configuration

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// Router

adminRouter
  .get("/", authMiddaleware, isAdmin, AdminfetchAllroom)
  .post(
    "/addroom",
    authMiddaleware,
    isAdmin,
    upload.array("images"),
    createRoom
  )
  .delete("/roomdelete/:id", deleteRooms)
  .put("/editroom/:roomId", upload.array("images"), updateRoom)
  .delete("/deleteimage/:roomId/:imageIndex", deleteImage);

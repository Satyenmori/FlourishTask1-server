import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connDB } from "./utility/db.js";
import { authRouter } from "./router/Auth.js";
import { userRouter } from "./router/User.js";
import { roomRouter } from "./router/Rooms.js";
import { adminRouter } from "./router/Admin.js";

const app = express();
dotenv.config();

// const corsoption = {
//   origin: "http://localhost:3000",
//   method: "GET,POST,DELETE,HEAD,PATCH,PUT",
//   credentials: true,
// };
app.use(cors({ origin: true }));
app.use(express.json());

//Router
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/room", roomRouter);
app.use("/admin", adminRouter);

// DB And Port
connDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("http://localhost:5151");
  });
});

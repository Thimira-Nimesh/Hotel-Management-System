import express from "express";
import {
  getUser,
  postUser,
  deleteUser,
  updateUser,
} from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/", postUser);

userRouter.delete("/", deleteUser);

userRouter.put("/", updateUser);

export default userRouter;

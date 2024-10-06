import express from "express";
import { postUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", postUser);

export default userRouter;

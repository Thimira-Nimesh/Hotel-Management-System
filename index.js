// import bodyParser from "body-parser";
// import express from "express";

// const app = express();
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   console.log("This is Get Request");
//   res.json({
//     message: "Hi",
//   });
// });

// app.post("/", (req, res) => {
//   const name = req.body.name;
//   const message = "Hi " + name;

//   res.json({
//     message: message,
//   });

//   console.log("This is a post req");
// });

// app.post("/login", (req, res) => {
//   console.log("This is Login");

//   const username = req.body.username;
//   const password = req.body.password;

//   const message =
//     "Your Username is " + username + " and Your Password is " + password;

//   res.json({
//     message: message,
//   });
//   console.log(message);
// });

// app.listen(5000, (req, res) => {
//   console.log("Server is running on Port 5000");
// });

import bodyParser from "body-parser";
import express from "express";
import userRouter from "./Routes/userRouter.js";
import roomsRouter from "./Routes/roomsRouter.js";
import roomboyRouter from "./Routes/RoomboyRouter.js";
import galleryRouter from "./Routes/GalleryRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

const connectionString =
  "mongodb+srv://tester2:123@cluster0.x152r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.use("/api/users", userRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/roomboys", roomboyRouter);
app.use("/api/gallery", galleryRouter);

app.listen(5000, (req, res) => {
  console.log("Server is Running on port 5000");
});

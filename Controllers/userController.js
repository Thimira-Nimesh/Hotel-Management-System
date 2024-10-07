import User from "../Models/users.js";
import jwt from "jsonwebtoken";

export function getUser(req, res) {
  User.find()
    .then((usersList) => {
      res.json({
        list: usersList,
      });
    })
    .catch(() => {
      res.json({
        message: "User List Error",
      });
    });
}

export function postUser(req, res) {
  const user = req.body;
  console.log(user);

  const newUser = new User(user);
  newUser
    .save()
    .then(() => {
      res.json({
        message: "User Created Successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "User Creation Failed",
      });
    });
}

export function loginUser(req, res) {
  const credentials = req.body;
  console.log(credentials);
  User.findOne({
    email: credentials.email,
    password: credentials.password,
  }).then((user) => {
    if (user == null) {
      res.status(404).json({
        message: "User Not Found",
      });
    } else {
      const payload = {
        email: user.email,
        firstname: user.firstName,
        lastname: user.lastName,
        userType: user.userType,
      };

      const token = jwt.sign(payload, "secretkey", { expiresIn: "1h" });

      res.json({
        message: "User Found",
        user: user,
        token: token,
      });
    }
  });
}

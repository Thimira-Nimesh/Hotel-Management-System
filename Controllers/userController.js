import User from "../Models/users.js";

// export function getUser(req, res) {
//   User.find()
//     .then((usersList) => {
//       res.json({
//         list: usersList,
//       });
//     })
//     .catch(() => {
//       res.json({
//         message: "User List Error",
//       });
//     });
// }

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
}

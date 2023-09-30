const { Router } = require("express");
const data = require("./data");

const routerUsers = Router();

routerUsers.get("/", function (req, res, next) {
  res.status(200).json(data.users);
});

routerUsers.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const foundUser = data.findUserById(id);
  if (!foundUser) return res.status(404).json({ message: "user not found" });
  res.status(200).json(foundUser);
});

routerUsers.post("/", function (req, res, next) {
  console.log(req.body);
  const user = req.body;
  const savedUser = data.addUser(user);
  res.status(200).json(savedUser);
});

routerUsers.put("/", function (req, res, next) {
  const updatedUser = req.body;
  data.updateUser(updatedUser);
  res.status(200).json(updatedUser);
});

routerUsers.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  data.deleteUserById(id);
  res.status(200).json({ message: "usuario eliminado con exito" });
});

module.exports = routerUsers;

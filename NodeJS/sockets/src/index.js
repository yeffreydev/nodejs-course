const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();

//server static files
app.use("/", express.static(path.join(__dirname, "./../public/")));

const httpServer = createServer(app);

const io = new Server(httpServer, {});

io.on("connection", function (socket) {
  console.log("nuevo usuario conectado");
  console.log(socket.id);
  socket.on("message", function (data) {
    io.emit("message", data);
  });
});

httpServer.listen(3000, () => console.log("server running on http://localhost:3000"));

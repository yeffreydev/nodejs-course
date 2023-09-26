const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hola Mundo</h1>");
  res.end();
});

app.listen(3000, () => console.log("servidor en puerto 3000"));

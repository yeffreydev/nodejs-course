// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log(path.join(__dirname, "./"));

// import { sumar } from "./calculadora.js";

// console.log(sumar(4, 9));

//utlizar express
import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hola Mundo</h1>");
});

app.listen(3000, function () {
  console.log("servidor en http://localhost:3000");
});

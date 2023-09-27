const http = require("http");
const { procesador } = require("./servidor.js");
const servidor = http.createServer(procesador);

const PORT = 3000;

servidor.listen(PORT, () => console.log("servidor en http://localhost:3000"));

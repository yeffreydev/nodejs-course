const http = require("http");

const servidor = http.createServer((req, res) => {
  res.write("<h1>Hola Mundo</h1>");
  res.end();
});

servidor.listen(3000);

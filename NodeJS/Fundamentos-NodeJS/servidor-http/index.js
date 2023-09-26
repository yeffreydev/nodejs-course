import http from "http";

const servidor = http.createServer((req, res) => {
  res.write("<h1>Hola Mundo</h1>");
  res.end();
});

console.log("servidor en puerto 3000");
servidor.listen(3000);

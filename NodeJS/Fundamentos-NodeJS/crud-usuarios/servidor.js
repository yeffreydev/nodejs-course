const url = require("url");
const acceptMethods = ["GET", "POST", "PUT", "DELETE"];
const data = require("./data.js");
const rutas = {
  "/": {
    GET: function (req, res) {
      res.write("Hola Mundo");
      res.end();
    },
  },
  "/usuarios": {
    GET: function (req, res) {
      res.setHeader("content-type", "applicaion/json");
      res.write(JSON.stringify(data.usuarios));
      res.end();
    },
    POST: function (req, res) {
      let body = "";
      req.on("data", function (chunk) {
        body += Buffer.from(chunk);
      });

      req.on("end", function () {
        const dataParsed = JSON.parse(body);
        console.log(dataParsed);
        res.setHeader("content-type", "application/json");
        const usuario = data.agregar(dataParsed);
        res.write(JSON.stringify(usuario));
        res.end();
      });
    },
    PUT: function (req, res) {
      let body = "";
      req.on("data", function (chunk) {
        body += Buffer.from(chunk);
      });

      req.on("end", function () {
        const dataParsed = JSON.parse(body);
        console.log(dataParsed);
        res.setHeader("content-type", "application/json");
        const updated = data.actualizar(dataParsed);
        if (updated) {
          res.write(JSON.stringify({ message: "Actualizado con exito" }));
          res.end();
        } else {
          res.statusCode = 404;
          res.end();
        }
      });
    },
  },
  "/usuarios/:id": {
    GET: function (req, res) {
      const parsedUrl = url.parse(req.url);
      const pathname = parsedUrl.pathname;
      const parts = pathname.split("/");
      const id = parts[2];
      const usuario = data.findById(id);
      console.log(usuario);
      if (!usuario) {
        res.statusCode = 404;
        return res.end();
      }
      res.statusCode = 200;
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(usuario));
      res.end();
    },
    DELETE: function (req, res) {
      const parsedUrl = url.parse(req.url);
      const pathname = parsedUrl.pathname;
      const parts = pathname.split("/");
      const id = parts[2];
      data.eliminar(id);
      res.statusCode = 200;
      res.write("eliminando usuario con id: " + id);
      res.end();
    },
  },
};
const procesador = (req, res) => {
  const parsedUrl = url.parse(req.url);

  const metodo = req.method;

  const ruta = rutas[parsedUrl.pathname];

  if (ruta) {
    //ejecutar metodos de la ruta
    const accion = ruta[metodo];

    if (accion) {
      accion(req, res);
    } else {
      res.status(405);
      res.end();
    }
  } else {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const parts = pathname.split("/");
    const validarClave = Object.keys(rutas).includes("/" + parts[1]) && parts.length == 3;
    if (validarClave) {
      const rutaUsuario = "/" + parts[1] + "/:id";
      const ruta = rutas[rutaUsuario];
      if (ruta) {
        const accion = ruta[req.method];
        accion(req, res);
      } else {
        res.status(404);
        res.end();
      }
    }
  }
};

exports.procesador = procesador;

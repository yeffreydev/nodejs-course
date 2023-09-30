const express = require("express");
const routerUsers = require("./routes");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "./public/")));
app.use("/api/users", routerUsers);

const PORT = 3000;

app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`));

const express = require("express");
const res = require("express/lib/response");
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// Iniciando el servidor
app.listen(port, () =>
  console.log(`El servidor se encuentra en línea en el puerto ${port}`)
);

// Seteo de solicitudes post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Receptor de datos de forms
app.use(require("./emailer/emailer"));

// Seteo del motor de vistas
app.set("view engine", "ejs");

// Seteo de carpeta pública
app.use(express.static("public"));

// Renderizando vista principal
app.get("/", (req, res) => {
  res.render("index");
});

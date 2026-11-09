// Configurar express app.use le de un orden para cada peticion
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const Documentacion = require('./docs/openapi');
const tareasRouter = require("./routes/tareas.routes");
const { rutaNoEncontrada, manejarErrores } = require('./middlewares/manejarErrores');

const app = express();
//1.convertir el cuerpo json de la apeticion req.body
app.use(express.json());
// Documentación de la API
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(Documentacion));
app.get("/api/docs.json", (req, res) => res.json(Documentacion));
//2.Rutas
app.get("/api/salud", (req, res) => {
  res.json({ estado: "ok" });
});
app.use("/api/tareas", tareasRouter);

//3. Si no responde la ruta 404 Json
app.use(rutaNoEncontrada);
//4. Manejar errores
app.use(manejarErrores);

module.exports = app;
const express = require('express');
const tareasRoutes = require('./routes/tareas.routes');

const app = express();

app.use(express.json());

// Rutas de la API
app.get("/api/saludo", (req, res) => {
    res.status(200).json({ mensaje: "Hola, mundo!" });
});

app.use("/api/tareas", tareasRoutes);
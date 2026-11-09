// Capa de servicios para manejar la lógica de negocio 
// relacionada con las tareas

const Tareas = require("../models/tarea.model");
const HttpError = require("../utils/HttpError");

//base de datos local

async function listar() {
    return Tareas.find().sort({ createdAt: -1 });
}

async function obtener(id) {
    const tarea = await Tareas.findById(id);
    if (!tarea) {
        throw new HttpError(404, `No existe la tarea con id ${id}`);
    }
    return tarea;
}

async function crear(titulo) {
    return Tareas.create({ titulo });
}

async function actualizar(id, cambios) {
    const tarea = await Tareas.findByIdAndUpdate(id, cambios, {
        returnDocument: "after",
        runValidators: true,
    });
    if (!tarea) {
        throw new HttpError(404, `No existe la tarea con id ${id}`);
    }
    return tarea;
}

async function eliminar(id) {
    const tarea = await Tareas.findByIdAndDelete(id);
    if (!tarea) {
        throw new HttpError(404, `No existe la tarea con id ${id}`);
    }
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
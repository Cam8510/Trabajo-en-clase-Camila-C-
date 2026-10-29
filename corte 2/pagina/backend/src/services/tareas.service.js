// Capa de servicios para manejar la lógica de negocio de las tareas

const HttpError = require("../utils/HttpError");

//base de datos local

let tareas = [
    { id: 1, titulo: "Estudiar", completada: false },
    { id: 2, titulo: "Hacer cualquier cosa menos estudiar", completada: true },
    { id: 3, titulo: "Terminar proyecto", completada: true }
];

let siguienteId = 4;

function listar() {
    return tareas;
}

function obtener(id) {
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        throw new HttpError(404, `No se encontró la tarea con id ${id}`);
    }

    return tarea;
}

function crear(titulo) {
    const nueva = { id: siguienteId++, titulo, completada: false };
    tareas.push(nueva);

    return nueva;
}

function actualizar(id, cambios) {
    const tarea = obtener(id);

    Object.assign(tarea, cambios);

    return tarea;
}

function eliminar(id) {
    obtener(id);
    tareas = tareas.filter((t) => t.id !== id);
}

module.exports = { listar, obtener, crear, actualizar, eliminar};
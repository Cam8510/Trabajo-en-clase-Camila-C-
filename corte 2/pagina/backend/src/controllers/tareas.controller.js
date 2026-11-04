// capa controladores: Traductor HTTP lee requerimiento llama el servicio y devuelve respuesta HTTP

const servicio = require('../services/tareas.service');

function listar(req, res) {
    res.status(200).json(servicio.listar());
}

function obtener(req, res) {
    const id = Number(req.params.id);
    res.status(200).json(servicio.obtener(id));
}

function crear(req, res) {
    const nueva = servicio.crear(req.body.titulo);
    res.status(201).json(nueva);
}

function actualizar(req, res) {
    const id = Number(req.params.id);
    res.status(200).json(servicio.actualizar(id, req.body));
}

function eliminar(req, res) {
    servicio.eliminar(Number(req.params.id));
    res.status(204).end();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
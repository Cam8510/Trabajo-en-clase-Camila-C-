const HttpError = require('../utils/HttpError');

function validarCreacion(req, res, next) {
    const { titulo } = req.body ?? {};

    if (typeof titulo !== 'string' || titulo.trim().length < 3) {
        throw new HttpError(400, 'El título es obligatorio y debe tener al menos 3 caracteres');
    }
    req.body.titulo = titulo.trim();
    next();
}

function validarCambios(req, res, next) {
    const { titulo, completada } = req.body ?? {};
    const cambios = {};
    if (titulo !== undefined) {
        if (typeof titulo !== 'string' || titulo.trim().length < 3) {
            throw new HttpError(400, 'El título es obligatorio y debe tener al menos 3 caracteres');
        }
    }

    if (completada !== undefined) {
        if (typeof completada !== 'boolean') {
            throw new HttpError(400, 'El campo completada debe ser true o false');
        }
        cambios.completada = completada;
    }

    if (Object.keys(cambios).length === 0) {
        throw new HttpError(400, 'No se envia titulo o completada para crear la tarea');
    }
    req.body = cambios;
    next();
}

module.exports = {
    validarCreacion,
    validarCambios
};
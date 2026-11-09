const HttpError = require('../utils/HttpError');

function rutaNoEncontrada(req, res, next) {
    next(new HttpError(404, `La ruta ${req.method} ${req.url} no existe`));
}

function manejarErrores(err, req, res, next) {
    if (err instanceof HttpError) {
        res.status(err.status).json({ error: err.message });
    } if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({ error: 'JSON inválido' });
    }
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = {
    rutaNoEncontrada,
    manejarErrores
};

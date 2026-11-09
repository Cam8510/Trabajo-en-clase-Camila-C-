const {isValidObjectId}=require('mongoose');
const HttpError=require('../utils/HttpError');

function validarId(req, res, next) {
    if (!isValidObjectId(req.params.id)) {
        throw next(new HttpError(400, `El ID ${req.params.id} no es válido`));
    }
    next();
}

module.exports = validarId;
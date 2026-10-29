// Clase para manejar errores HTTP

class HttpError extends Error {
    constructor(status, message, errores) {
        super(message);
        this.status = status;
        this.errores = errores;
    }
}
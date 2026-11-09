//punto entrada que conecta a mongoose y enciende el servidor :b
require('dotenv').config({ quiet: true });
// encender servidor
const app = require('./app');
const { conectarBaseDeDatos } = require('./config/db');

const PUERTO = process.env.PUERTO || 3000;

async function iniciarServidor() {
    if (!process.env.MONGO_URI) {
        console.error("Error: MONGO_URI no está definido en el archivo .env");
        process.exit(1);
    }
    try {
        await conectarBaseDeDatos(process.env.MONGO_URI);
        app.listen(PUERTO, () => {
            console.log(`API tareas en http://localhost:${PUERTO}/api/tareas`);
            console.log(`Documentacion en http://localhost:${PUERTO}/api/docs`);
        });
    }

    catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1);
    }
}

iniciarServidor();
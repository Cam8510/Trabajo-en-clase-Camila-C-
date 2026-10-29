
import { app } from './app';
import { conectarBaseDeDatos, desconectarBaseDeDatos } from './config/database';
import { env } from './config/env';

async function iniciarServidor() {
  let conectado = false;

  try {
    await conectarBaseDeDatos(env.mongodbUri);
    conectado = true;
    console.log('[DB] Conectado a MongoDB.');
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : String(error);
    console.warn('[DB] MongoDB no está disponible:', mensaje);
    console.warn('[DB] El servidor arrancará sin base de datos.');
  }

  const servidor = app.listen(env.port, () => {
    console.log(`[API] Servidor escuchando en http://localhost:${env.port}/api`);
  });

  const cerrarServidor = async () => {
    servidor.close(async () => {
      if (conectado) {
        await desconectarBaseDeDatos();
      }
      process.exit(0);
    });
  };

  process.on('SIGINT', cerrarServidor);
  process.on('SIGTERM', cerrarServidor);
}

iniciarServidor();

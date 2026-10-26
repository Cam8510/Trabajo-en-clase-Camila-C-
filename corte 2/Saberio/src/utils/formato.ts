
import type { Monitor, Monitoria } from '../types/monitoria';

/**
 * Formatea el nombre de un monitor.
 */
export function formatearNombre(
  nombre: string,
  apellido: string
): string {
  return `${nombre.trim()} ${apellido.trim()}`.trim();
}

/**
 * Normaliza un texto para facilitar búsquedas de monitores
 * y materias sin distinguir mayúsculas ni tildes.
 */
export function normalizarTexto(texto: string): string {
  return texto
    .trim()
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Comprueba si un monitor coincide con una búsqueda.
 */
export function buscarMonitor(
  monitor: Monitor,
  busqueda: string
): boolean {
  const termino = normalizarTexto(busqueda);

  if (!termino) return true;

  return normalizarTexto(JSON.stringify(monitor)).includes(termino);
}

/**
 * Comprueba si una monitoría coincide con una búsqueda.
 */
export function buscarMonitoria(
  monitoria: Monitoria,
  busqueda: string
): boolean {
  const termino = normalizarTexto(busqueda);

  if (!termino) return true;

  return normalizarTexto(JSON.stringify(monitoria)).includes(termino);
}

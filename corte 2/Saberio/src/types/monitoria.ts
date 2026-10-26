
/**
 * Tipos del proyecto Saberio.
 * Se describe la estructura de los datos de monitores y monitorías.
 */

/** Materias o áreas en las que se ofrecen monitorías. */
export const CATEGORIAS = [
  'Matemáticas',
  'Cálculo',
  'Álgebra',
  'Estadística',
  'Programación',
  'Física',
  'Química',
  'Otras',
] as const;

/** Unión de las categorías permitidas. */
export type Categoria = (typeof CATEGORIAS)[number];

/** Información de un monitor académico. */
export interface Monitor {
  id: string;
  nombre: string;
  apellido: string;
  carrera: string;
  semestre: number;
  materias: Categoria[];
  descripcion: string;
  correo: string;
  disponibilidad: string[];
}

/** Información de una monitoría ofrecida. */
export interface Monitoria {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: Categoria;
  monitorId: string;
  modalidad: 'Presencial' | 'Virtual';
  horario: string[];
}

/** Datos de un monitor antes de asignarle un identificador. */
export type MonitorDatos = Omit<Monitor, 'id'>;

/** Datos de una monitoría antes de asignarle un identificador. */
export type MonitoriaDatos = Omit<Monitoria, 'id'>;

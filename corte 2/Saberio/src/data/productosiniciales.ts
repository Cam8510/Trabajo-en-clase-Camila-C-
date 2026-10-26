
import type { Monitoria } from '../types/monitoria';

export const monitoriasIniciales: Monitoria[] = [
  {
    id: '1',
    titulo: 'Monitoría de Cálculo Diferencial',
    descripcion:
      'Repaso de límites, derivadas y aplicaciones de la derivada.',
    categoria: 'Cálculo',
    monitorId: '1',
    modalidad: 'Presencial',
    horario: ['Lunes 10:00 a. m. - 12:00 p. m.'],
  },
  {
    id: '2',
    titulo: 'Monitoría de Programación',
    descripcion:
      'Apoyo en fundamentos de programación, algoritmos y resolución de ejercicios.',
    categoria: 'Programación',
    monitorId: '2',
    modalidad: 'Virtual',
    horario: ['Martes 2:00 p. m. - 4:00 p. m.'],
  },
  {
    id: '3',
    titulo: 'Monitoría de Estadística',
    descripcion:
      'Repaso de probabilidad, distribuciones y análisis de datos.',
    categoria: 'Estadística',
    monitorId: '3',
    modalidad: 'Presencial',
    horario: ['Miércoles 9:00 a. m. - 11:00 a. m.'],
  },
  {
    id: '4',
    titulo: 'Monitoría de Física',
    descripcion:
      'Resolución de ejercicios de mecánica y movimiento.',
    categoria: 'Física',
    monitorId: '1',
    modalidad: 'Virtual',
    horario: ['Jueves 3:00 p. m. - 5:00 p. m.'],
  },
  {
    id: '5',
    titulo: 'Monitoría de Álgebra',
    descripcion:
      'Acompañamiento en matrices, sistemas de ecuaciones y espacios vectoriales.',
    categoria: 'Álgebra',
    monitorId: '2',
    modalidad: 'Presencial',
    horario: ['Viernes 10:00 a. m. - 12:00 p. m.'],
  },
];

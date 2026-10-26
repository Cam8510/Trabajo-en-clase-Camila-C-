/**tipos del proyecto, se describe la forma de los datos */

/**const hace valores fijos (No se cambian) */
export const CATEGORIAS = ['Bebidas calientes', 'Bebidas frías', 'Panadería', 'Postres'] as const;

/**Unión: Unir los const */
export type Categoria = (typeof CATEGORIAS)[number];

/**Cuando se llega a esta cantidad de unidades (o menos) se considera "pocas unidades*/
export const Unidadesminimas = 5;

/** Un producto del menú. */
export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: Categoria; // solo acepta uno de los 4 valores de CATEGORIAS
  precio: number;
  unidades: number; // unidades disponibles hoy
}

export type ProductoDatos = Omit<Producto, 'id'>; //omitimos el id porque se genera automaticamente
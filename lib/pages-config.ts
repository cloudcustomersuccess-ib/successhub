/**
 * Configuración central de todas las páginas del sistema
 * Cada página tiene:
 * - id: identificador único
 * - title: título de la página
 * - path: ruta URL de la página
 * - description: descripción breve
 */

export interface PageConfig {
  id: string;
  title: string;
  path: string;
  description: string;
}

export const pagesConfig: PageConfig[] = [
  {
    id: "customer-dashboard",
    title: "Dashboard de Cliente",
    path: "/customer-dashboard",
    description: "Panel principal para visualización de métricas y datos del cliente",
  },
  // Añade aquí más páginas según vayas creando
];

/**
 * Obtiene la URL completa de una página
 * En producción, cambiar por la URL real del dominio
 */
export function getPageUrl(path: string, baseUrl?: string): string {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
  return `${base}${path}`;
}

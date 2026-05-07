/**
 * Mapeo automático: Concepto → Sección de EAC8-Conceptos.md
 * Conversión de CONCEPTO_A_SECCION.java a TypeScript
 */

export const CONCEPTO_A_SECCION: Record<string, string> = {
  'DAO Pattern': '4. Patrón DAO',
  'Transacciones': '7. Transacciones y Sesiones',
  'Anotaciones Hibernate': '3. Entidades - Modelo de Datos',
  'Relaciones JPA': '3.3 Relaciones',
  'HibernateUtil': '5. HibernateUtil y Configuración',
  'Validaciones': '6. Validaciones y Reglas de Negocio',
  'Ciclo de vida': '7. Transacciones y Sesiones',
  'Ventajas Hibernate': '1. Visión General',
  'Concurrencia': '8. Errores Comunes y Soluciones',
  'LazyInitializationException': '8. Errores Comunes y Soluciones',
  'Entidades': '3. Entidades - Modelo de Datos',
  'Operaciones CRUD': '4. Patrón DAO',
  'SessionFactory': '5. HibernateUtil y Configuración',
  'Persistencia': '1. Visión General',
  'PostgreSQL': '2. Arquitectura General',
  'Arquitectura': '2. Arquitectura General',
};

/**
 * Obtener la sección de EAC8-Conceptos.md para un concepto
 */
export function obtenerSeccion(concept: string): string | null {
  return CONCEPTO_A_SECCION[concept] || null;
}

/**
 * Sugerencias de estudio por concepto
 */
export const SUGERENCIAS_ESTUDIO: Record<string, string> = {
  'DAO Pattern': 'Revisa la sección 4 de EAC8-Conceptos.md. El patrón DAO encapsula el acceso a datos.',
  'Transacciones':
    'Estudia la sección 7. ACID es crítico en apuestas: Atomicity, Consistency, Isolation, Durability.',
  'Anotaciones Hibernate':
    'Ve a la sección 3. @Entity, @Table, @Column, @Id son fundamentales para mapear clases a tablas.',
  'Relaciones JPA':
    'La sección 3.3 explica @OneToMany y @ManyToOne. Un evento tiene muchas apuestas.',
  'HibernateUtil':
    'HibernateUtil es un Singleton (sección 5). Se crea una sola vez para inicializar SessionFactory.',
  'Validaciones': 'Sección 6. Valida en dos niveles: anotaciones en entidades + lógica en DAO.',
  'Ciclo de vida':
    'Sección 7. Estados: Transient → Persistent → Detached. Cambios solo se rastrean en sesión abierta.',
  'Ventajas Hibernate':
    'Sección 1. Portabilidad, seguridad (SQL injection), manejo automático de relaciones.',
  'Concurrencia':
    'Sección 8. Race conditions si dos usuarios modifican el mismo objeto. Usa transacciones.',
};

/**
 * Evaluación basada en porcentaje
 */
export function evaluarDesempeño(porcentaje: number): {
  evaluation: string;
  message: string;
} {
  if (porcentaje >= 90) {
    return {
      evaluation: 'EXCELENTE',
      message: '¡Excelente desempeño! Dominas los conceptos de EAC8.',
    };
  } else if (porcentaje >= 75) {
    return {
      evaluation: 'BIEN',
      message: 'Muy bien. Algunos conceptos necesitan refuerzo.',
    };
  } else if (porcentaje >= 60) {
    return {
      evaluation: 'REGULAR',
      message: 'Regular. Revisa los conceptos débiles antes de retomar.',
    };
  } else {
    return {
      evaluation: 'NECESITA_MEJORA',
      message: 'Necesita mejorar. Estudia EAC8-Conceptos.md y reinenta.',
    };
  }
}

/**
 * Identificar conceptos débiles basado en respuestas incorrectas
 */
export function identificarConceptosDebiles(
  respuestasIncorrectas: Array<{ concept: string }>,
  limite: number = 3
): string[] {
  const conteos: Record<string, number> = {};

  respuestasIncorrectas.forEach(({ concept }) => {
    conteos[concept] = (conteos[concept] || 0) + 1;
  });

  return Object.entries(conteos)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limite)
    .map(([concept]) => concept);
}

/**
 * GET /api/eac8/concepts/[section]
 * Obtener contenido de una sección de EAC8-Conceptos.md
 */

import { NextRequest, NextResponse } from 'next/server';

// Contenido simplificado de EAC8-Conceptos.md
const EAC8_CONTENT: Record<string, string> = {
  '1. Visión General': `
# 1. Visión General

EAC8 es un sistema de gestión de apuestas deportivas construido con:
- Java 21 para lógica de negocio
- Hibernate 6.4.4 para persistencia orientada a objetos
- PostgreSQL 16 para almacenamiento de datos
- Patrón DAO para separar acceso a datos de lógica

Objetivo: Aprender integración BD con Java orientado a objetos.
  `,
  '4. Patrón DAO': `
# 4. Patrón DAO

DAO = Data Access Object. Encapsula el acceso a datos.

Responsabilidades:
- Create: guardar nuevas entidades
- Read: buscar por ID, listar todas
- Update: actualizar entidades existentes
- Delete: eliminar entidades
  `,
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    const { section: sectionParam } = await params;
    const section = decodeURIComponent(sectionParam);

    const content = EAC8_CONTENT[section];

    if (!content) {
      // Buscar sección por coincidencia parcial
      const found = Object.entries(EAC8_CONTENT).find(
        ([key]) => key.toLowerCase().includes(section.toLowerCase())
      );

      if (!found) {
        return NextResponse.json(
          {
            success: false,
            error: `Sección "${section}" no encontrada`,
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          section: found[0],
          content: found[1],
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        section,
        content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en GET /api/eac8/concepts/[section]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener sección',
      },
      { status: 500 }
    );
  }
}

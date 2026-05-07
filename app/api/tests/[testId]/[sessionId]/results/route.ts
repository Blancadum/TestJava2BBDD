/**
 * GET /api/tests/[testId]/[sessionId]/results
 * Obtener resultados finales de una sesión completada
 */

import { NextRequest, NextResponse } from 'next/server';
import { TestService } from '@/lib/TestService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ testId: string; sessionId: string }> }
) {
  try {
    const { sessionId: sessionIdParam } = await params;
    const sessionId = sessionIdParam;

    // Obtener resultados
    const resultados = TestService.obtenerResultados(sessionId);

    if (!resultados) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resultados no encontrados. ¿Ya completaste el test?',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: resultados,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en GET /api/tests/[testId]/[sessionId]/results:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener resultados',
      },
      { status: 500 }
    );
  }
}

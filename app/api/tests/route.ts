/**
 * GET /api/tests
 * Listar todos los tests disponibles
 */

import { NextRequest, NextResponse } from 'next/server';
import { TestService } from '@/lib/TestService';

export async function GET(request: NextRequest) {
  try {
    const tests = TestService.obtenerTests();

    return NextResponse.json(
      {
        success: true,
        tests,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en GET /api/tests:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener tests',
      },
      { status: 500 }
    );
  }
}

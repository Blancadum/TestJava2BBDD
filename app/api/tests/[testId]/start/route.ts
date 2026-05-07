/**
 * POST /api/tests/[testId]/start
 * Iniciar un nuevo test
 */

import { NextRequest, NextResponse } from 'next/server';
import { TestService } from '@/lib/TestService';
import { DificultadEnum } from '@/lib/types';

export async function POST(
  request: NextRequest,
  { params }: { params: { testId: string } }
) {
  try {
    const testId = parseInt(params.testId, 10);
    const body = await request.json();

    const { userName, difficulty } = body;

    // Validar inputs
    if (!userName || !difficulty) {
      return NextResponse.json(
        {
          success: false,
          error: 'userName y difficulty son requeridos',
        },
        { status: 400 }
      );
    }

    if (!Object.values(DificultadEnum).includes(difficulty)) {
      return NextResponse.json(
        {
          success: false,
          error: 'difficulty debe ser BAJA, MEDIA o ALTA',
        },
        { status: 400 }
      );
    }

    // Iniciar test
    const response = TestService.iniciarTest(testId, userName, difficulty);

    return NextResponse.json(
      {
        success: true,
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en POST /api/tests/[testId]/start:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error al iniciar test',
      },
      { status: 500 }
    );
  }
}

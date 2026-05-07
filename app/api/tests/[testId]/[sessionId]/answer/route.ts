/**
 * POST /api/tests/[testId]/[sessionId]/answer
 * Responder una pregunta en una sesión activa
 */

import { NextRequest, NextResponse } from 'next/server';
import { TestService } from '@/lib/TestService';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ testId: string; sessionId: string }> }
) {
  try {
    const { testId: testIdParam, sessionId: sessionIdParam } = await params;
    const testId = parseInt(testIdParam, 10);
    const sessionId = sessionIdParam;
    const body = await request.json();

    const { questionId, answer } = body;

    // Validar inputs
    if (!questionId || !answer) {
      return NextResponse.json(
        {
          success: false,
          error: 'questionId y answer son requeridos',
        },
        { status: 400 }
      );
    }

    if (!['a', 's', 'd', 'f'].includes(answer)) {
      return NextResponse.json(
        {
          success: false,
          error: 'answer debe ser a, s, d o f',
        },
        { status: 400 }
      );
    }

    // Responder pregunta
    const response = TestService.responderPregunta(testId, sessionId, questionId, answer);

    if (!response) {
      return NextResponse.json(
        {
          success: false,
          error: 'Sesión o pregunta no encontrada',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en POST /api/tests/[testId]/[sessionId]/answer:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error al responder pregunta',
      },
      { status: 500 }
    );
  }
}

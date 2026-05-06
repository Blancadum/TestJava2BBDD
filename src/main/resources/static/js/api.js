const API_BASE = '/api';

// Obtener lista de temas
async function obtenerTemas() {
    try {
        const response = await fetch(`${API_BASE}/temas`);
        return await response.json();
    } catch (error) {
        console.error('Error al obtener temas:', error);
        return [];
    }
}

// Iniciar un test
async function iniciarTestAPI(temaId, nombreUsuario, nivelDificultad) {
    try {
        const response = await fetch(`${API_BASE}/tests/iniciar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                temaId: temaId,
                nombreUsuario: nombreUsuario,
                nivelDificultad: nivelDificultad
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error al iniciar test:', error);
        return null;
    }
}

// Obtener preguntas del test
async function obtenerPreguntasTest(testId) {
    try {
        const response = await fetch(`${API_BASE}/tests/${testId}/preguntas`);
        return await response.json();
    } catch (error) {
        console.error('Error al obtener preguntas:', error);
        return [];
    }
}

// Enviar respuesta
async function enviarRespuestaAPI(testId, preguntaId, respuesta) {
    try {
        const response = await fetch(`${API_BASE}/tests/${testId}/respuesta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                preguntaId: preguntaId,
                respuesta: respuesta
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error al enviar respuesta:', error);
        return null;
    }
}

// Obtener resultados
async function obtenerResultados(testId) {
    try {
        const response = await fetch(`${API_BASE}/tests/${testId}/resultados`);
        return await response.json();
    } catch (error) {
        console.error('Error al obtener resultados:', error);
        return null;
    }
}

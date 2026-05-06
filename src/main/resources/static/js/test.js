let testId = '';
let testState = {
    preguntas: [],
    preguntaActual: 0,
    respuestas: [],
    nombreUsuario: '',
    temaNombre: '',
    nivelDificultad: 0
};

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    const temaId = localStorage.getItem('temaSeleccionado');
    const temaNombre = localStorage.getItem('temaNombre');

    if (!nombreGuardado || !temaId) {
        window.location.href = 'index.html';
        return;
    }

    testState.nombreUsuario = nombreGuardado;
    testState.temaNombre = temaNombre;

    document.getElementById('tema-titulo').textContent = temaNombre;
    document.getElementById('usuario-info').textContent = `Usuario: ${nombreGuardado}`;
});

// Iniciar test con dificultad seleccionada
async function iniciarTest(dificultad) {
    const temaId = localStorage.getItem('temaSeleccionado');
    testState.nivelDificultad = dificultad;

    const resultado = await iniciarTestAPI(
        temaId,
        testState.nombreUsuario,
        dificultad
    );

    if (!resultado || !resultado.id) {
        alert('Error al iniciar el test');
        return;
    }

    testId = resultado.id;

    // Obtener preguntas
    const preguntas = await obtenerPreguntasTest(testId);
    if (preguntas && preguntas.length > 0) {
        testState.preguntas = preguntas;
        testState.preguntaActual = 0;

        document.getElementById('dificultad-section').style.display = 'none';
        document.getElementById('pregunta-section').style.display = 'block';

        mostrarPregunta();
    } else {
        alert('Error al cargar las preguntas');
    }
}

// Mostrar pregunta actual
function mostrarPregunta() {
    if (testState.preguntaActual >= testState.preguntas.length) {
        mostrarResultados();
        return;
    }

    const pregunta = testState.preguntas[testState.preguntaActual];

    // Actualizar barra de progreso
    const progreso = ((testState.preguntaActual + 1) / testState.preguntas.length) * 100;
    document.getElementById('progreso-texto').textContent =
        `Pregunta ${testState.preguntaActual + 1} de ${testState.preguntas.length}`;
    document.getElementById('progreso-barra').style.width = progreso + '%';

    // Mostrar pregunta
    document.getElementById('pregunta-texto').textContent = pregunta.texto;
    document.getElementById('opcion-a').textContent = pregunta.opciones[0];
    document.getElementById('opcion-b').textContent = pregunta.opciones[1];
    document.getElementById('opcion-c').textContent = pregunta.opciones[2];
    document.getElementById('opcion-d').textContent = pregunta.opciones[3];

    // Limpiar selección anterior
    document.querySelectorAll('input[name="respuesta"]').forEach(radio => {
        radio.checked = false;
    });

    // Ocultar feedback
    document.getElementById('pregunta-section').style.display = 'block';
    document.getElementById('feedback-section').style.display = 'none';
}

// Enviar respuesta
async function enviarRespuesta() {
    const respuesta = document.querySelector('input[name="respuesta"]:checked');
    if (!respuesta) {
        alert('Por favor, selecciona una respuesta');
        return;
    }

    const preguntaId = testState.preguntas[testState.preguntaActual].id;
    const resultado = await enviarRespuestaAPI(testId, preguntaId, respuesta.value);

    if (resultado) {
        mostrarFeedback(resultado);
    }
}

// Mostrar feedback de respuesta
function mostrarFeedback(resultado) {
    const isCorrect = resultado.esCorrecta;

    document.getElementById('pregunta-section').style.display = 'none';
    document.getElementById('feedback-section').style.display = 'block';

    if (isCorrect) {
        document.getElementById('feedback-resultado').textContent = '✅';
        document.getElementById('feedback-mensaje').textContent = 'Respuesta correcta';
        document.getElementById('feedback-mensaje').className = 'feedback-mensaje feedback-correcto';
    } else {
        document.getElementById('feedback-resultado').textContent = '❌';
        document.getElementById('feedback-mensaje').textContent = 'Respuesta incorrecta';
        document.getElementById('feedback-mensaje').className = 'feedback-mensaje feedback-incorrecto';
    }

    document.getElementById('feedback-explicacion').innerHTML = `
        <strong>💡 Explicación:</strong><br>
        ${resultado.explicacion || 'Sin explicación disponible'}
    `;

    // Guardar respuesta
    testState.respuestas.push({
        preguntaId: resultado.preguntaId,
        esCorrecta: isCorrect
    });
}

// Siguiente pregunta
function siguientePregunta() {
    testState.preguntaActual++;
    mostrarPregunta();
}

// Mostrar resultados
async function mostrarResultados() {
    const resultados = await obtenerResultados(testId);

    if (resultados) {
        // Redirigir a página de resultados
        localStorage.setItem('resultados', JSON.stringify(resultados));
        window.location.href = 'resultados.html';
    } else {
        alert('Error al obtener los resultados');
    }
}

// Volver al menú
function volverAlMenu() {
    window.location.href = 'index.html';
}

// Inicializar página de resultados
document.addEventListener('DOMContentLoaded', function() {
    const resultadosJSON = localStorage.getItem('resultados');
    if (!resultadosJSON) {
        window.location.href = 'index.html';
        return;
    }

    const resultados = JSON.parse(resultadosJSON);
    mostrarResultados(resultados);
    localStorage.removeItem('resultados');
});

// Mostrar resultados
function mostrarResultados(resultados) {
    const porcentaje = resultados.porcentaje;
    const puntuacion = resultados.puntuacion;
    const totalPreguntas = resultados.totalPreguntas;
    const conceptosDebiles = resultados.conceptosDebiles || [];
    const urlRecurso = resultados.urlRecurso;

    // Mostrar puntuación
    document.getElementById('score-percentage').textContent = porcentaje + '%';
    document.getElementById('score-info').innerHTML = `
        <strong>Puntuación: ${puntuacion}/${totalPreguntas}</strong>
    `;

    // Mostrar evaluación cualitativa
    let evaluacion = '';
    if (porcentaje >= 90) {
        evaluacion = '🏆 ¡EXCELENTE! Dominas este tema';
    } else if (porcentaje >= 75) {
        evaluacion = '👍 ¡BIEN! Buena comprensión';
    } else if (porcentaje >= 60) {
        evaluacion = '📚 ACEPTABLE. Refuerza lo pendiente';
    } else {
        evaluacion = '⚠️ Necesitas repasar más';
    }

    document.getElementById('evaluacion').innerHTML = evaluacion;
    document.getElementById('evaluacion').className = 'feedback-container';

    // Mostrar conceptos débiles
    if (conceptosDebiles.length > 0) {
        document.getElementById('conceptos-section').style.display = 'block';
        const conceptosList = document.getElementById('conceptos-list');
        conceptosList.innerHTML = conceptosDebiles.map(concepto =>
            `<li>${concepto}</li>`
        ).join('');
    }

    // Mostrar recurso si puntuación <= 70%
    if (porcentaje <= 70 && urlRecurso) {
        document.getElementById('recurso-section').style.display = 'block';
        document.getElementById('recurso-link').href = urlRecurso;
        document.getElementById('recurso-link').textContent = 'Ver recurso →';
    }

    // Mostrar opción de subir nivel si puntuación >= 80%
    if (porcentaje >= 80 && resultados.puedSubirNivel) {
        document.getElementById('subir-nivel-section').style.display = 'block';
    }
}

// Subir nivel
function subirNivel() {
    // Incrementar nivel en localStorage
    let nivelActual = parseInt(localStorage.getItem('nivelDificultad') || '2');
    if (nivelActual < 3) {
        nivelActual++;
        localStorage.setItem('nivelDificultad', nivelActual.toString());
    }
    window.location.href = 'test.html';
}

// Repetir nivel
function repetirNivel() {
    window.location.href = 'test.html';
}

// Volver al menú
function volverAlMenu() {
    localStorage.removeItem('nivelDificultad');
    window.location.href = 'index.html';
}

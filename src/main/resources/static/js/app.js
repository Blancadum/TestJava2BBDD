let nombreUsuario = '';
let temas = [];

// Obtener saludo según hora
function obtenerSaludo() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) {
        return "☀️ ¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        return "🌤️ ¡Buenas tardes!";
    } else {
        return "🌙 ¡Buenas noches!";
    }
}

// Inicializar página
async function inicializar() {
    // Mostrar saludo
    document.getElementById('saludo').innerHTML = `<h2>${obtenerSaludo()}</h2>`;

    // Recuperar nombre del localStorage si existe
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
        nombreUsuario = nombreGuardado;
        mostrarTemas();
    } else {
        mostrarFormularioNombre();
    }

    // Cargar temas
    temas = await obtenerTemas();
}

// Mostrar formulario de nombre
function mostrarFormularioNombre() {
    document.getElementById('nombre-section').style.display = 'block';
    document.getElementById('temas-section').style.display = 'none';
    document.getElementById('nombre-input').focus();
}

// Guardar nombre y mostrar temas
function guardarNombre() {
    const nombre = document.getElementById('nombre-input').value.trim();
    if (nombre === '') {
        alert('Por favor, introduce tu nombre');
        return;
    }
    nombreUsuario = nombre;
    localStorage.setItem('nombreUsuario', nombre);
    mostrarTemas();
}

// Mostrar temas disponibles
async function mostrarTemas() {
    document.getElementById('nombre-section').style.display = 'none';
    document.getElementById('temas-section').style.display = 'block';

    if (temas.length === 0) {
        temas = await obtenerTemas();
    }

    const temasHtml = temas.map(tema => `
        <div class="tema-card" onclick="seleccionarTema(${tema.id}, '${tema.nombre}')">
            <div style="font-size: 2em; margin-bottom: 10px;">${tema.icono || '📚'}</div>
            <h3>${tema.nombre}</h3>
            <p>${tema.descripcion || ''}</p>
        </div>
    `).join('');

    document.getElementById('temas-grid').innerHTML = temasHtml;
}

// Seleccionar tema y ir a test.html
function seleccionarTema(temaId, temaNombre) {
    localStorage.setItem('temaSeleccionado', temaId);
    localStorage.setItem('temaNombre', temaNombre);
    window.location.href = 'test.html';
}

// Permitir Enter en campo de nombre
document.addEventListener('DOMContentLoaded', function() {
    const nombreInput = document.getElementById('nombre-input');
    if (nombreInput) {
        nombreInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                guardarNombre();
            }
        });
    }
    inicializar();
});

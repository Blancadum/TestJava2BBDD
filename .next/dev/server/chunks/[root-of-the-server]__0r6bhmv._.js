module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/conceptMapping.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mapeo automático: Concepto → Sección de EAC8-Conceptos.md
 * Conversión de CONCEPTO_A_SECCION.java a TypeScript
 */ __turbopack_context__.s([
    "CONCEPTO_A_SECCION",
    ()=>CONCEPTO_A_SECCION,
    "SUGERENCIAS_ESTUDIO",
    ()=>SUGERENCIAS_ESTUDIO,
    "evaluarDesempeño",
    ()=>evaluarDesempeño,
    "identificarConceptosDebiles",
    ()=>identificarConceptosDebiles,
    "obtenerSeccion",
    ()=>obtenerSeccion
]);
const CONCEPTO_A_SECCION = {
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
    'Arquitectura': '2. Arquitectura General'
};
function obtenerSeccion(concept) {
    return CONCEPTO_A_SECCION[concept] || null;
}
const SUGERENCIAS_ESTUDIO = {
    'DAO Pattern': 'Revisa la sección 4 de EAC8-Conceptos.md. El patrón DAO encapsula el acceso a datos.',
    'Transacciones': 'Estudia la sección 7. ACID es crítico en apuestas: Atomicity, Consistency, Isolation, Durability.',
    'Anotaciones Hibernate': 'Ve a la sección 3. @Entity, @Table, @Column, @Id son fundamentales para mapear clases a tablas.',
    'Relaciones JPA': 'La sección 3.3 explica @OneToMany y @ManyToOne. Un evento tiene muchas apuestas.',
    'HibernateUtil': 'HibernateUtil es un Singleton (sección 5). Se crea una sola vez para inicializar SessionFactory.',
    'Validaciones': 'Sección 6. Valida en dos niveles: anotaciones en entidades + lógica en DAO.',
    'Ciclo de vida': 'Sección 7. Estados: Transient → Persistent → Detached. Cambios solo se rastrean en sesión abierta.',
    'Ventajas Hibernate': 'Sección 1. Portabilidad, seguridad (SQL injection), manejo automático de relaciones.',
    'Concurrencia': 'Sección 8. Race conditions si dos usuarios modifican el mismo objeto. Usa transacciones.'
};
function evaluarDesempeño(porcentaje) {
    if (porcentaje >= 90) {
        return {
            evaluation: 'EXCELENTE',
            message: '¡Excelente desempeño! Dominas los conceptos de EAC8.'
        };
    } else if (porcentaje >= 75) {
        return {
            evaluation: 'BIEN',
            message: 'Muy bien. Algunos conceptos necesitan refuerzo.'
        };
    } else if (porcentaje >= 60) {
        return {
            evaluation: 'REGULAR',
            message: 'Regular. Revisa los conceptos débiles antes de retomar.'
        };
    } else {
        return {
            evaluation: 'NECESITA_MEJORA',
            message: 'Necesita mejorar. Estudia EAC8-Conceptos.md y reinenta.'
        };
    }
}
function identificarConceptosDebiles(respuestasIncorrectas, limite = 3) {
    const conteos = {};
    respuestasIncorrectas.forEach(({ concept })=>{
        conteos[concept] = (conteos[concept] || 0) + 1;
    });
    return Object.entries(conteos).sort(([, a], [, b])=>b - a).slice(0, limite).map(([concept])=>concept);
}
}),
"[project]/lib/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interfaces y tipos para TestJava2BBDD API
 * Conversión de clases Java a TypeScript
 */ // Enumeraciones
__turbopack_context__.s([
    "DificultadEnum",
    ()=>DificultadEnum
]);
var DificultadEnum = /*#__PURE__*/ function(DificultadEnum) {
    DificultadEnum["BAJA"] = "BAJA";
    DificultadEnum["MEDIA"] = "MEDIA";
    DificultadEnum["ALTA"] = "ALTA";
    return DificultadEnum;
}({});
}),
"[project]/lib/BetsEAC8Service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BetsEAC8Service",
    ()=>BetsEAC8Service
]);
/**
 * BetsEAC8Service.ts
 * Conversión de BetsEAC8.java a TypeScript
 * 80 preguntas sobre EAC8 (Entendiendo la Actividad de Aprendizaje)
 * Distribución: 27 BAJA, 27 MEDIA, 26 ALTA
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-route] (ecmascript)");
;
class BetsEAC8Service {
    /**
   * Obtener todas las 80 preguntas
   */ static crearTodasLasPreguntas() {
        const preguntas = [];
        let id = 1;
        // ===== NIVEL 1: BAJA (27 PREGUNTAS) =====
        preguntas.push({
            questionId: id++,
            text: '¿Cuál es el propósito principal de la clase EventDAO en EAC8?',
            options: {
                a: 'Gestionar la conexión a PostgreSQL',
                s: 'Encapsular las operaciones CRUD sobre eventos',
                d: 'Validar las reglas de negocio',
                f: 'Mostrar interfaz gráfica'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'El patrón DAO (Data Access Object) encapsula el acceso a datos. EventDAO debe implementar: crear eventos, buscar por ID, listar todos, actualizar, eliminar.',
            concept: 'DAO Pattern',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué anotación Hibernate señala que una clase es una entidad persistible?',
            options: {
                a: '@Table',
                s: '@Column',
                d: '@Entity',
                f: '@Id'
            },
            correctAnswer: 'd',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: '@Entity marca una clase como entidad mapeada a una tabla. @Table especifica el nombre de la tabla.',
            concept: 'Anotaciones Hibernate',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Cuál es el rol de HibernateUtil en EAC8?',
            options: {
                a: 'Validar entradas del usuario',
                s: 'Crear y proporcionar la SessionFactory para acceder a BD',
                d: 'Mapear tablas de BD a clases Java',
                f: 'Ejecutar queries SQL directamente'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'HibernateUtil es un Singleton que inicializa SessionFactory una sola vez. Proporciona sesiones para acceso a BD.',
            concept: 'HibernateUtil',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué es el patrón Singleton y dónde se usa en EAC8?',
            options: {
                a: 'Un patrón que permite múltiples instancias de una clase',
                s: 'Un patrón que asegura una sola instancia de una clase (HibernateUtil)',
                d: 'Un patrón para validaciones de datos',
                f: 'Un patrón para caché de memoria'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'SessionFactory es costosa de crear. Singleton asegura una sola instancia en toda la aplicación.',
            concept: 'Arquitectura',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué representa la clase Event en EAC8?',
            options: {
                a: 'Un usuario que hace apuestas',
                s: 'Un evento deportivo (partido, carrera, etc.)',
                d: 'Una transacción en la base de datos',
                f: 'Un registro de error del sistema'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Event representa un evento deportivo sobre el cual se realizan apuestas.',
            concept: 'Entidades',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué representa la clase Bet en EAC8?',
            options: {
                a: 'Una conexión a la base de datos',
                s: 'Una apuesta individual sobre un evento',
                d: 'Un formulario de entrada de datos',
                f: 'Un almacenamiento en caché'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Bet representa una apuesta individual realizada por un usuario sobre un evento.',
            concept: 'Entidades',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Cuál es la relación entre Event y Bet?',
            options: {
                a: 'Bet contiene muchos Events',
                s: 'Event contiene muchos Bets',
                d: 'Son independientes sin relación',
                f: 'Es una relación muchos a muchos'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Un evento puede tener múltiples apuestas. Relación @OneToMany en Event, @ManyToOne en Bet.',
            concept: 'Relaciones JPA',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué son las operaciones CRUD?',
            options: {
                a: 'Crear, Revisar, Usar, Descargar',
                s: 'Crear, Leer, Actualizar, Eliminar',
                d: 'Conectar, Replicar, Usar, Distribuir',
                f: 'Compilar, Recorrer, Usar, Depurar'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'CRUD = Create, Read, Update, Delete. Operaciones básicas sobre datos.',
            concept: 'Operaciones CRUD',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué es PostgreSQL en el contexto de EAC8?',
            options: {
                a: 'Un lenguaje de programación',
                s: 'Una base de datos relacional donde se almacenan eventos y apuestas',
                d: 'Un framework de web',
                f: 'Una herramienta de compilación'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'PostgreSQL es la base de datos donde se persisten todas las entidades (Event, Bet).',
            concept: 'PostgreSQL',
            difficulty: 1
        }, {
            questionId: id++,
            text: '¿Qué es una sesión en Hibernate?',
            options: {
                a: 'Una conexión a internet del usuario',
                s: 'Una conexión a la base de datos que gestiona objetos persistidos',
                d: 'Un archivo temporal de almacenamiento',
                f: 'Un registro de actividad del sistema'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Una sesión Hibernate maneja la comunicación con BD y el tracking de cambios en objetos.',
            concept: 'Ciclo de vida',
            difficulty: 1
        });
        // ===== NIVEL 2: MEDIA (27 PREGUNTAS) =====
        preguntas.push({
            questionId: id++,
            text: '¿Cuál es la diferencia entre FetchType.LAZY y FetchType.EAGER?',
            options: {
                a: 'LAZY carga datos inmediatamente, EAGER espera',
                s: 'LAZY espera a que se acceda a los datos, EAGER carga inmediatamente',
                d: 'Son sinónimos, no hay diferencia',
                f: 'LAZY es para actualizar, EAGER es para leer'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'LAZY: carga bajo demanda (mejor performance). EAGER: carga inmediatamente (más datos en memoria).',
            concept: 'Ciclo de vida',
            difficulty: 2
        }, {
            questionId: id++,
            text: '¿Qué es una transacción ACID?',
            options: {
                a: 'Un ácido químico usado en BD',
                s: 'Garantiza Atomicity, Consistency, Isolation, Durability en operaciones',
                d: 'Un tipo de índice de base de datos',
                f: 'Una validación de entrada del usuario'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'ACID es crítico en apuestas: Atomicity (todo o nada), Consistency (datos válidos), Isolation (sin interferencia), Durability (persiste).',
            concept: 'Transacciones',
            difficulty: 2
        }, {
            questionId: id++,
            text: '¿Qué sucede si llamamos a session.close() sin hacer commit()?',
            options: {
                a: 'Los cambios se guardan automáticamente',
                s: 'Los cambios se pierden (rollback automático)',
                d: 'La sesión se vuelve a abrir automáticamente',
                f: 'Se guarda el caché local pero no la BD'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Sin commit(), Hibernate descarta los cambios pendientes. Siempre haz commit() antes de cerrar.',
            concept: 'Transacciones',
            difficulty: 2
        }, {
            questionId: id++,
            text: '¿Qué es LazyInitializationException y cuándo ocurre?',
            options: {
                a: 'Cuando falla la compilación del código',
                s: 'Cuando accedes a datos lazy después de cerrar la sesión',
                d: 'Cuando la base de datos no responde',
                f: 'Cuando hay un error de sintaxis SQL'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Si @OneToMany es LAZY y cierras sesión, acceder a la colección lanza LazyInitializationException.',
            concept: 'LazyInitializationException',
            difficulty: 2
        }, {
            questionId: id++,
            text: '¿Cuál es la diferencia entre save() y merge() en Hibernate?',
            options: {
                a: 'No hay diferencia, son alias',
                s: 'save() es para nuevos objetos, merge() para objetos detached',
                d: 'save() es más rápido que merge()',
                f: 'merge() no funciona con relaciones'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'save() asigna ID a nuevos objetos. merge() actualiza objetos detached.',
            concept: 'Operaciones CRUD',
            difficulty: 2
        });
        // ===== NIVEL 3: ALTA (26 PREGUNTAS) =====
        preguntas.push({
            questionId: id++,
            text: '¿Por qué es mejor usar Hibernate en lugar de JDBC directo?',
            options: {
                a: 'Es más rápido siempre',
                s: 'Abstrae complejidad, evita SQL injection, maneja relaciones automáticamente',
                d: 'Requiere menos código',
                f: 'Todas las anteriores'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Hibernate proporciona: portabilidad (cambiar BD fácil), seguridad, manejo automático de relaciones, lazy loading.',
            concept: 'Ventajas Hibernate',
            difficulty: 3
        }, {
            questionId: id++,
            text: '¿Qué es una race condition en el contexto de apuestas?',
            options: {
                a: 'Un error de compilación',
                s: 'Dos usuarios modifican el mismo objeto simultáneamente causando inconsistencia',
                d: 'Un problema de velocidad de conexión',
                f: 'Un tipo de excepción de Java'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'Si dos usuarios actualizan el saldo simultáneamente sin sincronización, pueden ambos gastar más que tienen.',
            concept: 'Concurrencia',
            difficulty: 3
        }, {
            questionId: id++,
            text: '¿Cómo diseñarías una query HQL para obtener todos los eventos con más de 10 apuestas?',
            options: {
                a: 'SELECT e FROM Event e WHERE e.bets.size() > 10',
                s: 'SELECT e FROM Event e JOIN e.bets b GROUP BY e HAVING COUNT(b) > 10',
                d: 'SELECT * FROM events WHERE bets > 10',
                f: 'SELECT e FROM Event e WHERE COUNT(bets) > 10'
            },
            correctAnswer: 's',
            messageOK: '✅ Correcto.',
            messageError: '❌ Incorrecto.',
            explanation: 'HQL requiere JOIN para contar relaciones. GROUP BY + HAVING para filtrar grupos.',
            concept: 'Transacciones',
            difficulty: 3
        });
        // Llenar el resto hasta 80 preguntas (simplificado)
        // En producción, esto tendría todas las 80 preguntas
        return preguntas;
    }
    /**
   * Filtrar preguntas por dificultad
   */ static filtrarPorDificultad(todasLasPreguntas, dificultad) {
        const nivelDificultad = dificultad === 'BAJA' ? 1 : dificultad === 'MEDIA' ? 2 : 3;
        return todasLasPreguntas.filter((p)=>p.difficulty === nivelDificultad);
    }
    /**
   * Obtener 30 preguntas shuffled (10 de cada dificultad)
   */ static obtener30PreguntasShuffled() {
        const todas = this.crearTodasLasPreguntas();
        const baja = this.filtrarPorDificultad(todas, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DificultadEnum"].BAJA);
        const media = this.filtrarPorDificultad(todas, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DificultadEnum"].MEDIA);
        const alta = this.filtrarPorDificultad(todas, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DificultadEnum"].ALTA);
        // Shuffle y tomar 10 de cada
        const seleccionadas = [
            ...this.shuffleAndTake(baja, 10),
            ...this.shuffleAndTake(media, 10),
            ...this.shuffleAndTake(alta, 10)
        ];
        // Shuffle final para mezclar las 30
        return this.shuffleAndTake(seleccionadas, 30);
    }
    /**
   * Fisher-Yates shuffle
   */ static shuffleAndTake(array, take) {
        const copy = [
            ...array
        ];
        for(let i = copy.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [
                copy[j],
                copy[i]
            ];
        }
        return copy.slice(0, Math.min(take, copy.length));
    }
}
}),
"[project]/lib/TestService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TestService.ts
 * Conversión de TestAdaptativo.java a TypeScript
 * Gestiona sesiones activas y lógica de tests adaptativo
 */ __turbopack_context__.s([
    "TestService",
    ()=>TestService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conceptMapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conceptMapping.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$BetsEAC8Service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/BetsEAC8Service.ts [app-route] (ecmascript)");
;
;
// Almacenamiento en memoria de sesiones (en producción usar BD)
const sessionsStore = new Map();
const resultsStore = new Map();
class TestService {
    /**
   * Listar todos los tests disponibles
   */ static obtenerTests() {
        return [
            {
                id: 1,
                name: 'Conceptos SQL',
                category: 'BaseDatos',
                totalQuestions: 30
            },
            {
                id: 2,
                name: 'PostgreSQL Básico',
                category: 'BaseDatos',
                totalQuestions: 30
            },
            {
                id: 3,
                name: 'Consultas Avanzadas',
                category: 'BaseDatos',
                totalQuestions: 30
            },
            {
                id: 4,
                name: 'Transacciones',
                category: 'BaseDatos',
                totalQuestions: 30
            },
            {
                id: 5,
                name: 'Hibernate ORM',
                category: 'BaseDatos',
                totalQuestions: 30
            },
            {
                id: 6,
                name: 'Básicos de Java',
                category: 'Programación/Teoría',
                totalQuestions: 30
            },
            {
                id: 7,
                name: 'OOP',
                category: 'Programación/Teoría',
                totalQuestions: 30
            },
            {
                id: 8,
                name: 'Excepciones',
                category: 'Programación/Teoría',
                totalQuestions: 30
            },
            {
                id: 9,
                name: 'Colecciones',
                category: 'Programación/Teoría',
                totalQuestions: 30
            },
            {
                id: 10,
                name: 'Hibernate en Programación',
                category: 'Programación/Teoría',
                totalQuestions: 30
            },
            {
                id: 11,
                name: 'BetsEAC8 - Test Completo',
                category: 'Programación/EACs',
                totalQuestions: 30
            }
        ];
    }
    /**
   * Iniciar nuevo test (crea sesión)
   */ static iniciarTest(testId, userName, dificultad) {
        const sessionId = this.generarUUID();
        let preguntas;
        // Para test 11 (BetsEAC8), usar el servicio específico
        if (testId === 11) {
            preguntas = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$BetsEAC8Service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetsEAC8Service"].obtener30PreguntasShuffled();
        } else {
            // Para otros tests, usar preguntas de ejemplo (en producción, cada test tendría sus preguntas)
            preguntas = this.obtenerPreguntasDeTest(testId, dificultad);
        }
        const session = {
            sessionId,
            testId,
            userName,
            difficulty: dificultad,
            startTime: Date.now(),
            totalQuestions: preguntas.length,
            currentQuestion: 1,
            answers: [],
            questions: preguntas,
            completed: false
        };
        sessionsStore.set(sessionId, session);
        return {
            sessionId,
            testId,
            userName,
            difficulty: dificultad,
            totalQuestions: preguntas.length,
            currentQuestion: 1,
            questions: preguntas
        };
    }
    /**
   * Responder una pregunta
   */ static responderPregunta(testId, sessionId, questionId, answer) {
        const session = sessionsStore.get(sessionId);
        if (!session) return null;
        const pregunta = session.questions.find((p)=>p.questionId === questionId);
        if (!pregunta) return null;
        const isCorrect = pregunta.correctAnswer === answer;
        // Registrar respuesta
        const respuesta = {
            sessionId,
            questionId,
            userAnswer: answer,
            isCorrect,
            timestamp: Date.now()
        };
        session.answers.push(respuesta);
        session.currentQuestion = Math.min(session.currentQuestion + 1, session.totalQuestions + 1);
        // Verificar si completado
        if (session.currentQuestion > session.totalQuestions) {
            session.completed = true;
            this.generarResultados(sessionId);
        }
        return {
            correct: isCorrect,
            explanation: pregunta.explanation,
            concept: pregunta.concept,
            nextQuestion: session.currentQuestion,
            progress: {
                answered: session.answers.length,
                total: session.totalQuestions
            }
        };
    }
    /**
   * Obtener resultados de una sesión completada
   */ static obtenerResultados(sessionId) {
        return resultsStore.get(sessionId) || null;
    }
    /**
   * Generar resultados finales
   */ static generarResultados(sessionId) {
        const session = sessionsStore.get(sessionId);
        if (!session) return;
        const correctas = session.answers.filter((a)=>a.isCorrect).length;
        const total = session.totalQuestions;
        const porcentaje = Math.round(correctas / total * 100);
        // Identificar respuestas incorrectas con sus conceptos
        const respuestasIncorrectas = session.answers.filter((a)=>!a.isCorrect).map((a)=>{
            const pregunta = session.questions.find((p)=>p.questionId === a.questionId);
            return {
                concept: pregunta?.concept || 'Desconocido'
            };
        });
        const conceptosDebiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conceptMapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identificarConceptosDebiles"])(respuestasIncorrectas);
        const { evaluation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conceptMapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluarDesempeño"])(porcentaje);
        // Generar sugerencias
        const suggestions = {};
        conceptosDebiles.forEach((concept)=>{
            const sugerencia = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conceptMapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUGERENCIAS_ESTUDIO"][concept];
            if (sugerencia) {
                suggestions[concept] = sugerencia;
            }
        });
        const resultado = {
            sessionId,
            testId: session.testId,
            userName: session.userName,
            score: correctas,
            totalQuestions: total,
            percentage: porcentaje,
            evaluation,
            weakConcepts: conceptosDebiles,
            suggestions,
            completedAt: Date.now()
        };
        resultsStore.set(sessionId, resultado);
    }
    /**
   * Obtener sección de EAC8-Conceptos.md
   */ static obtenerSeccionEAC8(concept) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conceptMapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["obtenerSeccion"])(concept);
    }
    /**
   * Obtener preguntas para un test específico (excepto BetsEAC8)
   * En producción, esto vendría de una BD o archivo
   */ static obtenerPreguntasDeTest(testId, dificultad) {
        // Preguntas de ejemplo para tests no-EAC8
        // En producción, cargarías desde BD o archivos JSON
        const preguntasEjemplo = [
            {
                questionId: 1,
                text: '¿Cuál es la sintaxis correcta para SELECT en SQL?',
                options: {
                    a: 'SELECT * FROM tabla WHERE condición',
                    s: 'GET EVERYTHING FROM tabla WHEN condición',
                    d: 'FETCH * IN tabla FOR condición',
                    f: 'RETRIEVE FROM tabla IF condición'
                },
                correctAnswer: 'a',
                messageOK: '✅ Correcto.',
                messageError: '❌ Incorrecto.',
                explanation: 'SELECT es la palabra clave en SQL para recuperar datos.',
                concept: 'SQL Básico',
                difficulty: 1
            },
            {
                questionId: 2,
                text: '¿Qué es una clave primaria?',
                options: {
                    a: 'Una contraseña de la base de datos',
                    s: 'Un identificador único para cada fila en una tabla',
                    d: 'Una permiso de acceso a la BD',
                    f: 'Un backup de seguridad'
                },
                correctAnswer: 's',
                messageOK: '✅ Correcto.',
                messageError: '❌ Incorrecto.',
                explanation: 'La clave primaria (PRIMARY KEY) identifica unívocamente cada fila.',
                concept: 'Diseño de BD',
                difficulty: 1
            }
        ];
        // Repetir para llegar a 30 preguntas
        const repetidas = [];
        for(let i = 0; i < 30; i++){
            const pregunta = {
                ...preguntasEjemplo[i % preguntasEjemplo.length]
            };
            pregunta.questionId = i + 1;
            repetidas.push(pregunta);
        }
        return repetidas;
    }
    /**
   * Generar UUID v4
   */ static generarUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
}
}),
"[project]/app/api/tests/[testId]/[sessionId]/results/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
/**
 * GET /api/tests/[testId]/[sessionId]/results
 * Obtener resultados finales de una sesión completada
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TestService.ts [app-route] (ecmascript)");
;
;
async function GET(request, { params }) {
    try {
        const { sessionId: sessionIdParam } = await params;
        const sessionId = sessionIdParam;
        // Obtener resultados
        const resultados = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TestService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TestService"].obtenerResultados(sessionId);
        if (!resultados) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Resultados no encontrados. ¿Ya completaste el test?'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: resultados
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error en GET /api/tests/[testId]/[sessionId]/results:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Error al obtener resultados'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0r6bhmv._.js.map
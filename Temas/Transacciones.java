import java.util.ArrayList;
public class Transacciones extends TestAdaptativo {
    public void iniciar() {
        urlRecurso = "https://www.jscamp.dev/sql/transacciones-en-sql";
        super.iniciarTest("TEST: TRANSACCIONES");
    }
    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        for (Pregunta p : filtradas) { pintarPregunta(p); puntuarPregunta(p, obtenerRespuesta()); }
    }
    private void pintarPregunta(Pregunta p) {
        System.out.println("\n════════════════════════════════════════════════════");
        System.out.println("📝 PREGUNTA");
        System.out.println("════════════════════════════════════════════════════");
        System.out.println("\033[1m" + incluirNombre(p.getTexto()) + "\033[0m");
        System.out.println();
        System.out.println("  a) " + p.getOpcionA());
        System.out.println("  b) " + p.getOpcionB());
        System.out.println("  c) " + p.getOpcionC());
        System.out.println("  d) " + p.getOpcionD());
        System.out.println("════════════════════════════════════════════════════");
    }
    private String obtenerRespuesta() { String resp; do { System.out.print("\nTu respuesta (a/b/c/d): "); resp = scanner.nextLine().toLowerCase().trim(); } while (!resp.matches("[a-d]")); return resp; }
    private void puntuarPregunta(Pregunta p, String resp) {
        boolean ok = p.esCorrecta(resp);
        respuestas.add(new Respuesta(p, resp, ok));
        System.out.println("\n════════════════════════════════════════════════════");
        System.out.println(ok ? "✅ RESPUESTA CORRECTA" : "❌ RESPUESTA INCORRECTA");
        System.out.println("════════════════════════════════════════════════════");
        System.out.println(ok ? p.getMensajeOK() : p.getMensajeError());
        System.out.println();
        System.out.println("💡 EXPLICACIÓN:");
        System.out.println(p.getSugerencia());
        System.out.println("════════════════════════════════════════════════════");
        if (!ok) conceptosDebiles.add(p.getConcepto());
    }
    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. ¿Qué es una TRANSACCIÓN en BD?",
            "b) Conjunto de operaciones que se ejecutan JUNTAS (todo o nada)", "a) Una tabla de datos", "b) Conjunto de operaciones que se ejecutan JUNTAS (todo o nada)", "d) Un índice",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Transaction = atomic unit", "Transacción", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Cuál es el comando para INICIAR una transacción?",
            "b) CREATE TRANSACTION", "a) START TRANSACTION o BEGIN", "c) OPEN TRANSACTION", "a) START TRANSACTION o BEGIN",
            "d", "✅ Correcto.", "❌ Incorrecto.", "BEGIN inicia transacción", "BEGIN", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Qué es COMMIT?",
            "b) CONFIRMA y guarda cambios permanentemente", "c) Cancela transacción", "b) CONFIRMA y guarda cambios permanentemente", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "COMMIT makes changes permanent", "COMMIT", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué es ROLLBACK?",
            "b) DESHACE todos cambios de transacción", "c) Guarda en archivo", "b) DESHACE todos cambios de transacción", "d) Crea backup",
            "a", "✅ Correcto.", "❌ Incorrecto.", "ROLLBACK reverts changes", "ROLLBACK", 1
        ));

        p.add(new Pregunta(
            "P5. BEGIN; UPDATE usuarios SET edad=25 WHERE id=1; ROLLBACK; ¿qué sucede?",
            "b) USUARIO SIGUE CON EDAD ORIGINAL (cambio deshecho)", "c) Error", "b) USUARIO SIGUE CON EDAD ORIGINAL (cambio deshecho)", "d) Tabla borrada",
            "a", "✅ Correcto.", "❌ Incorrecto.", "ROLLBACK cancels all changes", "ROLLBACK", 1
        ));

        p.add(new Pregunta(
            "P6. BEGIN; INSERT INTO usuarios (...); COMMIT; ¿resultado?",
            "b) USUARIO INSERTADO PERMANENTEMENTE", "a) No se inserta nada", "c) Error de sintaxis", "d) Tabla borrada",
            "b", "✅ Correcto.", "❌ Incorrecto.", "COMMIT persists insert", "COMMIT", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué es un SAVEPOINT?",
            "b) Punto dentro transacción donde se puede ROLLBACK parcial", "a) Punto donde se guarda", "b) Punto dentro transacción donde se puede ROLLBACK parcial", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "SAVEPOINT partial rollback", "SAVEPOINT", 1
        ));

        p.add(new Pregunta(
            "P8. SAVEPOINT sp1; UPDATE usuarios...; ROLLBACK TO sp1; ¿qué pasa?",
            "b) DESHACE SOLO hasta SAVEPOINT sp1", "a) Deshace TODO", "c) Confirma cambios", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Partial rollback con savepoint", "SAVEPOINT", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué es AUTOCOMMIT mode?",
            "b) Modo que CONFIRMA cada operación automáticamente", "a) Modo que requiere COMMIT explícito", "c) Un tipo de error", "b) Modo que CONFIRMA cada operación automáticamente",
            "d", "✅ Correcto.", "❌ Incorrecto.", "AUTOCOMMIT mode by default", "AUTOCOMMIT", 1
        ));

        p.add(new Pregunta(
            "P10. BEGIN; SELECT * FROM usuarios; COMMIT; ¿SELECT modifica datos?",
            "b) NO, SELECT solo lee datos", "c) Error", "b) NO, SELECT solo lee datos", "d) Depende tabla",
            "a", "✅ Correcto.", "❌ Incorrecto.", "SELECT no cambia datos", "SELECT", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. ¿Qué significa 'ACID' en transacciones?",
            "b) Atomicity, Consistency, Isolation, Durability", "a) Un tipo de error", "b) Atomicity, Consistency, Isolation, Durability", "d) Una tabla",
            "c", "✅ Correcto.", "❌ Incorrecto.", "ACID properties of transactions", "ACID", 2
        ));

        p.add(new Pregunta(
            "P12. {NOMBRE}, ¿qué significa ATOMICITY?",
            "b) Transacción es INDIVISIBLE (todo o nada)", "c) Transacción es lenta", "b) Transacción es INDIVISIBLE (todo o nada)", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Atomicity propiedad ACID", "ACID", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Qué significa CONSISTENCY?",
            "b) BD va de estado VÁLIDO a VÁLIDO después transacción", "a) Transacción es rápida", "b) BD va de estado VÁLIDO a VÁLIDO después transacción", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Consistency en ACID", "ACID", 2
        ));

        p.add(new Pregunta(
            "P14. ¿Qué significa ISOLATION?",
            "b) Transacción NO interfiere con otras (concurrencia)", "a) Transacción ve datos de otra", "c) Transacción es lenta", "b) Transacción NO interfiere con otras (concurrencia)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Isolation level concurrency", "ACID", 2
        ));

        p.add(new Pregunta(
            "P15. ¿Qué significa DURABILITY?",
            "b) Una vez COMMITTED, los datos PERSISTEN aunque fallo", "c) Datos se borran", "b) Una vez COMMITTED, los datos PERSISTEN aunque fallo", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Durability permanencia datos", "ACID", 2
        ));

        p.add(new Pregunta(
            "P16. ¿Qué es un ISOLATION LEVEL?",
            "b) Grado de aislamiento entre TRANSACCIONES CONCURRENTES", "a) Velocidad de transacción", "c) Un tipo índice", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Isolation levels database", "Isolation", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Cuál es el nivel más RESTRICTIVO?",
            "d) SERIALIZABLE (más aislamiento)", "d) SERIALIZABLE (más aislamiento)", "c) REPEATABLE READ", "a) READ UNCOMMITTED",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Isolation levels spectrum", "Isolation", 2
        ));

        p.add(new Pregunta(
            "P18. ¿Qué es DIRTY READ?",
            "b) Leer datos NO confirmados de otra transacción", "a) Leer datos CONFIRMADOS de otra transacción", "c) Leer tabla vacía", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Dirty read problema", "Problemas", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué es DEADLOCK?",
            "b) DOS transacciones se esperan MUTUAMENTE (no avanzan)", "a) Transacción lenta", "c) Base de datos lenta", "b) DOS transacciones se esperan MUTUAMENTE (no avanzan)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Deadlock concurrency problem", "Problemas", 2
        ));

        p.add(new Pregunta(
            "P20. Transacción 1 espera lock de Transacción 2; Transacción 2 espera lock de Transacción 1:",
            "b) DEADLOCK - ambas se quedan esperando", "a) Ambas avanzan", "b) DEADLOCK - ambas se quedan esperando", "d) BD se reinicia",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Deadlock scenario", "Deadlock", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. READ UNCOMMITTED permite ¿qué problema?",
            "b) DIRTY READ - leer cambios no confirmados", "a) Nada", "c) Cambios lentos", "d) Bloqueos",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Isolation level problems", "Isolation", 3
        ));

        p.add(new Pregunta(
            "P22. READ COMMITTED previene ¿qué?",
            "b) Dirty read + non-repeatable read", "a) Dirty read SOLAMENTE", "c) Todos los problemas", "a) Dirty read SOLAMENTE",
            "d", "✅ Correcto.", "❌ Incorrecto.", "READ COMMITTED isolation", "Isolation", 3
        ));

        p.add(new Pregunta(
            "P23. {NOMBRE}, ¿qué es NON-REPEATABLE READ?",
            "b) Transacción no puede ejecutar", "a) Mismo SELECT retorna diferentes valores en misma transacción", "a) Mismo SELECT retorna diferentes valores en misma transacción", "d) Cambio lento",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Non-repeatable read problem", "Aislamiento", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es PHANTOM READ?",
            "b) Error de BD", "a) SELECT retorna filas NUEVAS entre lecturas", "c) Transacción fantasma", "a) SELECT retorna filas NUEVAS entre lecturas",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Phantom read problem", "Aislamiento", 3
        ));

        p.add(new Pregunta(
            "P25. REPEATABLE READ previene ¿qué problemas?",
            "b) Dirty + non-repeatable read", "a) Solo dirty read", "c) Dirty + non-repeatable + phantom reads", "d) Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.", "REPEATABLE READ isolation", "Isolation", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Qué es optimistic locking?",
            "b) NO bloquear; verificar cambios en COMMIT", "a) Bloquear datos antes leerlos", "c) Bloquear para siempre", "b) NO bloquear; verificar cambios en COMMIT",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Optimistic locking strategy", "Locking", 3
        ));

        p.add(new Pregunta(
            "P27. ¿Qué es pesimistic locking?",
            "b) BLOQUEAR datos ANTES de modificar", "a) Verificar al commit", "b) BLOQUEAR datos ANTES de modificar", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Pessimistic locking strategy", "Locking", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Qué es MVCC (Multi-Version Concurrency Control)?",
            "b) Cada transacción ve VERSIÓN CONSISTENTE de datos", "c) Un índice", "b) Cada transacción ve VERSIÓN CONSISTENTE de datos", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "MVCC PostgreSQL", "Concurrency", 3
        ));

        p.add(new Pregunta(
            "P29. ¿Cómo manejar DEADLOCK programáticamente?",
            "b) DETECTAR e intentar REINTENTAR transacción", "a) No se puede", "c) Ignorar", "d) Error BD",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Deadlock handling", "Manejo", 3
        ));

        p.add(new Pregunta(
            "P30. BEGIN; INSERT usuarios; BEGIN; UPDATE usuarios;COMMIT;COMMIT; ¿es válido?",
            "b) NO - BEGIN anidado no permitido (depende BD)", "c) Error", "b) NO - BEGIN anidado no permitido (depende BD)", "d) Crea tabla",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Nested transactions en BD", "Transacciones", 3
        ));

        return p;
    }
    public static void main(String[] args) { new Transacciones().iniciar(); }
}

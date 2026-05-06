import java.util.ArrayList;
public class Transacciones extends TestAdaptativo {
    public void iniciar() { super.iniciarTest("TEST: TRANSACCIONES"); }
    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        for (Pregunta p : filtradas) { pintarPregunta(p); puntuarPregunta(p, obtenerRespuesta()); }
    }
    private void pintarPregunta(Pregunta p) { System.out.println("\n" + incluirNombre(p.getTexto())); System.out.println(p.getOpcionA()); System.out.println(p.getOpcionB()); System.out.println(p.getOpcionC()); System.out.println(p.getOpcionD()); }
    private String obtenerRespuesta() { String resp; do { System.out.print("\nTu respuesta (a/b/c/d): "); resp = scanner.nextLine().toLowerCase().trim(); } while (!resp.matches("[a-d]")); return resp; }
    private void puntuarPregunta(Pregunta p, String resp) { boolean ok = p.esCorrecta(resp); respuestas.add(new Respuesta(p, resp, ok)); System.out.println(ok ? "\n✅ " + p.getMensajeOK() : "\n❌ " + p.getMensajeError()); if (!ok) conceptosDebiles.add(p.getConcepto()); }
    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. ¿Qué es una TRANSACCIÓN en BD?",
            "a) Una tabla de datos", "b) Conjunto de operaciones que se ejecutan JUNTAS (todo o nada)", "c) Un error de BD", "d) Un índice",
            "b", "✅ Transacción = ACID properties", "❌ Incorrecto", "Transaction = atomic unit", "Transacción", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Cuál es el comando para INICIAR una transacción?",
            "a) START TRANSACTION o BEGIN", "b) CREATE TRANSACTION", "c) OPEN TRANSACTION", "d) INIT TRANSACTION",
            "a", "✅ BEGIN o START TRANSACTION", "❌ Incorrecto", "BEGIN inicia transacción", "BEGIN", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Qué es COMMIT?",
            "a) Deshace cambios", "b) CONFIRMA y guarda cambios permanentemente", "c) Cancela transacción", "d) Error",
            "b", "✅ COMMIT = confirmar cambios", "❌ Incorrecto", "COMMIT makes changes permanent", "COMMIT", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué es ROLLBACK?",
            "a) Confirma cambios", "b) DESHACE todos cambios de transacción", "c) Guarda en archivo", "d) Crea backup",
            "b", "✅ ROLLBACK = deshacer cambios", "❌ Incorrecto", "ROLLBACK reverts changes", "ROLLBACK", 1
        ));

        p.add(new Pregunta(
            "P5. BEGIN; UPDATE usuarios SET edad=25 WHERE id=1; ROLLBACK; ¿qué sucede?",
            "a) Usuario id=1 tiene edad 25", "b) USUARIO SIGUE CON EDAD ORIGINAL (cambio deshecho)", "c) Error", "d) Tabla borrada",
            "b", "✅ ROLLBACK deshace UPDATE", "❌ Incorrecto", "ROLLBACK cancels all changes", "ROLLBACK", 1
        ));

        p.add(new Pregunta(
            "P6. BEGIN; INSERT INTO usuarios (...); COMMIT; ¿resultado?",
            "a) No se inserta nada", "b) USUARIO INSERTADO PERMANENTEMENTE", "c) Error de sintaxis", "d) Tabla borrada",
            "b", "✅ COMMIT guarda permanentemente", "❌ Incorrecto", "COMMIT persists insert", "COMMIT", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué es un SAVEPOINT?",
            "a) Punto donde se guarda", "b) Punto dentro transacción donde se puede ROLLBACK parcial", "c) Final de transacción", "d) Error",
            "b", "✅ SAVEPOINT = rollback dentro transacción", "❌ Incorrecto", "SAVEPOINT partial rollback", "SAVEPOINT", 1
        ));

        p.add(new Pregunta(
            "P8. SAVEPOINT sp1; UPDATE usuarios...; ROLLBACK TO sp1; ¿qué pasa?",
            "a) Deshace TODO", "b) DESHACE SOLO hasta SAVEPOINT sp1", "c) Confirma cambios", "d) Error",
            "b", "✅ ROLLBACK TO sp1 vuelve atrás", "❌ Incorrecto", "Partial rollback con savepoint", "SAVEPOINT", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué es AUTOCOMMIT mode?",
            "a) Modo que requiere COMMIT explícito", "b) Modo que CONFIRMA cada operación automáticamente", "c) Un tipo de error", "d) Un índice",
            "b", "✅ AUTOCOMMIT = sin BEGIN/COMMIT", "❌ Incorrecto", "AUTOCOMMIT mode by default", "AUTOCOMMIT", 1
        ));

        p.add(new Pregunta(
            "P10. BEGIN; SELECT * FROM usuarios; COMMIT; ¿SELECT modifica datos?",
            "a) Sí", "b) NO, SELECT solo lee datos", "c) Error", "d) Depende tabla",
            "b", "✅ SELECT es read-only", "❌ Incorrecto", "SELECT no cambia datos", "SELECT", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. ¿Qué significa 'ACID' en transacciones?",
            "a) Un tipo de error", "b) Atomicity, Consistency, Isolation, Durability", "c) Un índice", "d) Una tabla",
            "b", "✅ ACID = propiedades transaccionales", "❌ Incorrecto", "ACID properties of transactions", "ACID", 2
        ));

        p.add(new Pregunta(
            "P12. {NOMBRE}, ¿qué significa ATOMICITY?",
            "a) Transacción se divide en partes", "b) Transacción es INDIVISIBLE (todo o nada)", "c) Transacción es lenta", "d) Error",
            "b", "✅ Atomicity = all-or-nothing", "❌ Incorrecto", "Atomicity propiedad ACID", "ACID", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Qué significa CONSISTENCY?",
            "a) Transacción es rápida", "b) BD va de estado VÁLIDO a VÁLIDO después transacción", "c) Datos se copian", "d) Error",
            "b", "✅ Consistency = valid state to valid", "❌ Incorrecto", "Consistency en ACID", "ACID", 2
        ));

        p.add(new Pregunta(
            "P14. ¿Qué significa ISOLATION?",
            "a) Transacción ve datos de otra", "b) Transacción NO interfiere con otras (concurrencia)", "c) Transacción es lenta", "d) Error",
            "b", "✅ Isolation = concurrent independence", "❌ Incorrecto", "Isolation level concurrency", "ACID", 2
        ));

        p.add(new Pregunta(
            "P15. ¿Qué significa DURABILITY?",
            "a) Transacción usa mucho tiempo", "b) Una vez COMMITTED, los datos PERSISTEN aunque fallo", "c) Datos se borran", "d) Error",
            "b", "✅ Durability = persistent after commit", "❌ Incorrecto", "Durability permanencia datos", "ACID", 2
        ));

        p.add(new Pregunta(
            "P16. ¿Qué es un ISOLATION LEVEL?",
            "a) Velocidad de transacción", "b) Grado de aislamiento entre TRANSACCIONES CONCURRENTES", "c) Un tipo índice", "d) Error",
            "b", "✅ Isolation level = concurrency control", "❌ Incorrecto", "Isolation levels database", "Isolation", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Cuál es el nivel más RESTRICTIVO?",
            "a) READ UNCOMMITTED", "b) READ COMMITTED", "c) REPEATABLE READ", "d) SERIALIZABLE (más aislamiento)",
            "d", "✅ SERIALIZABLE = máximo aislamiento", "❌ Incorrecto", "Isolation levels spectrum", "Isolation", 2
        ));

        p.add(new Pregunta(
            "P18. ¿Qué es DIRTY READ?",
            "a) Leer datos CONFIRMADOS de otra transacción", "b) Leer datos NO confirmados de otra transacción", "c) Leer tabla vacía", "d) Error",
            "b", "✅ Dirty read = reading uncommitted data", "❌ Incorrecto", "Dirty read problema", "Problemas", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué es DEADLOCK?",
            "a) Transacción lenta", "b) DOS transacciones se esperan MUTUAMENTE (no avanzan)", "c) Base de datos lenta", "d) Error sintaxis",
            "b", "✅ Deadlock = circular wait lock", "❌ Incorrecto", "Deadlock concurrency problem", "Problemas", 2
        ));

        p.add(new Pregunta(
            "P20. Transacción 1 espera lock de Transacción 2; Transacción 2 espera lock de Transacción 1:",
            "a) Ambas avanzan", "b) DEADLOCK - ambas se quedan esperando", "c) Ambas se deshacen", "d) BD se reinicia",
            "b", "✅ Espera circular = deadlock", "❌ Incorrecto", "Deadlock scenario", "Deadlock", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. READ UNCOMMITTED permite ¿qué problema?",
            "a) Nada", "b) DIRTY READ - leer cambios no confirmados", "c) Cambios lentos", "d) Bloqueos",
            "b", "✅ READ UNCOMMITTED = dirty read posible", "❌ Incorrecto", "Isolation level problems", "Isolation", 3
        ));

        p.add(new Pregunta(
            "P22. READ COMMITTED previene ¿qué?",
            "a) Dirty read SOLAMENTE", "b) Dirty read + non-repeatable read", "c) Todos los problemas", "d) Nada",
            "a", "✅ READ COMMITTED = no dirty read", "❌ Incorrecto", "READ COMMITTED isolation", "Isolation", 3
        ));

        p.add(new Pregunta(
            "P23. {NOMBRE}, ¿qué es NON-REPEATABLE READ?",
            "a) Mismo SELECT retorna diferentes valores en misma transacción", "b) Transacción no puede ejecutar", "c) Error de BD", "d) Cambio lento",
            "a", "✅ Non-repeatable = changed between reads", "❌ Incorrecto", "Non-repeatable read problem", "Aislamiento", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es PHANTOM READ?",
            "a) SELECT retorna filas NUEVAS entre lecturas", "b) Error de BD", "c) Transacción fantasma", "d) Bug de servidor",
            "a", "✅ Phantom = new rows appeared", "❌ Incorrecto", "Phantom read problem", "Aislamiento", 3
        ));

        p.add(new Pregunta(
            "P25. REPEATABLE READ previene ¿qué problemas?",
            "a) Solo dirty read", "b) Dirty + non-repeatable read", "c) Dirty + non-repeatable + phantom reads", "d) Nada",
            "b", "✅ REPEATABLE READ = no dirty/non-rep", "❌ Incorrecto", "REPEATABLE READ isolation", "Isolation", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Qué es optimistic locking?",
            "a) Bloquear datos antes leerlos", "b) NO bloquear; verificar cambios en COMMIT", "c) Bloquear para siempre", "d) Error",
            "b", "✅ Optimistic = check on commit", "❌ Incorrecto", "Optimistic locking strategy", "Locking", 3
        ));

        p.add(new Pregunta(
            "P27. ¿Qué es pesimistic locking?",
            "a) Verificar al commit", "b) BLOQUEAR datos ANTES de modificar", "c) No bloquear", "d) Error",
            "b", "✅ Pessimistic = lock before use", "❌ Incorrecto", "Pessimistic locking strategy", "Locking", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Qué es MVCC (Multi-Version Concurrency Control)?",
            "a) Una transacción", "b) Cada transacción ve VERSIÓN CONSISTENTE de datos", "c) Un índice", "d) Error",
            "b", "✅ MVCC = snapshot isolation", "❌ Incorrecto", "MVCC PostgreSQL", "Concurrency", 3
        ));

        p.add(new Pregunta(
            "P29. ¿Cómo manejar DEADLOCK programáticamente?",
            "a) No se puede", "b) DETECTAR e intentar REINTENTAR transacción", "c) Ignorar", "d) Error BD",
            "b", "✅ Retry strategy for deadlocks", "❌ Incorrecto", "Deadlock handling", "Manejo", 3
        ));

        p.add(new Pregunta(
            "P30. BEGIN; INSERT usuarios; BEGIN; UPDATE usuarios;COMMIT;COMMIT; ¿es válido?",
            "a) Sí", "b) NO - BEGIN anidado no permitido (depende BD)", "c) Error", "d) Crea tabla",
            "b", "✅ Transacciones anidadas = savepoint", "❌ Incorrecto", "Nested transactions en BD", "Transacciones", 3
        ));

        return p;
    }
    public static void main(String[] args) { new Transacciones().iniciar(); }
}

import java.util.ArrayList;

public class PostgreSQL extends TestAdaptativo {

    public void iniciar() {
        urlRecurso = "https://www.w3schools.com/postgresql/index.php";
        super.iniciarTest("TEST: POSTGRESQL BÁSICO");
    }

    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        for (Pregunta p : filtradas) {
            pintarPregunta(p);
            puntuarPregunta(p, obtenerRespuesta());
        }
    }

    private void pintarPregunta(Pregunta p) {
        System.out.println("\n╔════════════════════════════════════════════════════╗");
        System.out.println("║ 📝 PREGUNTA                                        ║");
        System.out.println("╠════════════════════════════════════════════════════╣");
        System.out.println(alinearEnCaja("\033[1m" + incluirNombre(p.getTexto()) + "\033[0m"));
        System.out.println("║                                                    ║");
        System.out.println(alinearEnCaja("  a) " + p.getOpcionA()));
        System.out.println(alinearEnCaja("  b) " + p.getOpcionB()));
        System.out.println(alinearEnCaja("  c) " + p.getOpcionC()));
        System.out.println(alinearEnCaja("  d) " + p.getOpcionD()));
        System.out.println("╚════════════════════════════════════════════════════╝");
    }

    private String obtenerRespuesta() {
        String resp;
        do {
            System.out.print("\nTu respuesta (a/b/c/d): ");
            resp = scanner.nextLine().toLowerCase().trim();
        } while (!resp.matches("[a-d]"));
        return resp;
    }

    private void puntuarPregunta(Pregunta p, String resp) {
        boolean ok = p.esCorrecta(resp);
        respuestas.add(new Respuesta(p, resp, ok));
        System.out.println("\n╔════════════════════════════════════════════════════╗");
        System.out.println(alinearEnCaja(ok ? "✅ RESPUESTA CORRECTA" : "❌ RESPUESTA INCORRECTA"));
        System.out.println("╠════════════════════════════════════════════════════╣");
        System.out.println(alinearEnCaja(ok ? p.getMensajeOK() : p.getMensajeError()));
        System.out.println("║                                                    ║");
        System.out.println(alinearEnCaja("💡 EXPLICACIÓN:"));
        System.out.println(alinearEnCaja(p.getSugerencia()));
        System.out.println("╚════════════════════════════════════════════════════╝");
        if (!ok) conceptosDebiles.add(p.getConcepto());
    }

    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. ¿Qué es PostgreSQL?",
            "b) Un sistema gestor de bases de datos relacional", "a) Un lenguaje de programación", "c) Un servidor web", "d) Un editor de texto",
            "b", "✅ Correcto.", "❌ Incorrecto.", "PostgreSQL = relational database", "PostgreSQL", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Cómo se conecta a una BD en PostgreSQL desde terminal?",
            "c) login usuario", "a) psql -d nombrebd -U usuario", "a) psql -d nombrebd -U usuario", "d) open bd",
            "b", "✅ Correcto.", "❌ Incorrecto.", "psql -d database -U user", "Conexión", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Qué es una BASE DE DATOS en PostgreSQL?",
            "b) Una colección de TABLAS y esquemas", "a) Un archivo .txt", "c) Un usuario", "d) Una contraseña",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Database contains tables/schemas", "BD", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué comando crea una BD en PostgreSQL?",
            "b) CREATE DATABASE nombrebd", "c) NEW DATABASE nombrebd", "b) CREATE DATABASE nombrebd", "d) MAKE BD nombrebd",
            "a", "✅ Correcto.", "❌ Incorrecto.", "CREATE DATABASE sintaxis", "DDL", 1
        ));

        p.add(new Pregunta(
            "P5. ¿Qué es un USUARIO (role) en PostgreSQL?",
            "b) Una cuenta para conectarse a BD con permisos", "a) Solo una contraseña", "c) Una tabla", "d) Un archivo",
            "b", "✅ Correcto.", "❌ Incorrecto.", "User = role with privileges", "Usuario", 1
        ));

        p.add(new Pregunta(
            "P6. ¿Cuál es el tipo SERIAL en PostgreSQL?",
            "b) Entero que auto-incrementa", "a) Texto serializado", "c) Número decimal", "b) Entero que auto-incrementa",
            "d", "✅ Correcto.", "❌ Incorrecto.", "SERIAL para IDs", "Tipo datos", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué tipo de dato es TEXT en PostgreSQL?",
            "c) Texto de longitud variable ILIMITADA", "c) Texto de longitud variable ILIMITADA", "b) Número decimal", "d) Booleano",
            "a", "✅ Correcto.", "❌ Incorrecto.", "TEXT para strings largos", "Tipo datos", 1
        ));

        p.add(new Pregunta(
            "P8. ¿Qué comando lista todas las bases de datos en PostgreSQL?",
            "c) \\l (en psql)", "b) LIST BD", "a) SHOW DATABASES", "d) SELECT * FROM databases",
            "c", "✅ Correcto.", "❌ Incorrecto.", "\\l lista BDs", "Comandos", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué comando cambia a una BD diferente en psql?",
            "b) \\c nombrebd", "a) CONNECT nombrebd", "c) SWITCH nombrebd", "d) USE nombrebd",
            "b", "✅ Correcto.", "❌ Incorrecto.", "\\c cambia de BD", "Comandos", 1
        ));

        p.add(new Pregunta(
            "P10. ¿Qué es una SECUENCIA en PostgreSQL?",
            "b) Generador de números auto-incrementales", "a) Una tabla especial", "b) Generador de números auto-incrementales", "d) Una contraseña",
            "c", "✅ Correcto.", "❌ Incorrecto.", "SEQUENCE auto-increment", "Secuencia", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. ¿Cuál es la diferencia entre usuario y rol en PostgreSQL?",
            "b) Usuario = puede loguear; Rol = solo permisos", "c) Rol es más antiguo", "b) Usuario = puede loguear; Rol = solo permisos", "d) No hay diferencia técnica",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Usuario vs Rol conceptualmente", "Usuario", 2
        ));

        p.add(new Pregunta(
            "P12. ¿Cuál es la sintaxis para CREAR un usuario con contraseña?",
            "b) CREATE USER nombre pass", "a) CREATE USER nombre WITH PASSWORD 'pass'", "c) NEW USER nombre", "a) CREATE USER nombre WITH PASSWORD 'pass'",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Sintaxis CREATE USER", "Usuario", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Qué comando otorga permisos a un usuario en PostgreSQL?",
            "b) GRANT privilegios ON tabla TO usuario", "a) ALLOW user", "b) GRANT privilegios ON tabla TO usuario", "d) SET usuario",
            "c", "✅ Correcto.", "❌ Incorrecto.", "GRANT ON TO", "Permisos", 2
        ));

        p.add(new Pregunta(
            "P14. ¿Qué es un SCHEMA en PostgreSQL?",
            "b) Espacio lógico que contiene tablas", "a) La estructura de una tabla", "c) Un rol", "b) Espacio lógico que contiene tablas",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Schema contiene tablas", "Schema", 2
        ));

        p.add(new Pregunta(
            "P15. {NOMBRE}, ¿cuál es el comando para hacer un BACKUP de una BD?",
            "b) pg_dump nombrebd > archivo.sql", "a) BACKUP nombrebd", "c) EXPORT nombrebd", "d) SAVE nombrebd",
            "b", "✅ Correcto.", "❌ Incorrecto.", "pg_dump para backup", "Backup", 2
        ));

        p.add(new Pregunta(
            "P16. ¿Cómo se restaura un backup en PostgreSQL?",
            "b) psql nombrebd < archivo.sql", "a) RESTORE archivo.sql", "b) psql nombrebd < archivo.sql", "d) LOAD archivo.sql",
            "c", "✅ Correcto.", "❌ Incorrecto.", "psql para restaurar", "Restore", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Qué es una VIEW en PostgreSQL?",
            "b) Una consulta guardada que parece tabla", "a) Una tabla física", "b) Una consulta guardada que parece tabla", "d) Un backup",
            "c", "✅ Correcto.", "❌ Incorrecto.", "View no almacena datos", "Vista", 2
        ));

        p.add(new Pregunta(
            "P18. ¿Qué es un TRIGGER en PostgreSQL?",
            "b) Acción automática ante INSERT/UPDATE/DELETE", "c) Un índice", "b) Acción automática ante INSERT/UPDATE/DELETE", "d) Un usuario",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Trigger ejecuta función", "Trigger", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué archivo configura PostgreSQL?",
            "b) postgresql.conf", "c) settings.sql", "b) postgresql.conf", "d) postgres.cfg",
            "a", "✅ Correcto.", "❌ Incorrecto.", "archivo de configuración", "Config", 2
        ));

        p.add(new Pregunta(
            "P20. ¿Qué hace el comando VACUUM en PostgreSQL?",
            "b) Limpia espacio de tuplas muertas", "c) Crea backup", "b) Limpia espacio de tuplas muertas", "d) Reinicia BD",
            "a", "✅ Correcto.", "❌ Incorrecto.", "VACUUM mantenimiento", "Mantenimiento", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. ¿Qué es una WINDOW FUNCTION en PostgreSQL?",
            "b) Función que opera sobre conjunto de filas", "a) Una función de ventana del SO", "b) Función que opera sobre conjunto de filas", "d) Un índice",
            "c", "✅ Correcto.", "❌ Incorrecto.", "ROW_NUMBER(), RANK(), etc", "Window", 3
        ));

        p.add(new Pregunta(
            "P22. ¿Qué comando muestra el plan de ejecución?",
            "b) EXPLAIN consulta", "a) SHOW PLAN", "c) ANALYZE consulta", "b) EXPLAIN consulta",
            "d", "✅ Correcto.", "❌ Incorrecto.", "EXPLAIN para optimizar", "Performance", 3
        ));

        p.add(new Pregunta(
            "P23. {NOMBRE}, ¿qué es una CTE (Common Table Expression)?",
            "b) Consulta nombrada dentro de otra (WITH...AS)", "c) Un trigger", "b) Consulta nombrada dentro de otra (WITH...AS)", "d) Un índice",
            "a", "✅ Correcto.", "❌ Incorrecto.", "CTE = named subquery", "CTE", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es JSONB en PostgreSQL?",
            "b) Tipo JSON binario optimizado", "a) Tipo JSON simple", "c) Un archivo JSON", "b) Tipo JSON binario optimizado",
            "d", "✅ Correcto.", "❌ Incorrecto.", "JSONB vs JSON", "JSONB", 3
        ));

        p.add(new Pregunta(
            "P25. ¿Cuál es el comando para habilitar una EXTENSIÓN en PostgreSQL?",
            "b) CREATE EXTENSION nombre", "a) INSTALL EXTENSION nombre", "c) USE EXTENSION nombre", "d) LOAD EXTENSION nombre",
            "b", "✅ Correcto.", "❌ Incorrecto.", "CREATE EXTENSION sintaxis", "Extensión", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Qué es PARTICIONAMIENTO en PostgreSQL?",
            "b) Dividir tabla en particiones por criterio", "a) Dividir una BD en usuarios", "c) Un tipo de índice", "b) Dividir tabla en particiones por criterio",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Partitioning para performance", "Partición", 3
        ));

        p.add(new Pregunta(
            "P27. ¿Qué es una REPLICACIÓN en PostgreSQL?",
            "b) Sincronización automática BD primaria a secundaria", "a) Copia de un archivo", "c) Backup manual", "b) Sincronización automática BD primaria a secundaria",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Replication para HA", "Replicación", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Cuál es el comando para convertir entre versiones?",
            "b) pg_upgrade para actualizar versión mayor", "a) CONVERT BD", "c) UPDATE version", "d) MIGRATE",
            "b", "✅ Correcto.", "❌ Incorrecto.", "pg_upgrade para upgrades", "Upgrade", 3
        ));

        p.add(new Pregunta(
            "P29. ¿Qué es Full Text Search en PostgreSQL?",
            "b) Búsqueda avanzada con índices y ranking", "c) Un trigger", "b) Búsqueda avanzada con índices y ranking", "d) Un tipo de dato",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Full text search setup", "FTS", 3
        ));

        p.add(new Pregunta(
            "P30. ¿Qué son ESTADÍSTICAS (ANALYZE) en PostgreSQL?",
            "b) Comandos SQL ejecutados", "a) Información de tablas para optimizador", "a) Información de tablas para optimizador", "d) Información de usuarios",
            "c", "✅ Correcto.", "❌ Incorrecto.", "ANALYZE para query planner", "Statistics", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        PostgreSQL test = new PostgreSQL();
        test.iniciar();
    }
}

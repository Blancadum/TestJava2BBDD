import java.util.ArrayList;

public class PostgreSQL extends TestAdaptativo {

    public void iniciar() {
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
        System.out.println("\n" + incluirNombre(p.getTexto()));
        System.out.println(p.getOpcionA());
        System.out.println(p.getOpcionB());
        System.out.println(p.getOpcionC());
        System.out.println(p.getOpcionD());
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
        System.out.println(ok ? "\n✅ " + p.getMensajeOK() : "\n❌ " + p.getMensajeError());
        if (!ok) conceptosDebiles.add(p.getConcepto());
    }

    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. ¿Qué es PostgreSQL?",
            "a) Un lenguaje de programación", "b) Un sistema gestor de bases de datos relacional", "c) Un servidor web", "d) Un editor de texto",
            "b", "✅ PostgreSQL es un SGBD relacional", "❌ Incorrecto", "PostgreSQL = relational database", "PostgreSQL", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Cómo se conecta a una BD en PostgreSQL desde terminal?",
            "a) psql -d nombrebd -U usuario", "b) connect bd usuario", "c) login usuario", "d) open bd",
            "a", "✅ psql es el cliente de PostgreSQL", "❌ Incorrecto", "psql -d database -U user", "Conexión", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Qué es una BASE DE DATOS en PostgreSQL?",
            "a) Un archivo .txt", "b) Una colección de TABLAS y esquemas", "c) Un usuario", "d) Una contraseña",
            "b", "✅ BD = colección de tablas", "❌ Incorrecto", "Database contains tables/schemas", "BD", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué comando crea una BD en PostgreSQL?",
            "a) CREATE TABLE nombrebd", "b) CREATE DATABASE nombrebd", "c) NEW DATABASE nombrebd", "d) MAKE BD nombrebd",
            "b", "✅ CREATE DATABASE = crear BD", "❌ Incorrecto", "CREATE DATABASE sintaxis", "DDL", 1
        ));

        p.add(new Pregunta(
            "P5. ¿Qué es un USUARIO (role) en PostgreSQL?",
            "a) Solo una contraseña", "b) Una cuenta para conectarse a BD con permisos", "c) Una tabla", "d) Un archivo",
            "b", "✅ Usuario = cuenta con credenciales", "❌ Incorrecto", "User = role with privileges", "Usuario", 1
        ));

        p.add(new Pregunta(
            "P6. ¿Cuál es el tipo SERIAL en PostgreSQL?",
            "a) Texto serializado", "b) Entero que auto-incrementa", "c) Número decimal", "d) Booleano",
            "b", "✅ SERIAL = auto-incrementing integer", "❌ Incorrecto", "SERIAL para IDs", "Tipos", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué tipo de dato es TEXT en PostgreSQL?",
            "a) Número entero", "b) Número decimal", "c) Texto de longitud variable ILIMITADA", "d) Booleano",
            "c", "✅ TEXT = texto sin límite", "❌ Incorrecto", "TEXT para strings largos", "Tipos", 1
        ));

        p.add(new Pregunta(
            "P8. ¿Qué comando lista todas las bases de datos en PostgreSQL?",
            "a) SHOW DATABASES", "b) LIST BD", "c) \\l (en psql)", "d) SELECT * FROM databases",
            "c", "✅ \\l = list databases (en psql)", "❌ Incorrecto", "\\l lista BDs", "Comandos", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué comando cambia a una BD diferente en psql?",
            "a) CONNECT nombrebd", "b) \\c nombrebd", "c) SWITCH nombrebd", "d) USE nombrebd",
            "b", "✅ \\c = cambiar BD actual", "❌ Incorrecto", "\\c cambia de BD", "Comandos", 1
        ));

        p.add(new Pregunta(
            "P10. ¿Qué es una SECUENCIA en PostgreSQL?",
            "a) Una tabla especial", "b) Generador de números auto-incrementales", "c) Un índice", "d) Una contraseña",
            "b", "✅ SEQUENCE = generador de IDs", "❌ Incorrecto", "SEQUENCE auto-increment", "Secuencia", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. ¿Cuál es la diferencia entre usuario y rol en PostgreSQL?",
            "a) Son lo mismo en PostgreSQL", "b) Usuario = puede loguear; Rol = solo permisos", "c) Rol es más antiguo", "d) No hay diferencia técnica",
            "b", "✅ Usuario puede loguear; Rol es conjunto de permisos", "❌ Incorrecto", "Usuario vs Rol conceptualmente", "Usuario", 2
        ));

        p.add(new Pregunta(
            "P12. ¿Cuál es la sintaxis para CREAR un usuario con contraseña?",
            "a) CREATE USER nombre WITH PASSWORD 'pass'", "b) CREATE USER nombre pass", "c) NEW USER nombre", "d) ADD USER nombre",
            "a", "✅ CREATE USER ... WITH PASSWORD", "❌ Incorrecto", "Sintaxis CREATE USER", "Usuario", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Qué comando otorga permisos a un usuario en PostgreSQL?",
            "a) ALLOW user", "b) GRANT privilegios ON tabla TO usuario", "c) PERMIT usuario", "d) SET usuario",
            "b", "✅ GRANT = otorgar permisos", "❌ Incorrecto", "GRANT ON TO", "Permisos", 2
        ));

        p.add(new Pregunta(
            "P14. ¿Qué es un SCHEMA en PostgreSQL?",
            "a) La estructura de una tabla", "b) Espacio lógico que contiene tablas", "c) Un rol", "d) Un índice",
            "b", "✅ SCHEMA = espacio lógico de nombres", "❌ Incorrecto", "Schema contiene tablas", "Schema", 2
        ));

        p.add(new Pregunta(
            "P15. {NOMBRE}, ¿cuál es el comando para hacer un BACKUP de una BD?",
            "a) BACKUP nombrebd", "b) pg_dump nombrebd > archivo.sql", "c) EXPORT nombrebd", "d) SAVE nombrebd",
            "b", "✅ pg_dump exporta BD a SQL", "❌ Incorrecto", "pg_dump para backup", "Backup", 2
        ));

        p.add(new Pregunta(
            "P16. ¿Cómo se restaura un backup en PostgreSQL?",
            "a) RESTORE archivo.sql", "b) psql nombrebd < archivo.sql", "c) IMPORT archivo.sql", "d) LOAD archivo.sql",
            "b", "✅ psql < archivo restaura", "❌ Incorrecto", "psql para restaurar", "Restore", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Qué es una VIEW en PostgreSQL?",
            "a) Una tabla física", "b) Una consulta guardada que parece tabla", "c) Un índice", "d) Un backup",
            "b", "✅ VIEW = consulta virtual guardada", "❌ Incorrecto", "View no almacena datos", "Vista", 2
        ));

        p.add(new Pregunta(
            "P18. ¿Qué es un TRIGGER en PostgreSQL?",
            "a) Error de sintaxis", "b) Acción automática ante INSERT/UPDATE/DELETE", "c) Un índice", "d) Un usuario",
            "b", "✅ TRIGGER = acción automática en evento", "❌ Incorrecto", "Trigger ejecuta función", "Trigger", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué archivo configura PostgreSQL?",
            "a) config.ini", "b) postgresql.conf", "c) settings.sql", "d) postgres.cfg",
            "b", "✅ postgresql.conf = configuración", "❌ Incorrecto", "archivo de configuración", "Config", 2
        ));

        p.add(new Pregunta(
            "P20. ¿Qué hace el comando VACUUM en PostgreSQL?",
            "a) Borra tablas", "b) Limpia espacio de tuplas muertas", "c) Crea backup", "d) Reinicia BD",
            "b", "✅ VACUUM limpia tuplas obsoletas", "❌ Incorrecto", "VACUUM mantenimiento", "Mantenimiento", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. ¿Qué es una WINDOW FUNCTION en PostgreSQL?",
            "a) Una función de ventana del SO", "b) Función que opera sobre conjunto de filas", "c) Un trigger", "d) Un índice",
            "b", "✅ Window function = análisis sobre filas", "❌ Incorrecto", "ROW_NUMBER(), RANK(), etc", "Window", 3
        ));

        p.add(new Pregunta(
            "P22. ¿Qué comando muestra el plan de ejecución?",
            "a) SHOW PLAN", "b) EXPLAIN consulta", "c) ANALYZE consulta", "d) PROFILE consulta",
            "b", "✅ EXPLAIN muestra plan de ejecución", "❌ Incorrecto", "EXPLAIN para optimizar", "Performance", 3
        ));

        p.add(new Pregunta(
            "P23. {NOMBRE}, ¿qué es una CTE (Common Table Expression)?",
            "a) Una tabla temporal", "b) Consulta nombrada dentro de otra (WITH...AS)", "c) Un trigger", "d) Un índice",
            "b", "✅ CTE = WITH...AS para subconsultas", "❌ Incorrecto", "CTE = named subquery", "CTE", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es JSONB en PostgreSQL?",
            "a) Tipo JSON simple", "b) Tipo JSON binario optimizado", "c) Un archivo JSON", "d) Una función de conversión",
            "b", "✅ JSONB = JSON binario con índices", "❌ Incorrecto", "JSONB vs JSON", "JSONB", 3
        ));

        p.add(new Pregunta(
            "P25. ¿Cuál es el comando para habilitar una EXTENSIÓN en PostgreSQL?",
            "a) INSTALL EXTENSION nombre", "b) CREATE EXTENSION nombre", "c) USE EXTENSION nombre", "d) LOAD EXTENSION nombre",
            "b", "✅ CREATE EXTENSION", "❌ Incorrecto", "CREATE EXTENSION sintaxis", "Extensión", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Qué es PARTICIONAMIENTO en PostgreSQL?",
            "a) Dividir una BD en usuarios", "b) Dividir tabla en particiones por criterio", "c) Un tipo de índice", "d) Una copia de seguridad",
            "b", "✅ Partitioning = dividir tabla grande", "❌ Incorrecto", "Partitioning para performance", "Partición", 3
        ));

        p.add(new Pregunta(
            "P27. ¿Qué es una REPLICACIÓN en PostgreSQL?",
            "a) Copia de un archivo", "b) Sincronización automática BD primaria a secundaria", "c) Backup manual", "d) Un índice",
            "b", "✅ Replication = sincronización continua", "❌ Incorrecto", "Replication para HA", "Replicación", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Cuál es el comando para convertir entre versiones?",
            "a) CONVERT BD", "b) pg_upgrade para actualizar versión mayor", "c) UPDATE version", "d) MIGRATE",
            "b", "✅ pg_upgrade actualiza versión", "❌ Incorrecto", "pg_upgrade para upgrades", "Upgrade", 3
        ));

        p.add(new Pregunta(
            "P29. ¿Qué es Full Text Search en PostgreSQL?",
            "a) Búsqueda normal de texto", "b) Búsqueda avanzada con índices y ranking", "c) Un trigger", "d) Un tipo de dato",
            "b", "✅ FTS = búsqueda semántica avanzada", "❌ Incorrecto", "Full text search setup", "FTS", 3
        ));

        p.add(new Pregunta(
            "P30. ¿Qué son ESTADÍSTICAS (ANALYZE) en PostgreSQL?",
            "a) Información de tablas para optimizador", "b) Comandos SQL ejecutados", "c) Logs de errores", "d) Información de usuarios",
            "a", "✅ ANALYZE recolecta estadísticas para optimizar", "❌ Incorrecto", "ANALYZE para query planner", "Statistics", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        PostgreSQL test = new PostgreSQL();
        test.iniciar();
    }
}

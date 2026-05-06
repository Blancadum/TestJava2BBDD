package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PostgreSQLBasicoService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. PostgreSQL es:",
            "Una base de datos relacional", "Un lenguaje de programación", "Un servidor web", "Una librería",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "PostgreSQL es un SGBD relacional de código abierto",
            "Conceptos básicos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. ¿Cómo conectarse a PostgreSQL desde terminal?",
            "psql -U usuario -d nombrebd", "sql -user usuario", "connect nombrebd", "login postgresql",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "psql -U usuario -d nombrebd es la sintaxis correcta",
            "Conexión", 1
        ));

        preguntas.add(new Pregunta(
            "P3. ¿Qué comando lista todas las bases de datos?",
            "SHOW DATABASES;", "\\l", "LIST DB;", "SELECT * FROM databases;",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "\\l lista bases de datos en PostgreSQL",
            "Comandos", 1
        ));

        preguntas.add(new Pregunta(
            "P4. Para crear una BD: CREATE DATABASE miBD;",
            "Crea una tabla", "Crea una base de datos", "Error de sintaxis", "Crea un usuario",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "CREATE DATABASE crea una nueva base de datos",
            "DDL", 1
        ));

        preguntas.add(new Pregunta(
            "P5. \\dt en PostgreSQL muestra:",
            "Todas las bases de datos", "Las tablas de la BD actual", "Los usuarios", "Los logs",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "\\dt lista las tablas (data tables) en PostgreSQL",
            "Comandos", 1
        ));

        preguntas.add(new Pregunta(
            "P6. Serial en PostgreSQL es:",
            "Un tipo de dato decimal", "Un entero auto-incrementable", "Un texto", "Nada válido",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SERIAL es INTEGER con auto-increment",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P7. Para insertar fecha actual: NOW() devuelve:",
            "La hora actual", "La fecha y hora actual", "Un error", "Un número",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "NOW() retorna timestamp con fecha y hora",
            "Funciones", 1
        ));

        preguntas.add(new Pregunta(
            "P8. \\du en PostgreSQL lista:",
            "Las bases de datos", "Los usuarios/roles", "Las tablas", "Los esquemas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "\\du lista los usuarios (database users)",
            "Comandos", 1
        ));

        preguntas.add(new Pregunta(
            "P9. CREATE SCHEMA es para:",
            "Crear una tabla", "Crear un esquema (namespace)", "Crear una BD", "Crear un índice",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SCHEMA es un contenedor de objetos en una BD",
            "Esquemas", 1
        ));

        preguntas.add(new Pregunta(
            "P10. Para salir de psql:",
            "exit;", "quit;", "\\q", "Ctrl+D",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "\\q o Ctrl+D sale de psql",
            "Conexión", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. TRUNCATE TABLE usuarios es:",
            "Borra algunas filas", "Borra todas las filas (más rápido que DELETE)", "Borra la tabla", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "TRUNCATE es más rápido que DELETE para vaciar tabla",
            "DML", 2
        ));

        preguntas.add(new Pregunta(
            "P12. ALTER TABLE usuarios ADD COLUMN edad INT;",
            "Añade columna", "Modifica columna", "Borra columna", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "ALTER TABLE ADD COLUMN añade columna nueva",
            "DDL", 2
        ));

        preguntas.add(new Pregunta(
            "P13. VACUUM en PostgreSQL:",
            "Borra datos", "Limpia espacio no usado (mantenimiento)", "Copia datos", "Resetea BD",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "VACUUM recupera espacio y mantiene rendimiento",
            "Mantenimiento", 2
        ));

        preguntas.add(new Pregunta(
            "P14. ANALYZE en PostgreSQL actualiza:",
            "Los datos", "Las estadísticas para optimizar queries", "Los índices", "Los logs",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ANALYZE recolecta estadísticas para optimizador",
            "Optimización", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Hacer backup: pg_dump nombrebd >",
            "Crea query", "Exporta BD a archivo", "Copia tabla", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "pg_dump exporta toda la BD",
            "Backup", 2
        ));

        preguntas.add(new Pregunta(
            "P16. ROLE en PostgreSQL es similar a:",
            "Una tabla", "Un usuario con permisos", "Un índice", "Un esquema",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ROLE es identidad con permisos en PostgreSQL",
            "Seguridad", 2
        ));

        preguntas.add(new Pregunta(
            "P17. GRANT SELECT ON tabla TO usuario;",
            "Da permiso de lectura", "Da permiso de escritura", "Quita permisos", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "GRANT otorga permisos específicos",
            "Seguridad", 2
        ));

        preguntas.add(new Pregunta(
            "P18. RETURNING en INSERT:",
            "Sin utilidad", "Devuelve filas insertadas", "Borra filas", "Actualiza",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "RETURNING retorna datos tras INSERT/UPDATE/DELETE",
            "DML", 2
        ));

        preguntas.add(new Pregunta(
            "P19. JSONB en PostgreSQL es:",
            "Un error", "Tipo dato JSON binario (indexable)", "Un texto", "Una tabla",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "JSONB es JSON con mejor rendimiento e índices",
            "Tipos", 2
        ));

        preguntas.add(new Pregunta(
            "P20. uuid_generate_v4() genera:",
            "Un número", "Un UUID único", "Un hash", "Una fecha",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "uuid_generate_v4() crea UUID versión 4 aleatorio",
            "Funciones", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. LISTEN/NOTIFY es para:",
            "Crear triggers", "Comunicación tiempo real entre conexiones", "Logs", "Backup",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LISTEN/NOTIFY permite pub-sub en PostgreSQL",
            "Avanzado", 3
        ));

        preguntas.add(new Pregunta(
            "P22. Partial INDEX es un índice en:",
            "Toda la tabla", "Filas que cumplen condición (más eficiente)", "Columnas", "Schemas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Partial index indexa solo filas con WHERE",
            "Optimización", 3
        ));

        preguntas.add(new Pregunta(
            "P23. BRIN INDEX es mejor para:",
            "Tablas pequeñas", "Tablas grandes ordenadas (bajo overhead)", "Textos", "UUIDs",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "BRIN es índice comprimido para datos ordenados",
            "Índices", 3
        ));

        preguntas.add(new Pregunta(
            "P24. EXPLAIN ANALYZE muestra:",
            "Errores", "Plan ejecución + tiempos reales", "Estructura tabla", "Permisos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "EXPLAIN ANALYZE ejecuta y muestra estadísticas",
            "Optimización", 3
        ));

        preguntas.add(new Pregunta(
            "P25. Materialized VIEW difiere de VIEW en que:",
            "Se almacena en disco (se debe refrescar)", "Es temporal", "No existe", "Es más lento",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "MATERIALIZED VIEW crea tabla física con resultados",
            "Vistas", 3
        ));

        preguntas.add(new Pregunta(
            "P26. UNLOGGED TABLE sirve para:",
            "Datos temporales sin seguridad (más rápido)", "Tablas privadas", "Historial", "Backup",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "UNLOGGED TABLE no escribe WAL (Write-Ahead Log)",
            "Optimización", 3
        ));

        preguntas.add(new Pregunta(
            "P27. GiST INDEX soporta:",
            "Solo números", "Búsquedas multidimensionales/texto completo", "UUIDs", "Fechas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "GiST es flexible para búsquedas complejas",
            "Índices", 3
        ));

        preguntas.add(new Pregunta(
            "P28. Replicación lógica en PostgreSQL es:",
            "Copia filas entre instancias", "Copia ficheros", "Copia queries", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Replicación lógica copia cambios a nivel fila",
            "Replicación", 3
        ));

        preguntas.add(new Pregunta(
            "P29. max_connections parámetro controla:",
            "Bases de datos", "Máximo conexiones simultáneas", "Queries", "Usuarios",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "max_connections limita conexiones concurrentes",
            "Configuración", 3
        ));

        preguntas.add(new Pregunta(
            "P30. SAVEPOINT permite:",
            "Backup", "Revertir parte de transacción", "Crear usuario", "Listar tablas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SAVEPOINT crea punto de rollback dentro de transacción",
            "Transacciones", 3
        ));

        return preguntas;
    }
}

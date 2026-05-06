import java.util.ArrayList;

public class ConceptosSQL extends TestAdaptativo {

    public void iniciar() {
        super.iniciarTest("TEST: CONCEPTOS BÁSICOS SQL");
    }

    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        System.out.println("Tienes " + filtradas.size() + " preguntas. ¡Vamos!\n");
        for (Pregunta p : filtradas) {
            pintarPregunta(p);
            String resp = obtenerRespuesta();
            puntuarPregunta(p, resp);
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
            "P1. {NOMBRE}, escribir SELECT * FROM usuarios devuelve:",
            "a) Solo la primera fila", "b) Todas las columnas de todas las filas", "c) Una sola columna", "d) Error",
            "b", "✅ SELECT * devuelve todo", "❌ Incorrecto", "* = todas las columnas", "SELECT básico", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Cuál es la sintaxis correcta de INSERT?",
            "a) INSERT INTO tabla VALUES(...)", "b) INSERT tabla (...)", "c) ADD tabla (...)", "d) CREATE tabla (...)",
            "a", "✅ Sintaxis correcta", "❌ Incorrecto", "INSERT INTO tabla VALUES", "INSERT", 1
        ));

        p.add(new Pregunta(
            "P3. UPDATE usuarios SET nombre='Juan' actualiza:",
            "a) Solo el primer usuario", "b) Todos los usuarios (SIN WHERE!)", "c) Ninguno", "d) Error",
            "b", "✅ Correcto, siempre agregar WHERE", "❌ Incorrecto", "Usar WHERE siempre", "UPDATE", 1
        ));

        p.add(new Pregunta(
            "P4. DELETE FROM usuarios sin WHERE:",
            "a) Borra un usuario", "b) Borra TODOS los usuarios", "c) Error", "d) No borra nada",
            "b", "✅ Peligro: borra todo", "❌ Incorrecto", "Siempre usar WHERE", "DELETE", 1
        ));

        p.add(new Pregunta(
            "P5. VARCHAR(50) en SQL significa:",
            "a) Variable con 50 decimales", "b) Texto de máximo 50 caracteres", "c) 50 números", "d) Error",
            "b", "✅ VARCHAR = texto variable", "❌ Incorrecto", "VARCHAR para strings", "Tipos", 1
        ));

        p.add(new Pregunta(
            "P6. INT en SQL almacena:",
            "a) Texto", "b) Números enteros", "c) Decimales", "d) Booleanos",
            "b", "✅ INT = números enteros", "❌ Incorrecto", "INT para integers", "Tipos", 1
        ));

        p.add(new Pregunta(
            "P7. PRIMARY KEY garantiza que:",
            "a) Todos los valores sean iguales", "b) El valor sea único e identifique fila", "c) No haya más datos", "d) Error",
            "b", "✅ ID único por fila", "❌ Incorrecto", "PRIMARY KEY = único", "PK", 1
        ));

        p.add(new Pregunta(
            "P8. {NOMBRE}, FOREIGN KEY sirve para:",
            "a) Borrar datos", "b) Crear nueva tabla", "c) Referenciar clave de otra tabla", "d) Nada",
            "c", "✅ FK = referencia", "❌ Incorrecto", "FOREIGN KEY referencia", "FK", 1
        ));

        p.add(new Pregunta(
            "P9. CREATE TABLE usuarios (...) crea:",
            "a) Un usuario", "b) Una nueva tabla", "c) Una consulta", "d) Un índice",
            "b", "✅ CREATE TABLE = tabla nueva", "❌ Incorrecto", "CREATE TABLE estructura", "DDL", 1
        ));

        p.add(new Pregunta(
            "P10. DROP TABLE usuarios borra:",
            "a) Un usuario", "b) Una columna", "c) LA TABLA ENTERA y sus datos", "d) Nada",
            "c", "✅ DROP = borra tabla", "❌ Incorrecto", "DROP = eliminación", "DDL", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. SELECT * FROM usuarios WHERE edad > 18 AND ciudad='Madrid':",
            "a) Usuarios > 18 ó Madrid", "b) Usuarios > 18 Y de Madrid", "c) Solo de Madrid", "d) Error",
            "b", "✅ AND = ambas condiciones", "❌ Incorrecto", "AND = y lógico", "WHERE", 2
        ));

        p.add(new Pregunta(
            "P12. SELECT * FROM usuarios ORDER BY edad DESC ordena:",
            "a) Ascendente", "b) Descendente (mayor a menor)", "c) Aleatorio", "d) Error",
            "b", "✅ DESC = descendente", "❌ Incorrecto", "DESC = mayor a menor", "ORDER BY", 2
        ));

        p.add(new Pregunta(
            "P13. SELECT COUNT(*) FROM usuarios cuenta:",
            "a) Columnas", "b) Todos los registros (filas)", "c) Tablas", "d) Error",
            "b", "✅ COUNT(*) = total filas", "❌ Incorrecto", "COUNT(*) número registros", "COUNT", 2
        ));

        p.add(new Pregunta(
            "P14. SELECT SUM(salario) FROM empleados calcula:",
            "a) El promedio", "b) El máximo", "c) La suma total", "d) La cantidad",
            "c", "✅ SUM = total", "❌ Incorrecto", "SUM suma valores", "SUM", 2
        ));

        p.add(new Pregunta(
            "P15. SELECT DISTINCT ciudad FROM usuarios devuelve:",
            "a) Todas ciudades repetidas", "b) Ciudades SIN repetir", "c) Primera ciudad", "d) Error",
            "b", "✅ DISTINCT elimina duplicados", "❌ Incorrecto", "DISTINCT sin repetir", "DISTINCT", 2
        ));

        p.add(new Pregunta(
            "P16. SELECT * FROM usuarios GROUP BY ciudad agrupará:",
            "a) Por edad", "b) Por nombre", "c) Por ciudad (un grupo/ciudad)", "d) Error",
            "c", "✅ GROUP BY agrupa", "❌ Incorrecto", "GROUP BY genera grupos", "GROUP BY", 2
        ));

        p.add(new Pregunta(
            "P17. {NOMBRE}, SELECT AVG(edad) FROM usuarios calcula:",
            "a) Edad máxima", "b) Edad mínima", "c) EDAD PROMEDIO", "d) Cantidad",
            "c", "✅ AVG = promedio", "❌ Incorrecto", "AVG media aritmética", "AVG", 2
        ));

        p.add(new Pregunta(
            "P18. SELECT * FROM usuarios WHERE nombre LIKE 'J%' busca:",
            "a) Solo 'J'", "b) Nombres que EMPIEZAN con J", "c) Nombres que terminan J", "d) Error",
            "b", "✅ LIKE 'J%' = empieza con J", "❌ Incorrecto", "% es comodín", "LIKE", 2
        ));

        p.add(new Pregunta(
            "P19. UPDATE usuarios SET edad=30 WHERE id=5 actualiza:",
            "a) Todos los usuarios", "b) Solo usuario id=5", "c) El primero", "d) Error",
            "b", "✅ WHERE especifica", "❌ Incorrecto", "WHERE limita actualización", "UPDATE", 2
        ));

        p.add(new Pregunta(
            "P20. SELECT * FROM usuarios LIMIT 10 devuelve:",
            "a) 10 columnas", "b) 10 tablas", "c) LOS PRIMEROS 10 REGISTROS", "d) 10 tipos datos",
            "c", "✅ LIMIT 10 = primeros 10", "❌ Incorrecto", "LIMIT limita resultados", "LIMIT", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. SELECT * FROM usuarios WHERE edad IN (18,25,30) devuelve:",
            "a) Edades mayores que 30", "b) Edades exactamente 18, 25 o 30", "c) Edad 18-30", "d) Error",
            "b", "✅ IN = valores específicos", "❌ Incorrecto", "IN lista de valores", "WHERE avanzado", 3
        ));

        p.add(new Pregunta(
            "P22. SELECT * FROM usuarios u INNER JOIN pedidos p ON u.id=p.usuario_id:",
            "a) Todas las filas de ambas", "b) Solo coincidencias exactas", "c) Usuarios sin pedidos", "d) Error",
            "b", "✅ INNER JOIN = coincidencias", "❌ Incorrecto", "INNER JOIN solo match", "JOIN", 3
        ));

        p.add(new Pregunta(
            "P23. SELECT * FROM (SELECT * FROM usuarios WHERE edad > 18) subconsulta:",
            "a) Error", "b) Consulta dentro de consulta", "c) Tabla temporal", "d) Ambas b y c",
            "d", "✅ Subconsulta = query dentro query", "❌ Incorrecto", "Subconsulta query anidada", "Subconsultas", 3
        ));

        p.add(new Pregunta(
            "P24. {NOMBRE}, HAVING COUNT(*) > 5 después GROUP BY filtra:",
            "a) Filas", "b) GRUPOS que tienen > 5 elementos", "c) Usuarios", "d) Error",
            "b", "✅ HAVING filtra grupos", "❌ Incorrecto", "HAVING después GROUP BY", "HAVING", 3
        ));

        p.add(new Pregunta(
            "P25. SELECT * FROM usuarios UNION SELECT * FROM clientes combina:",
            "a) Duplicados incluidos", "b) Duplicados EXCLUIDOS", "c) Nada", "d) Error",
            "b", "✅ UNION sin duplicados", "❌ Incorrecto", "UNION DISTINCT", "UNION", 3
        ));

        p.add(new Pregunta(
            "P26. SELECT * FROM usuarios WHERE edad BETWEEN 18 AND 65:",
            "a) Edades < 18 o > 65", "b) EDADES DE 18 A 65 (inclusivo)", "c) Solo 18 o 65", "d) Error",
            "b", "✅ BETWEEN incluye extremos", "❌ Incorrecto", "BETWEEN rango inclusivo", "WHERE avanzado", 3
        ));

        p.add(new Pregunta(
            "P27. CREATE INDEX idx_email ON usuarios(email):",
            "a) Error de sintaxis", "b) Índice en columna email para búsquedas rápidas", "c) Borra email", "d) Nada",
            "b", "✅ Índice acelera búsquedas", "❌ Incorrecto", "Índice optimización", "Índices", 3
        ));

        p.add(new Pregunta(
            "P28. CREATE VIEW usuarios_activos AS SELECT * FROM usuarios WHERE activo=true crea:",
            "a) Tabla nueva", "b) VISTA (consulta guardada reutilizable)", "c) Tabla temporal", "d) Error",
            "b", "✅ Vista = consulta guardada", "❌ Incorrecto", "Vista virtual table", "Vistas", 3
        ));

        p.add(new Pregunta(
            "P29. {NOMBRE}, ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(15):",
            "a) Borra tabla", "b) Elimina columna", "c) AGREGA nueva columna", "d) Error",
            "c", "✅ ALTER TABLE modifica estructura", "❌ Incorrecto", "ALTER TABLE cambios", "DDL", 3
        ));

        p.add(new Pregunta(
            "P30. SELECT * FROM usuarios WHERE NOT (edad < 18) es equivalente a:",
            "a) edad < 18", "b) edad <= 18", "c) EDAD >= 18", "d) edad = 18",
            "c", "✅ NOT invierte condición", "❌ Incorrecto", "NOT operador lógico", "Lógica", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        ConceptosSQL test = new ConceptosSQL();
        test.iniciar();
    }
}

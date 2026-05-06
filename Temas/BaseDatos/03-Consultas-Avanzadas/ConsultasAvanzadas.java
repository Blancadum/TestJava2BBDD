import java.util.ArrayList;

public class ConsultasAvanzadas extends TestAdaptativo {

    public void iniciar() {
        super.iniciarTest("TEST: CONSULTAS AVANZADAS SQL");
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
            "P1. ¿Qué es un JOIN en SQL?",
            "a) Un comando para borrar datos", "b) Una operación que une dos o más tablas", "c) Un tipo de índice", "d) Un filtro de SELECT",
            "b", "✅ JOIN = unir tablas por columna común", "❌ Incorrecto", "JOIN combina filas de tablas", "JOIN", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Qué es INNER JOIN?",
            "a) Error de sintaxis", "b) Retorna SOLO filas que coinciden en ambas tablas", "c) Retorna todas las filas", "d) Retorna filas de la izquierda",
            "b", "✅ INNER JOIN = solo coincidencias", "❌ Incorrecto", "INNER eliminates mismatches", "INNER JOIN", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Cuál es la sintaxis de INNER JOIN?",
            "a) SELECT * FROM t1 JOIN t2 ON t1.id=t2.id", "b) SELECT * FROM t1 INNER JOIN t2 ON t1.id=t2.id", "c) Ambas son correctas", "d) Ninguna",
            "c", "✅ Ambas formas son válidas", "❌ Incorrecto", "JOIN y INNER JOIN son equivalentes", "Sintaxis", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué es LEFT JOIN?",
            "a) Error", "b) Retorna todas filas LEFT + coincidencias RIGHT", "c) Retorna solo LEFT", "d) Lo mismo que INNER",
            "b", "✅ LEFT JOIN = todas de izquierda + matches", "❌ Incorrecto", "LEFT preserves left table", "LEFT JOIN", 1
        ));

        p.add(new Pregunta(
            "P5. ¿Qué es RIGHT JOIN?",
            "a) Lo opuesto a LEFT", "b) Retorna todas filas RIGHT + coincidencias LEFT", "c) Retorna solo RIGHT", "d) Error en SQL",
            "b", "✅ RIGHT JOIN = todas de derecha + matches", "❌ Incorrecto", "RIGHT preserves right table", "RIGHT JOIN", 1
        ));

        p.add(new Pregunta(
            "P6. ¿Qué es FULL OUTER JOIN?",
            "a) Une todas las filas de ambas tablas", "b) Solo coincidencias", "c) Retorna TODAS filas (izq + der) + coincidencias", "d) Error",
            "c", "✅ FULL OUTER = todas las filas de ambas", "❌ Incorrecto", "FULL OUTER combina LEFT + RIGHT", "FULL OUTER", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué es CROSS JOIN?",
            "a) Producto cartesiano de filas", "b) Error de sintaxis", "c) Lo mismo que INNER", "d) Filtra datos",
            "a", "✅ CROSS JOIN = cada fila * cada fila", "❌ Incorrecto", "CROSS cartesian product", "CROSS JOIN", 1
        ));

        p.add(new Pregunta(
            "P8. ¿Cuántas filas retorna CROSS JOIN de tablas 5 y 3 filas?",
            "a) 5", "b) 3", "c) 8", "d) 15 (5*3)",
            "d", "✅ CROSS JOIN = multiplicación de filas", "❌ Incorrecto", "5 x 3 = 15 filas", "CROSS JOIN", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué es una SUBQUERY?",
            "a) Una consulta dentro de otra", "b) Una tabla temporal", "c) Un error", "d) Un índice",
            "a", "✅ Subquery = SELECT anidado", "❌ Incorrecto", "Subquery nested query", "Subquery", 1
        ));

        p.add(new Pregunta(
            "P10. SELECT * FROM usuarios WHERE id IN (SELECT usuario_id FROM pedidos):",
            "a) Retorna usuarios sin pedidos", "b) RETORNA USUARIOS QUE TIENEN PEDIDOS", "c) Retorna pedidos", "d) Error",
            "b", "✅ IN filtra por subquery", "❌ Incorrecto", "IN lista de valores subquery", "Subquery", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. SELECT * FROM usuarios LEFT JOIN pedidos ON usuarios.id=pedidos.usuario_id WHERE pedidos.id IS NULL:",
            "a) Usuarios CON pedidos", "b) USUARIOS SIN pedidos", "c) Todos los usuarios", "d) Error",
            "b", "✅ LEFT + NULL filtra no coincidencias", "❌ Incorrecto", "LEFT con IS NULL = anti-join", "LEFT JOIN", 2
        ));

        p.add(new Pregunta(
            "P12. {NOMBRE}, ¿qué operador usa EXISTS?",
            "a) Compara valores", "b) Verifica si subquery retorna ALGUNA fila", "c) Cuenta filas", "d) Ordena",
            "b", "✅ EXISTS = existe al menos 1 fila", "❌ Incorrecto", "EXISTS subquery not empty", "EXISTS", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Diferencia entre IN y EXISTS?",
            "a) No hay", "b) IN lista valores; EXISTS verifica existencia", "c) IN es más rápido", "d) EXISTS es más viejo",
            "b", "✅ IN = list; EXISTS = existence test", "❌ Incorrecto", "EXISTS más eficiente en subqueries", "Subquery", 2
        ));

        p.add(new Pregunta(
            "P14. SELECT * FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados):",
            "a) Error", "b) EMPLEADOS CON SALARIO MAYOR QUE PROMEDIO", "c) Salario del promedio", "d) Empleados aleatorios",
            "b", "✅ Subquery escalar retorna 1 valor", "❌ Incorrecto", "Scalar subquery en WHERE", "Subquery", 2
        ));

        p.add(new Pregunta(
            "P15. ¿Cuál es una CORRELATED SUBQUERY?",
            "a) Subquery independiente", "b) Subquery que referencia tabla EXTERNA", "c) Subquery con ORDER BY", "d) Error",
            "b", "✅ Correlated referencia tabla padre", "❌ Incorrecto", "Correlated subquery executes per row", "Subquery", 2
        ));

        p.add(new Pregunta(
            "P16. SELECT * FROM usuarios u1 WHERE EXISTS (SELECT 1 FROM usuarios u2 WHERE u2.ciudad=u1.ciudad AND u2.id != u1.id):",
            "a) Error de sintaxis", "b) Usuarios cuya ciudad tiene OTROS usuarios", "c) Todas los usuarios", "d) Usuarios únicos",
            "b", "✅ Correlated EXISTS", "❌ Incorrecto", "Correlated subquery finds duplicates", "Correlated", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Cuál es la diferencia UNION vs UNION ALL?",
            "a) No hay diferencia", "b) UNION elimina duplicados; UNION ALL los incluye", "c) UNION ALL es más rápido", "d) UNION es para DELETE",
            "b", "✅ UNION distinct; UNION ALL keeps duplicates", "❌ Incorrecto", "UNION vs UNION ALL", "UNION", 2
        ));

        p.add(new Pregunta(
            "P18. SELECT * FROM usuarios WHERE edad < 18 UNION SELECT * FROM usuarios WHERE edad > 65:",
            "a) Usuarios entre 18 y 65", "b) USUARIOS < 18 O > 65 (sin duplicados)", "c) Usuarios > 65", "d) Error",
            "b", "✅ UNION combina resultados sin duplicados", "❌ Incorrecto", "UNION for combining results", "UNION", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué es EXCEPT en SQL?",
            "a) Error", "b) Filas de primera query QUE NO están en segunda", "c) Excepciones del servidor", "d) Lo mismo que UNION",
            "b", "✅ EXCEPT = difference set operation", "❌ Incorrecto", "EXCEPT para diferencia", "Set Operations", 2
        ));

        p.add(new Pregunta(
            "P20. ¿Qué es INTERSECT en SQL?",
            "a) Intersección de dos queries", "b) FILAS QUE EXISTEN EN AMBAS queries", "c) Orden de resultados", "d) Error",
            "b", "✅ INTERSECT = common rows", "❌ Incorrecto", "INTERSECT para encontrar comunes", "Set Operations", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. SELECT * FROM empleados e1 JOIN empleados e2 ON e1.manager_id=e2.id:",
            "a) Error", "b) SELF-JOIN: empleados y sus managers", "c) Duplicados", "d) Nada",
            "b", "✅ Self-join une tabla con ella misma", "❌ Incorrecto", "Self-join con alias", "Self-Join", 3
        ));

        p.add(new Pregunta(
            "P22. {NOMBRE}, ¿qué hace ROW_NUMBER()?",
            "a) Cuenta filas", "b) Asigna número único por fila (con OVER)", "c) Ordena filas", "d) Error",
            "b", "✅ ROW_NUMBER window function", "❌ Incorrecto", "ROW_NUMBER() OVER (PARTITION BY)", "Window", 3
        ));

        p.add(new Pregunta(
            "P23. SELECT *, ROW_NUMBER() OVER (PARTITION BY departamento ORDER BY salario DESC) FROM empleados:",
            "a) Error", "b) Ranking de salarios POR departamento", "c) Todos los empleados", "d) Departamentos",
            "b", "✅ Window function con PARTITION", "❌ Incorrecto", "Window function per group", "Window", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es una CTE recursiva?",
            "a) Common Table Expression simple", "b) CTE que se LLAMA A SÍ MISMA (WITH RECURSIVE)", "c) Un error", "d) Un índice",
            "b", "✅ Recursive CTE = hierarchical queries", "❌ Incorrecto", "WITH RECURSIVE para árboles", "Recursive CTE", 3
        ));

        p.add(new Pregunta(
            "P25. WITH RECURSIVE organizacion AS (SELECT * FROM empleados WHERE manager_id IS NULL UNION ALL SELECT e.* FROM empleados e JOIN organizacion o ON e.manager_id=o.id) SELECT * FROM organizacion:",
            "a) Error de sintaxis", "b) ÁRBOL JERÁRQUICO de empleados", "c) Solo empleados sin manager", "d) Duplicados",
            "b", "✅ Recursive CTE builds hierarchy", "❌ Incorrecto", "Hierarchical queries con recursion", "Recursive", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Cuáles son los 3 pasos de optimizar JOINs?",
            "a) Cambiar orden tables", "b) Índices en columnas JOIN + usar EXPLAIN", "c) Ambas", "d) No se puede optimizar",
            "c", "✅ Indices + EXPLAIN + reorder tables", "❌ Incorrecto", "Query optimization estrategia", "Optimization", 3
        ));

        p.add(new Pregunta(
            "P27. EXPLAIN SELECT * FROM usuarios u JOIN pedidos p ON u.id=p.usuario_id:",
            "a) Error", "b) MUESTRA PLAN DE EJECUCIÓN de query", "c) Ejecuta la query", "d) Explica BD",
            "b", "✅ EXPLAIN = execution plan", "❌ Incorrecto", "EXPLAIN para análisis", "EXPLAIN", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Qué significa 'Nested Loop Join' en EXPLAIN?",
            "a) Error de sintaxis", "b) Algoritmo: bucle interno para cada fila externa", "c) Un tipo de índice", "d) Compresión de datos",
            "b", "✅ Nested Loop = O(n*m) algorithm", "❌ Incorrecto", "Join algorithms en EXPLAIN", "Join Algo", 3
        ));

        p.add(new Pregunta(
            "P29. SELECT * FROM usuarios u LEFT JOIN pedidos p ON u.id=p.usuario_id LEFT JOIN pagos pa ON p.id=pa.pedido_id:",
            "a) Error", "b) MÚLTIPLES LEFT JOINs anidados", "c) Solo usuarios", "d) Solo pedidos",
            "b", "✅ Chained JOINs mantienen LEFT", "❌ Incorrecto", "Multiple JOINs execution order", "Multiple", 3
        ));

        p.add(new Pregunta(
            "P30. ¿Cuál es mejor rendimiento: IN subquery vs EXISTS subquery?",
            "a) IN siempre", "b) EXISTS en subqueries correladas (mejor optimizer)", "c) Depende BD", "d) Igual rendimiento",
            "b", "✅ EXISTS generalmente más eficiente", "❌ Incorrecto", "EXISTS vs IN performance", "Performance", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        ConsultasAvanzadas test = new ConsultasAvanzadas();
        test.iniciar();
    }
}

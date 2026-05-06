import java.util.ArrayList;

public class ConsultasAvanzadas extends TestAdaptativo {

    public void iniciar() {
        urlRecurso = "https://josejuansanchez.org/bd/unidad-05-teoria/index.html";
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
            "P1. ¿Qué es un JOIN en SQL?",
            "b) Una operación que une dos o más tablas", "a) Un comando para borrar datos", "c) Un tipo de índice", "b) Una operación que une dos o más tablas",
            "d", "✅ Correcto.", "❌ Incorrecto.", "JOIN combina filas de tablas", "JOIN", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Qué es INNER JOIN?",
            "b) Retorna SOLO filas que coinciden en ambas tablas", "a) Error de sintaxis", "b) Retorna SOLO filas que coinciden en ambas tablas", "d) Retorna filas de la izquierda",
            "c", "✅ Correcto.", "❌ Incorrecto.", "INNER eliminates mismatches", "INNER JOIN", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Cuál es la sintaxis de INNER JOIN?",
            "c) Ambas son correctas", "c) Ambas son correctas", "b) SELECT * FROM t1 INNER JOIN t2 ON t1.id=t2.id", "d) Ninguna",
            "a", "✅ Correcto.", "❌ Incorrecto.", "JOIN y INNER JOIN son equivalentes", "Sintaxis", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué es LEFT JOIN?",
            "b) Retorna todas filas LEFT + coincidencias RIGHT", "c) Retorna solo LEFT", "b) Retorna todas filas LEFT + coincidencias RIGHT", "d) Lo mismo que INNER",
            "a", "✅ Correcto.", "❌ Incorrecto.", "LEFT preserves left table", "LEFT JOIN", 1
        ));

        p.add(new Pregunta(
            "P5. ¿Qué es RIGHT JOIN?",
            "b) Retorna todas filas RIGHT + coincidencias LEFT", "c) Retorna solo RIGHT", "b) Retorna todas filas RIGHT + coincidencias LEFT", "d) Error en SQL",
            "a", "✅ Correcto.", "❌ Incorrecto.", "RIGHT preserves right table", "RIGHT JOIN", 1
        ));

        p.add(new Pregunta(
            "P6. ¿Qué es FULL OUTER JOIN?",
            "c) Retorna TODAS filas (izq + der) + coincidencias", "b) Solo coincidencias", "a) Une todas las filas de ambas tablas", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "FULL OUTER combina LEFT + RIGHT", "FULL OUTER", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué es CROSS JOIN?",
            "c) Lo mismo que INNER", "a) Producto cartesiano de filas", "a) Producto cartesiano de filas", "d) Filtra datos",
            "b", "✅ Correcto.", "❌ Incorrecto.", "CROSS cartesian product", "CROSS JOIN", 1
        ));

        p.add(new Pregunta(
            "P8. ¿Cuántas filas retorna CROSS JOIN de tablas 5 y 3 filas?",
            "d) 15 (5*3)", "d) 15 (5*3)", "c) 8", "a) 5",
            "b", "✅ Correcto.", "❌ Incorrecto.", "5 x 3 = 15 filas", "CROSS JOIN", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué es una SUBQUERY?",
            "b) Una tabla temporal", "a) Una consulta dentro de otra", "c) Un error", "a) Una consulta dentro de otra",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Subquery nested query", "Subquery", 1
        ));

        p.add(new Pregunta(
            "P10. SELECT * FROM usuarios WHERE id IN (SELECT usuario_id FROM pedidos):",
            "b) RETORNA USUARIOS QUE TIENEN PEDIDOS", "a) Retorna usuarios sin pedidos", "c) Retorna pedidos", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "IN lista de valores subquery", "Subquery", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. SELECT * FROM usuarios LEFT JOIN pedidos ON usuarios.id=pedidos.usuario_id WHERE pedidos.id IS NULL:",
            "b) USUARIOS SIN pedidos", "a) Usuarios CON pedidos", "b) USUARIOS SIN pedidos", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "LEFT con IS NULL = anti-join", "LEFT JOIN", 2
        ));

        p.add(new Pregunta(
            "P12. {NOMBRE}, ¿qué operador usa EXISTS?",
            "b) Verifica si subquery retorna ALGUNA fila", "c) Cuenta filas", "b) Verifica si subquery retorna ALGUNA fila", "d) Ordena",
            "a", "✅ Correcto.", "❌ Incorrecto.", "EXISTS subquery not empty", "EXISTS", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Diferencia entre IN y EXISTS?",
            "b) IN lista valores; EXISTS verifica existencia", "a) No hay", "c) IN es más rápido", "b) IN lista valores; EXISTS verifica existencia",
            "d", "✅ Correcto.", "❌ Incorrecto.", "EXISTS más eficiente en subqueries", "Subquery", 2
        ));

        p.add(new Pregunta(
            "P14. SELECT * FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados):",
            "b) EMPLEADOS CON SALARIO MAYOR QUE PROMEDIO", "a) Error", "b) EMPLEADOS CON SALARIO MAYOR QUE PROMEDIO", "d) Empleados aleatorios",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Scalar subquery en WHERE", "Subquery", 2
        ));

        p.add(new Pregunta(
            "P15. ¿Cuál es una CORRELATED SUBQUERY?",
            "b) Subquery que referencia tabla EXTERNA", "a) Subquery independiente", "c) Subquery con ORDER BY", "b) Subquery que referencia tabla EXTERNA",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Correlated subquery executes per row", "Subquery", 2
        ));

        p.add(new Pregunta(
            "P16. SELECT * FROM usuarios u1 WHERE EXISTS (SELECT 1 FROM usuarios u2 WHERE u2.ciudad=u1.ciudad AND u2.id != u1.id):",
            "b) Usuarios cuya ciudad tiene OTROS usuarios", "a) Error de sintaxis", "b) Usuarios cuya ciudad tiene OTROS usuarios", "d) Usuarios únicos",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Correlated subquery finds duplicates", "Correlated", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Cuál es la diferencia UNION vs UNION ALL?",
            "b) UNION elimina duplicados; UNION ALL los incluye", "a) No hay diferencia", "c) UNION ALL es más rápido", "d) UNION es para DELETE",
            "b", "✅ Correcto.", "❌ Incorrecto.", "UNION vs UNION ALL", "UNION", 2
        ));

        p.add(new Pregunta(
            "P18. SELECT * FROM usuarios WHERE edad < 18 UNION SELECT * FROM usuarios WHERE edad > 65:",
            "b) USUARIOS < 18 O > 65 (sin duplicados)", "a) Usuarios entre 18 y 65", "c) Usuarios > 65", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "UNION for combining results", "UNION", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué es EXCEPT en SQL?",
            "b) Filas de primera query QUE NO están en segunda", "a) Error", "c) Excepciones del servidor", "d) Lo mismo que UNION",
            "b", "✅ Correcto.", "❌ Incorrecto.", "EXCEPT para diferencia", "Set Operations", 2
        ));

        p.add(new Pregunta(
            "P20. ¿Qué es INTERSECT en SQL?",
            "b) FILAS QUE EXISTEN EN AMBAS queries", "a) Intersección de dos queries", "c) Orden de resultados", "b) FILAS QUE EXISTEN EN AMBAS queries",
            "d", "✅ Correcto.", "❌ Incorrecto.", "INTERSECT para encontrar comunes", "Set Operations", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. SELECT * FROM empleados e1 JOIN empleados e2 ON e1.manager_id=e2.id:",
            "b) SELF-JOIN: empleados y sus managers", "a) Error", "b) SELF-JOIN: empleados y sus managers", "d) Nada",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Self-join con alias", "Self-Join", 3
        ));

        p.add(new Pregunta(
            "P22. {NOMBRE}, ¿qué hace ROW_NUMBER()?",
            "b) Asigna número único por fila (con OVER)", "a) Cuenta filas", "c) Ordena filas", "b) Asigna número único por fila (con OVER)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "ROW_NUMBER() OVER (PARTITION BY)", "Window", 3
        ));

        p.add(new Pregunta(
            "P23. SELECT *, ROW_NUMBER() OVER (PARTITION BY departamento ORDER BY salario DESC) FROM empleados:",
            "b) Ranking de salarios POR departamento", "c) Todos los empleados", "b) Ranking de salarios POR departamento", "d) Departamentos",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Window function per group", "Window", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es una CTE recursiva?",
            "b) CTE que se LLAMA A SÍ MISMA (WITH RECURSIVE)", "c) Un error", "b) CTE que se LLAMA A SÍ MISMA (WITH RECURSIVE)", "d) Un índice",
            "a", "✅ Correcto.", "❌ Incorrecto.", "WITH RECURSIVE para árboles", "Recursive CTE", 3
        ));

        p.add(new Pregunta(
            "P25. WITH RECURSIVE organizacion AS (SELECT * FROM empleados WHERE manager_id IS NULL UNION ALL SELECT e.* FROM empleados e JOIN organizacion o ON e.manager_id=o.id) SELECT * FROM organizacion:",
            "b) ÁRBOL JERÁRQUICO de empleados", "c) Solo empleados sin manager", "b) ÁRBOL JERÁRQUICO de empleados", "d) Duplicados",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Hierarchical queries con recursion", "Recursive", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Cuáles son los 3 pasos de optimizar JOINs?",
            "c) Ambas", "c) Ambas", "a) Cambiar orden tables", "d) No se puede optimizar",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Query optimization estrategia", "Optimization", 3
        ));

        p.add(new Pregunta(
            "P27. EXPLAIN SELECT * FROM usuarios u JOIN pedidos p ON u.id=p.usuario_id:",
            "b) MUESTRA PLAN DE EJECUCIÓN de query", "c) Ejecuta la query", "b) MUESTRA PLAN DE EJECUCIÓN de query", "d) Explica BD",
            "a", "✅ Correcto.", "❌ Incorrecto.", "EXPLAIN para análisis", "EXPLAIN", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Qué significa 'Nested Loop Join' en EXPLAIN?",
            "b) Algoritmo: bucle interno para cada fila externa", "a) Error de sintaxis", "c) Un tipo de índice", "d) Compresión de datos",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Join algorithms en EXPLAIN", "Join Algo", 3
        ));

        p.add(new Pregunta(
            "P29. SELECT * FROM usuarios u LEFT JOIN pedidos p ON u.id=p.usuario_id LEFT JOIN pagos pa ON p.id=pa.pedido_id:",
            "b) MÚLTIPLES LEFT JOINs anidados", "a) Error", "b) MÚLTIPLES LEFT JOINs anidados", "d) Solo pedidos",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Multiple JOINs execution order", "Multiple", 3
        ));

        p.add(new Pregunta(
            "P30. ¿Cuál es mejor rendimiento: IN subquery vs EXISTS subquery?",
            "b) EXISTS en subqueries correladas (mejor optimizer)", "a) IN siempre", "c) Depende BD", "b) EXISTS en subqueries correladas (mejor optimizer)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "EXISTS vs IN performance", "Performance", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        ConsultasAvanzadas test = new ConsultasAvanzadas();
        test.iniciar();
    }
}

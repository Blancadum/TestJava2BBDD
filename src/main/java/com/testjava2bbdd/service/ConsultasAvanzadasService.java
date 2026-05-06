package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConsultasAvanzadasService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. CROSS JOIN devuelve:",
            "Producto cartesiano (todas combinaciones)", "Solo coincidencias", "Tabla vacía", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "CROSS JOIN = combinación de cada fila con todas del otro",
            "JOINs", 1
        ));

        preguntas.add(new Pregunta(
            "P2. RIGHT JOIN es equivalente a:",
            "LEFT JOIN invertido", "INNER JOIN", "CROSS JOIN", "FULL OUTER",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "RIGHT JOIN = tabla derecha completa + coincidencias",
            "JOINs", 1
        ));

        preguntas.add(new Pregunta(
            "P3. FULL OUTER JOIN devuelve:",
            "Solo coincidencias", "Ambas tablas completas", "Tabla izquierda", "Tabla derecha",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "FULL JOIN = izquierda + derecha + coincidencias",
            "JOINs", 1
        ));

        preguntas.add(new Pregunta(
            "P4. ¿Cuántos JOINs puede tener una query?",
            "Máximo 2", "Máximo 5", "Ilimitado (técnicamente)", "Máximo 10",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "Puede haber múltiples JOINs en una query",
            "JOINs", 1
        ));

        preguntas.add(new Pregunta(
            "P5. Subconsulta correlacionada accede a:",
            "Variables globales", "Tabla externa en cada fila", "Base de datos", "Archivo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Subconsulta correlacionada usa valores de fila actual",
            "Subconsultas", 1
        ));

        preguntas.add(new Pregunta(
            "P6. EXISTS devuelve:",
            "Todas las filas", "TRUE si hay resultados", "Un número", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "EXISTS retorna booleano si subconsulta devuelve datos",
            "Subconsultas", 1
        ));

        preguntas.add(new Pregunta(
            "P7. IN vs EXISTS: ¿cuál es más rápido?",
            "Siempre IN", "Siempre EXISTS", "Depende de datos", "Igual",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "EXISTS suele ser más rápido con muchas filas",
            "Optimización", 1
        ));

        preguntas.add(new Pregunta(
            "P8. CASE WHEN NULL THEN: ¿ejecuta THEN?",
            "Sí", "No (NULL no es TRUE ni FALSE)", "Error", "Depende",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "NULL en condición CASE no ejecuta THEN",
            "CASE", 1
        ));

        preguntas.add(new Pregunta(
            "P9. COALESCE(NULL, NULL, 'valor'):",
            "Error", "NULL", "'valor'", "Desconocido",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "COALESCE devuelve primer no-NULL",
            "Funciones", 1
        ));

        preguntas.add(new Pregunta(
            "P10. NULLIF(5, 5) devuelve:",
            "5", "NULL", "Error", "TRUE",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "NULLIF devuelve NULL si argumentos son iguales",
            "Funciones", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. Subconsulta en FROM requiere:",
            "Alias obligatorio", "Alias opcional", "Nada especial", "Error siempre",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Subconsulta en FROM (tabla derivada) necesita alias",
            "Subconsultas", 2
        ));

        preguntas.add(new Pregunta(
            "P12. SELECT * FROM (SELECT...) t WHERE: ¿válido?",
            "No", "Sí, con alias 't'", "Solo con GROUP BY", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Alias permite usar subconsulta como tabla",
            "Subconsultas", 2
        ));

        preguntas.add(new Pregunta(
            "P13. WITH nombre AS (...) SELECT utiliza:",
            "Subquery", "CTE (Common Table Expression)", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "WITH define CTE reutilizable en query",
            "CTE", 2
        ));

        preguntas.add(new Pregunta(
            "P14. CTE recursiva requiere:",
            "RECURSIVE en WITH", "Un UNION", "Una condición base", "Todas anteriores",
            "d", "✅ Correcto.", "❌ Incorrecto.",
            "Recursiva necesita: WITH RECURSIVE, condición base, UNION, recursión",
            "CTE", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Window Function OVER(): ¿qué define?",
            "Subset datos para función", "Tabla completa", "Schema", "Índice",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "OVER define ventana (partition/order) para función",
            "Window Functions", 2
        ));

        preguntas.add(new Pregunta(
            "P16. ROW_NUMBER() vs RANK() en empates:",
            "Igual", "ROW_NUMBER sin saltos, RANK con saltos", "RANK sin saltos", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ROW_NUMBER: 1,2,3,4; RANK: 1,2,2,4 (con saltos)",
            "Window Functions", 2
        ));

        preguntas.add(new Pregunta(
            "P17. LAG(col,1) devuelve:",
            "Valor actual", "Valor fila anterior", "Valor siguiente", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LAG accede a fila anterior en partición",
            "Window Functions", 2
        ));

        preguntas.add(new Pregunta(
            "P18. PARTITION BY en window function agrupa por:",
            "Columna (crea subconjuntos)", "Tabla completa", "Índice", "Primary key",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "PARTITION BY divide datos en grupos para función",
            "Window Functions", 2
        ));

        preguntas.add(new Pregunta(
            "P19. ORDER BY en OVER() afecta a:",
            "Resultado final", "Orden dentro de partición para función", "Nada", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ORDER BY en OVER define orden de cálculo",
            "Window Functions", 2
        ));

        preguntas.add(new Pregunta(
            "P20. FILTER (WHERE cond) en agregada:",
            "Filtra filas antes agregación", "Error", "Filtra después", "No existe",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "FILTER aplica WHERE a función agregada",
            "Agregadas", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. LATERAL JOIN en PostgreSQL es para:",
            "Lateral= derecha puede referenciar izquierda", "Tablas grandes", "Unión temporal", "Backup",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "LATERAL permite RIGHT referenciar LEFT en cada fila",
            "JOINs Avanzados", 3
        ));

        preguntas.add(new Pregunta(
            "P22. JSON operators ->'campo' vs ->>'campo':",
            "Igual", "-> devuelve JSON, ->> devuelve texto", "Opuesto", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Operadores JSON: -> (JSON) vs ->> (texto)",
            "JSON", 3
        ));

        preguntas.add(new Pregunta(
            "P23. ARRAY_AGG(col) agrupa en:",
            "Tabla", "Array (vector)", "Texto", "Número",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ARRAY_AGG combina valores en array",
            "Agregadas", 3
        ));

        preguntas.add(new Pregunta(
            "P24. STRING_AGG(col, ',') es para:",
            "Contar", "Concatenar con separador", "Promediar", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "STRING_AGG une textos con separador",
            "Agregadas", 3
        ));

        preguntas.add(new Pregunta(
            "P25. INTERSECT devuelve:",
            "Filas de A o B", "Filas en AMBAS consultas", "Filas en A no en B", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "INTERSECT = filas comunes a dos SELECT",
            "Operadores Conjunto", 3
        ));

        preguntas.add(new Pregunta(
            "P26. EXCEPT devuelve:",
            "Filas comunes", "Filas en A pero NO en B", "Todas filas", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "EXCEPT = filas en A minus filas en B",
            "Operadores Conjunto", 3
        ));

        preguntas.add(new Pregunta(
            "P27. Subquery con ALL: WHERE col > ALL(...)",
            "Mayor que alguno", "Mayor que TODOS", "Menor que todos", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ALL requiere cumplir condición para todos valores",
            "Subconsultas", 3
        ));

        preguntas.add(new Pregunta(
            "P28. HAVING vs WHERE: ¿diferencia?",
            "Igual", "WHERE filtra filas, HAVING filtra grupos", "WHERE para grupos", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "WHERE antes agregación, HAVING después",
            "Claúsulas", 3
        ));

        preguntas.add(new Pregunta(
            "P29. OVER (ORDER BY col ROWS BETWEEN 2 PRECEDING AND CURRENT ROW):",
            "Ventana 1 fila", "Ventana 3 filas (2 ant + actual)", "Tabla completa", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ROWS BETWEEN define rango en partición",
            "Window Functions", 3
        ));

        preguntas.add(new Pregunta(
            "P30. Índice compuesto (col1, col2) optimiza:",
            "Solo col1", "col1 y col1+col2 (order importa)", "Solo col2", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Índice compuesto: prefijo coincide, orden crítico",
            "Optimización", 3
        ));

        return preguntas;
    }
}

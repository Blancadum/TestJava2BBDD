package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConceptosSQLService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA (10 PREGUNTAS)
        preguntas.add(new Pregunta(
            "P1. Escribir SELECT * FROM usuarios devuelve:",
            "Solo la primera fila", "Todas las columnas de todas las filas", "Una sola columna", "Un error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SELECT * devuelve TODAS las columnas y TODAS las filas",
            "SELECT básico", 1
        ));

        preguntas.add(new Pregunta(
            "P2. ¿Cuál es la sintaxis correcta de INSERT?",
            "ADD tabla (...)", "INSERT INTO tabla VALUES(...)", "CREATE tabla (...)", "MODIFY tabla",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "INSERT INTO tabla(col1,col2) VALUES(val1,val2)",
            "INSERT", 1
        ));

        preguntas.add(new Pregunta(
            "P3. UPDATE usuarios SET nombre='Juan' actualiza:",
            "Solo el primer usuario", "Todos los usuarios (SIN WHERE!)", "Ninguno", "Error de sintaxis",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "CRÍTICO: UPDATE sin WHERE modifica TODAS las filas",
            "UPDATE", 1
        ));

        preguntas.add(new Pregunta(
            "P4. DELETE FROM usuarios sin WHERE:",
            "Borra un usuario", "Borra TODOS los usuarios", "Error", "Solo la última fila",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "PELIGRO: DELETE sin WHERE borra TODA la tabla",
            "DELETE", 1
        ));

        preguntas.add(new Pregunta(
            "P5. VARCHAR(50) en SQL significa:",
            "50 números", "Texto de máximo 50 caracteres", "Número decimal", "Booleano",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "VARCHAR(n)=texto variable máximo n caracteres",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P6. INT en SQL almacena:",
            "Texto", "Números enteros", "Decimales", "Fechas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "INT=números enteros sin decimales",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P7. PRIMARY KEY garantiza que:",
            "Todos los valores sean iguales", "El valor sea único e identifique fila", "No haya más datos", "Sea nulo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "PRIMARY KEY=garantiza valores ÚNICOS",
            "PK", 1
        ));

        preguntas.add(new Pregunta(
            "P8. FOREIGN KEY establece:",
            "Una columna separada", "Una relación entre tablas", "Un índice", "Una restricción de texto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "FK vincula una columna a otra tabla",
            "FK", 1
        ));

        preguntas.add(new Pregunta(
            "P9. ¿Qué es un índice en BD?",
            "Una fila", "Una estructura que acelera búsquedas", "Un tipo de dato", "Una copia de la tabla",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Índice=estructura para búsquedas rápidas",
            "Índices", 1
        ));

        preguntas.add(new Pregunta(
            "P10. WHERE en SELECT filtra:",
            "Las columnas a mostrar", "Las filas según una condición", "Las tablas", "El resultado final",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "WHERE filtra filas que cumplen la condición",
            "WHERE", 1
        ));

        // NIVEL 2: MEDIA (10 PREGUNTAS)
        preguntas.add(new Pregunta(
            "P11. SELECT col1, col2 FROM tabla ORDER BY col1:",
            "Muestra solo 2 columnas", "Muestra datos ordenados por col1", "Ordena la tabla", "Crea una nueva columna",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ORDER BY ordena resultados ASC (defecto) o DESC",
            "ORDER BY", 2
        ));

        preguntas.add(new Pregunta(
            "P12. ¿Qué hace LIMIT 5?",
            "Limita el tamaño de la tabla", "Devuelve solo 5 filas", "Limita caracteres", "Limita columnas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LIMIT 5 retorna máximo 5 registros",
            "LIMIT", 2
        ));

        preguntas.add(new Pregunta(
            "P13. COUNT(*) retorna:",
            "La primera fila", "El número total de filas", "El número de columnas", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "COUNT(*) cuenta todas las filas",
            "Agregados", 2
        ));

        preguntas.add(new Pregunta(
            "P14. SUM(salario) calcula:",
            "El salario mínimo", "La suma de todos los salarios", "El promedio", "El máximo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SUM suma valores de una columna",
            "Agregados", 2
        ));

        preguntas.add(new Pregunta(
            "P15. AVG(edad) calcula:",
            "Edad máxima", "Edad mínima", "Promedio de edades", "Número de personas",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "AVG calcula el promedio",
            "Agregados", 2
        ));

        preguntas.add(new Pregunta(
            "P16. GROUP BY agrupa resultados por:",
            "Una fila", "Valores únicos de una columna", "Fecha", "Número de registros",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "GROUP BY agrupa para usar funciones agregadas",
            "GROUP BY", 2
        ));

        preguntas.add(new Pregunta(
            "P17. HAVING filtra resultados de:",
            "WHERE", "Funciones agregadas (GROUP BY)", "Columnas", "Tablas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "HAVING es como WHERE pero para GROUP BY",
            "HAVING", 2
        ));

        preguntas.add(new Pregunta(
            "P18. LIKE '%abc' busca:",
            "Exactamente 'abc'", "Textos que terminen con 'abc'", "Textos que comiencen con 'abc'", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "% es comodín: '%abc' = termina con abc",
            "LIKE", 2
        ));

        preguntas.add(new Pregunta(
            "P19. INNER JOIN devuelve:",
            "Todas las filas de ambas tablas", "Solo filas que coinciden en ambas", "Solo filas de la primera", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "INNER JOIN=intersección de datos",
            "JOINs", 2
        ));

        preguntas.add(new Pregunta(
            "P20. LEFT JOIN devuelve:",
            "Solo coincidencias", "Todas las de izqda + coincidencias", "Solo la tabla izqda", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LEFT JOIN=izqda completa + coincidencias",
            "JOINs", 2
        ));

        // NIVEL 3: ALTA (10 PREGUNTAS)
        preguntas.add(new Pregunta(
            "P21. UNION combina resultados de:",
            "Dos JOINs", "Dos SELECT (sin duplicados)", "Dos WHEREs", "Dos tablas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "UNION combina SELECT eliminando duplicados",
            "UNION", 3
        ));

        preguntas.add(new Pregunta(
            "P22. Subconsulta SELECT dentro de SELECT:",
            "Es inválida", "Sí, se permite", "Solo en WHERE", "Solo en FROM",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Subconsultas son SELECT anidados",
            "Subconsultas", 3
        ));

        preguntas.add(new Pregunta(
            "P23. CTE (WITH) sirve para:",
            "Crear tablas", "Definir consultas reutilizables", "Cambiar datos", "Borrar filas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "CTE = Common Table Expression = vista temporal",
            "CTE", 3
        ));

        preguntas.add(new Pregunta(
            "P24. Window Function RANK() devuelve:",
            "Número secuencial", "Posición con saltos en empates", "Posición sin saltos", "Promedio",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "RANK() permite saltos en empates",
            "Window Functions", 3
        ));

        preguntas.add(new Pregunta(
            "P25. CASE WHEN es como:",
            "IF-THEN en SQL", "Un JOIN", "Un UPDATE", "Un DELETE",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "CASE=condicional SQL",
            "CASE", 3
        ));

        preguntas.add(new Pregunta(
            "P26. TRIGGER se ejecuta automáticamente cuando:",
            "Se escribe código", "Ocurre un evento (INSERT/UPDATE/DELETE)", "Se reinicia BD", "Nunca",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "TRIGGER=procedimiento que se ejecuta automáticamente",
            "Triggers", 3
        ));

        preguntas.add(new Pregunta(
            "P27. VIEW es una:",
            "Tabla física", "Consulta guardada (tabla virtual)", "Fila", "Columna",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "VIEW=SELECT guardado que actúa como tabla",
            "Views", 3
        ));

        preguntas.add(new Pregunta(
            "P28. DISTINCT elimina:",
            "Duplicados", "Filas nulas", "Espacios", "Caracteres",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "DISTINCT muestra valores únicos",
            "DISTINCT", 3
        ));

        preguntas.add(new Pregunta(
            "P29. CAST(valor AS tipo) convierte:",
            "Valor a otro tipo de dato", "Columna a tabla", "Tabla a columna", "Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "CAST cambia tipo de dato",
            "CAST", 3
        ));

        preguntas.add(new Pregunta(
            "P30. Normalización 3NF evita:",
            "Duplicados de datos", "Dependencias transitivas", "Crecimiento", "Lentitud",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "3NF=3ª Forma Normal elimina anomalías",
            "Normalización", 3
        ));

        return preguntas;
    }
}

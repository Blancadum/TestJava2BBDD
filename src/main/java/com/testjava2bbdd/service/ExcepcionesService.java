package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExcepcionesService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. Exception en Java es:",
            "Error normal", "Evento anómalo/error manejable", "Compilación", "Variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Exception = error que se puede capturar",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. try-catch sirve para:",
            "Ignorar", "Capturar y manejar excepciones", "Compilar", "Ejecutar",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "try-catch previene crash de programa",
            "Manejo", 1
        ));

        preguntas.add(new Pregunta(
            "P3. throw lanza:",
            "Error", "Una excepción", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "throw = crear excepción",
            "Lanzamiento", 1
        ));

        preguntas.add(new Pregunta(
            "P4. catch (Exception e) atrapa:",
            "Clase", "Cualquier excepción de tipo Exception", "Método", "Variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "catch = tipo específico de excepción",
            "Manejo", 1
        ));

        preguntas.add(new Pregunta(
            "P5. finally en try-catch ejecuta:",
            "Nunca", "Siempre (limpieza)", "Si hay error", "Si no hay error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "finally = código ejecutado siempre",
            "Manejo", 1
        ));

        preguntas.add(new Pregunta(
            "P6. NullPointerException es cuando:",
            "Falta parámetro", "Acceder atributo de null", "Variable nula", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "NPE = usar null como objeto",
            "Excepciones", 1
        ));

        preguntas.add(new Pregunta(
            "P7. ArrayIndexOutOfBoundsException es:",
            "Array vacío", "Índice fuera rango", "Sin elementos", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "AIOOBE = índice >= longitud",
            "Excepciones", 1
        ));

        preguntas.add(new Pregunta(
            "P8. ClassCastException es cuando:",
            "Cast inválido", "Conversión tipo incompatible", "Herencia", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "CCE = (Tipo) objeto incompatible",
            "Excepciones", 1
        ));

        preguntas.add(new Pregunta(
            "P9. ArithmeticException es cuando:",
            "Operación lenta", "División por cero", "Número grande", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "AE = 5 / 0 lanza excepción",
            "Excepciones", 1
        ));

        preguntas.add(new Pregunta(
            "P10. Checked exception obliga:",
            "Ignorar", "Capturar o declarar (throws)", "Lanzar", "Compilar",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Checked = try-catch o throws obligatorio",
            "Tipos", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. Unchecked exception:",
            "Requiere captura", "No requiere captura (Runtime)", "Compilación", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Unchecked (Runtime) = opcionales",
            "Tipos", 2
        ));

        preguntas.add(new Pregunta(
            "P12. throws en método declara:",
            "Agrupación excepciones", "Excepciones que PUEDE lanzar", "Captura", "Manejo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "throws = responsabilidad a llamador",
            "Declaración", 2
        ));

        preguntas.add(new Pregunta(
            "P13. e.getMessage() retorna:",
            "Tipo error", "Descripción excepción", "Línea", "Stack",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "getMessage() = mensaje error",
            "Métodos", 2
        ));

        preguntas.add(new Pregunta(
            "P14. e.printStackTrace() imprime:",
            "Un mensaje", "Rastreo completo pila (stack trace)", "Tipo", "Línea",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "printStackTrace() = stack completo",
            "Métodos", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Múltiples catch para:",
            "Mismo error", "Diferentes excepciones (orden importa)", "Una", "Todas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "catch múltiples = tipos diferentes",
            "Manejo", 2
        ));

        preguntas.add(new Pregunta(
            "P16. Catch (IOException | SQLException e):",
            "Enum", "Captura múltiples tipos (Java 7+)", "Una", "Todas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Multi-catch = varios tipos con |",
            "Manejo", 2
        ));

        preguntas.add(new Pregunta(
            "P17. Custom exception hereda de:",
            "Object", "Exception (o subclase)", "Throwable", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Custom extends Exception",
            "Personalización", 2
        ));

        preguntas.add(new Pregunta(
            "P18. super(mensaje) en custom exception:",
            "Constructor", "Pasa mensaje a clase padre", "Variable", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "super() inicializa Exception",
            "Personalización", 2
        ));

        preguntas.add(new Pregunta(
            "P19. try-with-resources (Java 7+):",
            "Sintaxis", "Cierra recursos automáticamente", "Captura", "Manejo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "try(recurso) cierra sin finally",
            "Manejo", 2
        ));

        preguntas.add(new Pregunta(
            "P20. FileNotFoundException es:",
            "Checked", "Excepción archivo no existe", "Runtime", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "FNFE = checked exception",
            "Excepciones", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. Error vs Exception diferencia:",
            "Igual", "Error=grave sistema, Exception=recuperable", "Opuesto", "No hay",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Error no se captura (OutOfMemoryError)",
            "Jerarquía", 3
        ));

        preguntas.add(new Pregunta(
            "P22. Throwable es superclase de:",
            "Exception", "Exception y Error", "Object", "RuntimeException",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Throwable = raíz excepciones",
            "Jerarquía", 3
        ));

        preguntas.add(new Pregunta(
            "P23. RuntimeException es:",
            "Checked", "Unchecked (no requiere captura)", "Compilación", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "RuntimeException = sin try-catch",
            "Tipos", 3
        ));

        preguntas.add(new Pregunta(
            "P24. e.getCause() retorna:",
            "Mensaje", "Excepción que causó esta", "Tipo", "Línea",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "getCause() = excepción anidada",
            "Métodos", 3
        ));

        preguntas.add(new Pregunta(
            "P25. Excepción anidada (cause) crea:",
            "Error", "Cadena excepciones (raíz)", "Tipo", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Nested exceptions = origen real",
            "Avanzado", 3
        ));

        preguntas.add(new Pregunta(
            "P26. suppress() método (Java 7+):",
            "Oculta", "Suprime excepciones secundarias", "Captura", "Lanza",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "addSuppressed() = excepciones ignoradas",
            "Avanzado", 3
        ));

        preguntas.add(new Pregunta(
            "P27. finally se salta SI:",
            "Error", "System.exit() o thread muere", "Excepción", "Return",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "finally = siempre excepto muerte thread",
            "Manejo", 3
        ));

        preguntas.add(new Pregunta(
            "P28. Checked IOException hereda de:",
            "Exception", "Exception directa", "RuntimeException", "Throwable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "IOException extends Exception",
            "Jerarquía", 3
        ));

        preguntas.add(new Pregunta(
            "P29. NumberFormatException es:",
            "Checked", "Unchecked (Runtime)", "Compilación", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "NFE = Integer.parseInt(\"abc\") unchecked",
            "Tipos", 3
        ));

        preguntas.add(new Pregunta(
            "P30. Best Practice en excepciones:",
            "Ignorar catch(Exception e){}", "Especificar tipo, loguear, relanzar si necesario", "Cualquier cosa", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Específico, logging, decisión",
            "Mejores Prácticas", 3
        ));

        return preguntas;
    }
}

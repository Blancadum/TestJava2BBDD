import java.util.ArrayList;

public class Excepciones extends TestAdaptativo {
    public void iniciar() {
        urlRecurso = "https://www.w3schools.com/JAVA/";
        super.iniciarTest("TEST: EXCEPCIONES PERSONALIZADAS");
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
        System.out.println("\n════════════════════════════════════════════════════");
        System.out.println("📝 PREGUNTA");
        System.out.println("════════════════════════════════════════════════════");
        System.out.println("\033[1m" + incluirNombre(p.getTexto()) + "\033[0m");
        System.out.println();
        System.out.println("  a) " + p.getOpcionA());
        System.out.println("  b) " + p.getOpcionB());
        System.out.println("  c) " + p.getOpcionC());
        System.out.println("  d) " + p.getOpcionD());
        System.out.println("════════════════════════════════════════════════════");
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
        System.out.println("\n════════════════════════════════════════════════════");
        System.out.println(ok ? "✅ RESPUESTA CORRECTA" : "❌ RESPUESTA INCORRECTA");
        System.out.println("════════════════════════════════════════════════════");
        System.out.println(ok ? p.getMensajeOK() : p.getMensajeError());
        System.out.println();
        System.out.println("💡 EXPLICACIÓN:");
        System.out.println(p.getSugerencia());
        System.out.println("════════════════════════════════════════════════════");
        if (!ok) conceptosDebiles.add(p.getConcepto());
    }

    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // NIVEL 1: BAJA (10)
        p.add(new Pregunta(
            "P1. ¿Qué es una excepción?",
            "b) Un evento anormal que interrumpe flujo", "c) Una variable", "b) Un evento anormal que interrumpe flujo", "d) Un método",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Evento anormal", "Excepciones", 1
        ));
        p.add(new Pregunta(
            "P2. ¿Cuál es la clase padre de excepciones?",
            "c) Throwable", "c) Throwable", "b) Exception", "d) RuntimeException",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Throwable es raíz", "Jerarquía", 1
        ));
        p.add(new Pregunta(
            "P3. ¿Qué es Exception?",
            "b) Excepciones que se pueden manejar", "a) Un error fatal", "c) Una clase abstracta", "b) Excepciones que se pueden manejar",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Excepciones manejables", "Exception", 1
        ));
        p.add(new Pregunta(
            "P4. ¿Qué es RuntimeException?",
            "b) Excepciones del compilador", "a) Excepciones en tiempo de ejecución", "c) Un tipo de clase", "a) Excepciones en tiempo de ejecución",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Excepciones en runtime", "RuntimeException", 1
        ));
        p.add(new Pregunta(
            "P5. ¿Cuál es la palabra clave para lanzar excepción?",
            "b) throw", "a) throws", "c) catch", "b) throw",
            "d", "✅ Correcto.", "❌ Incorrecto.", "throw lanza", "throw", 1
        ));
        p.add(new Pregunta(
            "P6. ¿Cuál es la palabra clave para declarar que un método lanza?",
            "b) throws", "a) throw", "b) throws", "d) try",
            "c", "✅ Correcto.", "❌ Incorrecto.", "throws declara", "throws", 1
        ));
        p.add(new Pregunta(
            "P7. ¿Cómo se captura una excepción?",
            "b) try-catch", "a) if-else", "c) while", "d) for",
            "b", "✅ Correcto.", "❌ Incorrecto.", "try-catch captura", "try-catch", 1
        ));
        p.add(new Pregunta(
            "P8. {NOMBRE}, ¿qué va en try?",
            "b) Código que no falla", "a) Código que puede fallar", "a) Código que puede fallar", "d) Métodos",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Código riesgoso", "try", 1
        ));
        p.add(new Pregunta(
            "P9. ¿Qué va en catch?",
            "b) Código si excepción ocurre", "c) Declaraciones", "b) Código si excepción ocurre", "d) Métodos",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Manejo de error", "catch", 1
        ));
        p.add(new Pregunta(
            "P10. ¿Qué es finally?",
            "b) Se ejecuta siempre, error o no", "a) El final del programa", "b) Se ejecuta siempre, error o no", "d) Una clase",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Siempre se ejecuta", "finally", 1
        ));

        // NIVEL 2: MEDIA (10)
        p.add(new Pregunta(
            "P11. ¿Diferencia entre checked y unchecked?",
            "b) Checked=compilación, Unchecked=runtime", "a) No hay", "c) Checked es mejor", "d) Depende",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Tipo datos", "Tipo datos", 2
        ));
        p.add(new Pregunta(
            "P12. ¿Cuál es una excepciones checked?",
            "b) IOException", "c) ArithmeticException", "b) IOException", "d) ArrayIndexOutOfBoundsException",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Debe manejarse", "Checked", 2
        ));
        p.add(new Pregunta(
            "P13. ¿Cuál es una excepciones unchecked?",
            "c) NullPointerException", "c) NullPointerException", "b) SQLException", "d) ClassNotFoundException",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Runtime exception", "Unchecked", 2
        ));
        p.add(new Pregunta(
            "P14. ¿Qué es una excepción personalizada?",
            "b) Clase que extiende Exception", "a) Una clase normal", "c) Un error del sistema", "d) Un constructor",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Extiende Exception", "Custom", 2
        ));
        p.add(new Pregunta(
            "P15. ¿Por qué usar excepciones personalizadas?",
            "b) Manejar errores específicos", "a) Para decoración", "c) Acelerar código", "d) Nada importante",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Control flujo", "Custom", 2
        ));
        p.add(new Pregunta(
            "P16. ¿Puedo tener múltiples catch?",
            "b) Sí, uno por excepción", "c) Depende", "b) Sí, uno por excepción", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Múltiples catch", "try-catch", 2
        ));
        p.add(new Pregunta(
            "P17. {NOMBRE}, ¿qué hace getMessage()?",
            "b) Obtiene mensaje de excepción", "a) Nada", "c) Crea mensaje", "d) Lanza excepción",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Obtiene mensaje", "Métodos", 2
        ));
        p.add(new Pregunta(
            "P18. ¿Qué hace printStackTrace()?",
            "b) Muestra traza del error", "a) Imprime nada", "c) Crea error", "d) Limpia error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Traza de pila", "Métodos", 2
        ));
        p.add(new Pregunta(
            "P19. ¿Se puede rethrow una excepción?",
            "b) Sí, en catch", "a) No", "c) Solo en finally", "b) Sí, en catch",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Relanzar excepción", "Rethrow", 2
        ));
        p.add(new Pregunta(
            "P20. ¿Qué significa 'throws Exception'?",
            "b) Declara que puede lanzar", "a) Lanza excepción", "b) Declara que puede lanzar", "d) Crea error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Declara posible error", "throws", 2
        ));

        // NIVEL 3: ALTA (10)
        p.add(new Pregunta(
            "P21. ¿Cuál es el orden: try-catch-finally?",
            "b) try, luego catch, luego finally", "a) Cualquier orden", "c) finally primero", "d) Depende",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Orden de bloques", "Orden", 3
        ));
        p.add(new Pregunta(
            "P22. Si try y finally retornan, ¿cuál gana?",
            "b) finally", "a) try", "c) Ninguno", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "finally siempre gana", "finally", 3
        ));
        p.add(new Pregunta(
            "P23. ¿Qué es una cadena de excepciones?",
            "b) Lanzar una que causa otra", "a) Múltiples try", "b) Lanzar una que causa otra", "d) Un error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Causa encadenada", "Cadena", 3
        ));
        p.add(new Pregunta(
            "P24. {NOMBRE}, ¿puedo crear excepciones sin extends?",
            "b) No, debe extender Throwable", "a) Sí", "c) Depende", "b) No, debe extender Throwable",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Debe heredar", "Custom", 3
        ));
        p.add(new Pregunta(
            "P25. ¿Cuál es mejor: throw o throws?",
            "c) Depends en contexto", "b) Siempre throws", "a) Siempre throw", "d) Iguales",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Contexto lo decide", "Decisión", 3
        ));
        p.add(new Pregunta(
            "P26. Si método A llama B (con throws), ¿qué hace A?",
            "b) Debe capturar o declarar", "a) Ignora", "c) Siempre captura", "b) Debe capturar o declarar",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Propagar o capturar", "Propagación", 3
        ));
        p.add(new Pregunta(
            "P27. ¿Qué es try-with-resources?",
            "b) Cierra recursos automáticamente", "a) Un error", "c) Un tipo de datos", "b) Cierra recursos automáticamente",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Auto-cierre", "try-with", 3
        ));
        p.add(new Pregunta(
            "P28. ¿Cuál es la excepción padre de todas?",
            "c) Throwable", "c) Throwable", "b) RuntimeException", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Raíz de jerarquía", "Jerarquía", 3
        ));
        p.add(new Pregunta(
            "P29. {NOMBRE}, ¿puedo capturar Exception y RuntimeException?",
            "b) Sí, Exception captura ambas", "c) Solo una", "b) Sí, Exception captura ambas", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Exception es padre", "Herencia", 3
        ));
        p.add(new Pregunta(
            "P30. ¿Cuándo NO necesito try-catch?",
            "b) RuntimeException no obliga", "a) Nunca", "b) RuntimeException no obliga", "d) Depende",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Unchecked opcional", "Obligatoriedad", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        Excepciones test = new Excepciones();
        test.iniciar();
    }
}

import java.util.ArrayList;

public class Excepciones extends TestAdaptativo {
    public void iniciar() {
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

        // NIVEL 1: BAJA (10)
        p.add(new Pregunta("P1. ¿Qué es una excepción?", "a) Un error", "b) Un evento anormal que interrumpe flujo", "c) Una variable", "d) Un método", "b", "✅", "❌", "Evento anormal", "Excepciones", 1));
        p.add(new Pregunta("P2. ¿Cuál es la clase padre de excepciones?", "a) Error", "b) Exception", "c) Throwable", "d) RuntimeException", "c", "✅", "❌", "Throwable es raíz", "Jerarquía", 1));
        p.add(new Pregunta("P3. ¿Qué es Exception?", "a) Un error fatal", "b) Excepciones que se pueden manejar", "c) Una clase abstracta", "d) Un error", "b", "✅", "❌", "Excepciones manejables", "Exception", 1));
        p.add(new Pregunta("P4. ¿Qué es RuntimeException?", "a) Excepciones en tiempo de ejecución", "b) Excepciones del compilador", "c) Un tipo de clase", "d) Un método", "a", "✅", "❌", "Excepciones en runtime", "RuntimeException", 1));
        p.add(new Pregunta("P5. ¿Cuál es la palabra clave para lanzar excepción?", "a) throws", "b) throw", "c) catch", "d) try", "b", "✅", "❌", "throw lanza", "throw", 1));
        p.add(new Pregunta("P6. ¿Cuál es la palabra clave para declarar que un método lanza?", "a) throw", "b) throws", "c) catch", "d) try", "b", "✅", "❌", "throws declara", "throws", 1));
        p.add(new Pregunta("P7. ¿Cómo se captura una excepción?", "a) if-else", "b) try-catch", "c) while", "d) for", "b", "✅", "❌", "try-catch captura", "try-catch", 1));
        p.add(new Pregunta("P8. {NOMBRE}, ¿qué va en try?", "a) Código que puede fallar", "b) Código que no falla", "c) Declaraciones", "d) Métodos", "a", "✅", "❌", "Código riesgoso", "try", 1));
        p.add(new Pregunta("P9. ¿Qué va en catch?", "a) Código normal", "b) Código si excepción ocurre", "c) Declaraciones", "d) Métodos", "b", "✅", "❌", "Manejo de error", "catch", 1));
        p.add(new Pregunta("P10. ¿Qué es finally?", "a) El final del programa", "b) Se ejecuta siempre, error o no", "c) Un constructor", "d) Una clase", "b", "✅", "❌", "Siempre se ejecuta", "finally", 1));

        // NIVEL 2: MEDIA (10)
        p.add(new Pregunta("P11. ¿Diferencia entre checked y unchecked?", "a) No hay", "b) Checked=compilación, Unchecked=runtime", "c) Checked es mejor", "d) Depende", "b", "✅", "❌", "Tipos de excepciones", "Tipos", 2));
        p.add(new Pregunta("P12. ¿Cuál es una excepciones checked?", "a) NullPointerException", "b) IOException", "c) ArithmeticException", "d) ArrayIndexOutOfBoundsException", "b", "✅", "❌", "Debe manejarse", "Checked", 2));
        p.add(new Pregunta("P13. ¿Cuál es una excepciones unchecked?", "a) IOException", "b) SQLException", "c) NullPointerException", "d) ClassNotFoundException", "c", "✅", "❌", "Runtime exception", "Unchecked", 2));
        p.add(new Pregunta("P14. ¿Qué es una excepción personalizada?", "a) Una clase normal", "b) Clase que extiende Exception", "c) Un error del sistema", "d) Un constructor", "b", "✅", "❌", "Extiende Exception", "Custom", 2));
        p.add(new Pregunta("P15. ¿Por qué usar excepciones personalizadas?", "a) Para decoración", "b) Manejar errores específicos", "c) Acelerar código", "d) Nada importante", "b", "✅", "❌", "Control específico", "Custom", 2));
        p.add(new Pregunta("P16. ¿Puedo tener múltiples catch?", "a) No", "b) Sí, uno por excepción", "c) Depende", "d) Error", "b", "✅", "❌", "Múltiples catch", "try-catch", 2));
        p.add(new Pregunta("P17. {NOMBRE}, ¿qué hace getMessage()?", "a) Nada", "b) Obtiene mensaje de excepción", "c) Crea mensaje", "d) Lanza excepción", "b", "✅", "❌", "Obtiene mensaje", "Métodos", 2));
        p.add(new Pregunta("P18. ¿Qué hace printStackTrace()?", "a) Imprime nada", "b) Muestra traza del error", "c) Crea error", "d) Limpia error", "b", "✅", "❌", "Traza de pila", "Métodos", 2));
        p.add(new Pregunta("P19. ¿Se puede rethrow una excepción?", "a) No", "b) Sí, en catch", "c) Solo en finally", "d) Depende", "b", "✅", "❌", "Relanzar excepción", "Rethrow", 2));
        p.add(new Pregunta("P20. ¿Qué significa 'throws Exception'?", "a) Lanza excepción", "b) Declara que puede lanzar", "c) Captura error", "d) Crea error", "b", "✅", "❌", "Declara posible error", "throws", 2));

        // NIVEL 3: ALTA (10)
        p.add(new Pregunta("P21. ¿Cuál es el orden: try-catch-finally?", "a) Cualquier orden", "b) try, luego catch, luego finally", "c) finally primero", "d) Depende", "b", "✅", "❌", "Orden de bloques", "Orden", 3));
        p.add(new Pregunta("P22. Si try y finally retornan, ¿cuál gana?", "a) try", "b) finally", "c) Ninguno", "d) Error", "b", "✅", "❌", "finally siempre gana", "finally", 3));
        p.add(new Pregunta("P23. ¿Qué es una cadena de excepciones?", "a) Múltiples try", "b) Lanzar una que causa otra", "c) Múltiples catch", "d) Un error", "b", "✅", "❌", "Causa encadenada", "Cadena", 3));
        p.add(new Pregunta("P24. {NOMBRE}, ¿puedo crear excepciones sin extends?", "a) Sí", "b) No, debe extender Throwable", "c) Depende", "d) Error", "b", "✅", "❌", "Debe heredar", "Custom", 3));
        p.add(new Pregunta("P25. ¿Cuál es mejor: throw o throws?", "a) Siempre throw", "b) Siempre throws", "c) Depends en contexto", "d) Iguales", "c", "✅", "❌", "Contexto lo decide", "Decisión", 3));
        p.add(new Pregunta("P26. Si método A llama B (con throws), ¿qué hace A?", "a) Ignora", "b) Debe capturar o declarar", "c) Siempre captura", "d) Nada", "b", "✅", "❌", "Propagar o capturar", "Propagación", 3));
        p.add(new Pregunta("P27. ¿Qué es try-with-resources?", "a) Un error", "b) Cierra recursos automáticamente", "c) Un tipo de datos", "d) Un método", "b", "✅", "❌", "Auto-cierre", "try-with", 3));
        p.add(new Pregunta("P28. ¿Cuál es la excepción padre de todas?", "a) Exception", "b) RuntimeException", "c) Throwable", "d) Error", "c", "✅", "❌", "Raíz de jerarquía", "Jerarquía", 3));
        p.add(new Pregunta("P29. {NOMBRE}, ¿puedo capturar Exception y RuntimeException?", "a) No", "b) Sí, Exception captura ambas", "c) Solo una", "d) Error", "b", "✅", "❌", "Exception es padre", "Herencia", 3));
        p.add(new Pregunta("P30. ¿Cuándo NO necesito try-catch?", "a) Nunca", "b) RuntimeException no obliga", "c) Siempre obliga", "d) Depende", "b", "✅", "❌", "Unchecked opcional", "Obligatoriedad", 3));

        return p;
    }

    public static void main(String[] args) {
        Test_Excepciones_Adaptativo test = new Excepciones();
        test.iniciar();
    }
}

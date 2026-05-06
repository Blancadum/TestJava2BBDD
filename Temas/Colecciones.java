import java.util.ArrayList;

public class Colecciones extends TestAdaptativo {
    public void iniciar() {
        urlRecurso = "https://www.w3schools.com/JAVA/";
        super.iniciarTest("TEST: COLECCIONES (ArrayList, HashMap, etc)");
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

        // NIVEL 1: BAJA
        p.add(new Pregunta(
            "P1. ¿Qué es una colección?",
            "b) Contenedor de múltiples objetos", "a) Un tipo de dato", "c) Una variable", "d) Un array",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Contenedor dinámico", "Colecciones", 1
        ));
        p.add(new Pregunta(
            "P2. ¿Qué es ArrayList?",
            "b) Colección dinámica", "a) Un array fijo", "c) Una clase", "b) Colección dinámica",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Crece/reduce dinámicamente", "ArrayList", 1
        ));
        p.add(new Pregunta(
            "P3. ¿Cuál es la diferencia entre array y ArrayList?",
            "b) Array fijo, ArrayList dinámico", "a) No hay", "c) ArrayList es más rápido", "d) Depende",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Tamaño vs dinámico", "Diferencia", 1
        ));
        p.add(new Pregunta(
            "P4. ¿Cuál es el método para agregar en ArrayList?",
            "b) add()", "a) insert()", "b) add()", "d) push()",
            "c", "✅ Correcto.", "❌ Incorrecto.", ".add() agrega", "Métodos", 1
        ));
        p.add(new Pregunta(
            "P5. ¿Cuál es el método para obtener elemento?",
            "b) obtain()", "a) get()", "c) fetch()", "a) get()",
            "d", "✅ Correcto.", "❌ Incorrecto.", ".get(índice)", "Métodos", 1
        ));
        p.add(new Pregunta(
            "P6. ¿Qué es HashMap?",
            "b) Estructura clave-valor", "c) Un ArrayList", "b) Estructura clave-valor", "d) Una clase",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Clave-valor", "HashMap", 1
        ));
        p.add(new Pregunta(
            "P7. ¿Cuál es el método para agregar en HashMap?",
            "b) put()", "a) add()", "c) insert()", "d) append()",
            "b", "✅ Correcto.", "❌ Incorrecto.", ".put(clave, valor)", "Métodos", 1
        ));
        p.add(new Pregunta(
            "P8. {NOMBRE}, ¿cuál es el método para obtener de HashMap?",
            "c) retrieve()", "a) get()", "a) get()", "d) obtain()",
            "b", "✅ Correcto.", "❌ Incorrecto.", ".get(clave)", "Métodos", 1
        ));
        p.add(new Pregunta(
            "P9. ¿Qué es HashSet?",
            "b) Colección sin duplicados", "c) Un HashMap", "b) Colección sin duplicados", "d) Un ArrayList",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Sin duplicados", "HashSet", 1
        ));
        p.add(new Pregunta(
            "P10. ¿Qué es LinkedList?",
            "b) Lista basada en nodos enlazados", "a) Un ArrayList", "c) Un array", "b) Lista basada en nodos enlazados",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Nodos enlazados", "LinkedList", 1
        ));

        // NIVEL 2: MEDIA
        p.add(new Pregunta(
            "P11. ¿Cuál es la diferencia entre ArrayList y LinkedList?",
            "b) ArrayList=índice, LinkedList=nodos", "a) No hay", "b) ArrayList=índice, LinkedList=nodos", "d) Depende",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Estructura diferente", "Diferencia", 2
        ));
        p.add(new Pregunta(
            "P12. ¿Cuál es más rápido para acceso: ArrayList o LinkedList?",
            "b) ArrayList", "c) Iguales", "b) ArrayList", "d) Depende",
            "a", "✅ Correcto.", "❌ Incorrecto.", "ArrayList O(1)", "Rendimiento", 2
        ));
        p.add(new Pregunta(
            "P13. ¿Cuál es más rápido para insertar: ArrayList o LinkedList?",
            "b) LinkedList", "a) ArrayList", "c) Iguales", "b) LinkedList",
            "d", "✅ Correcto.", "❌ Incorrecto.", "LinkedList O(1)", "Rendimiento", 2
        ));
        p.add(new Pregunta(
            "P14. ¿Cómo recorrer ArrayList?",
            "b) for-each", "a) if", "b) for-each", "d) switch",
            "c", "✅ Correcto.", "❌ Incorrecto.", "for-each recorre", "Iteración", 2
        ));
        p.add(new Pregunta(
            "P15. ¿Qué es un Iterator?",
            "b) Objeto para recorrer colecciones", "a) Una variable", "c) Un método", "d) Un tipo",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Recorredor seguro", "Iterator", 2
        ));
        p.add(new Pregunta(
            "P16. ¿Cuál es el método de Iterator?",
            "c) Ambos", "c) Ambos", "b) hasNext()", "d) Otros",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Ambos necesarios", "Iterator", 2
        ));
        p.add(new Pregunta(
            "P17. {NOMBRE}, ¿puedo agregar null en ArrayList?",
            "b) Sí", "c) Depende", "b) Sí", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Sí, permite null", "null", 2
        ));
        p.add(new Pregunta(
            "P18. ¿Puedo agregar null en HashSet?",
            "b) Sí, pero máximo uno", "c) Ilimitados", "b) Sí, pero máximo uno", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Un null máximo", "null", 2
        ));
        p.add(new Pregunta(
            "P19. ¿Qué es Generics en colecciones?",
            "b) Especificar tipo de elementos", "a) Un tipo", "b) Especificar tipo de elementos", "d) Nada",
            "c", "✅ Correcto.", "❌ Incorrecto.", "ArrayList<String>", "Generics", 2
        ));
        p.add(new Pregunta(
            "P20. ¿Qué es la interfaz Collection?",
            "b) Interface base de colecciones", "a) Una clase", "c) Un método", "d) Un tipo de dato",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Interface madre", "Collection", 2
        ));

        // NIVEL 3: ALTA
        p.add(new Pregunta(
            "P21. ¿Cuál es la diferencia entre remove() y clear()?",
            "b) remove=elemento, clear=todos", "c) clear es más rápido", "b) remove=elemento, clear=todos", "d) Depende",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Específico vs todo", "Métodos", 3
        ));
        p.add(new Pregunta(
            "P22. ¿Qué es una colección sincronizada?",
            "b) Thread-safe para acceso múltiple", "a) Más rápida", "c) Menos memoria", "b) Thread-safe para acceso múltiple",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Thread-safe", "Sincronización", 3
        ));
        p.add(new Pregunta(
            "P23. ¿Cómo sincronizar ArrayList?",
            "b) Collections.synchronizedList()", "a) synchronized()", "b) Collections.synchronizedList()", "d) thread()",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Collections.synchronized...", "Sincronización", 3
        ));
        p.add(new Pregunta(
            "P24. {NOMBRE}, ¿qué es TreeSet?",
            "b) Set ordenado (árbol)", "a) Un HashSet", "b) Set ordenado (árbol)", "d) Un HashMap",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Ordenado automáticamente", "TreeSet", 3
        ));
        p.add(new Pregunta(
            "P25. ¿Qué es TreeMap?",
            "b) Map ordenado (árbol)", "a) Un HashMap", "c) Un ArrayList", "b) Map ordenado (árbol)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Clave-valor ordenado", "TreeMap", 3
        ));
        p.add(new Pregunta(
            "P26. ¿Cuál es la diferencia HashMap vs TreeMap?",
            "b) HashMap sin orden, TreeMap ordenado", "c) TreeMap más rápido", "b) HashMap sin orden, TreeMap ordenado", "d) Depende",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Orden automático", "Diferencia", 3
        ));
        p.add(new Pregunta(
            "P27. ¿Qué es Stream en colecciones?",
            "b) Procesamiento funcional de colecciones", "a) Un error", "c) Un tipo de dato", "b) Procesamiento funcional de colecciones",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Procesamiento funcional", "Stream", 3
        ));
        p.add(new Pregunta(
            "P28. ¿Qué es containsKey()?",
            "b) Verifica si clave existe en HashMap", "a) Error", "c) Verifica elemento", "d) Borra clave",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Existe en HashMap", "Métodos", 3
        ));
        p.add(new Pregunta(
            "P29. {NOMBRE}, ¿puedo iterar while modifico?",
            "c) Solo con Iterator", "b) No, ConcurrentModificationException", "a) Sí siempre", "d) Depende",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Usar Iterator", "Modificación", 3
        ));
        p.add(new Pregunta(
            "P30. ¿Cuál es la complejidad de HashSet?",
            "b) O(1) promedio", "a) O(n)", "c) O(log n)", "d) O(n²)",
            "b", "✅ Correcto.", "❌ Incorrecto.", "O(1) hash", "Complejidad", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        Colecciones test = new Colecciones();
        test.iniciar();
    }
}

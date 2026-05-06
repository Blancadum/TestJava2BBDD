import java.util.ArrayList;

public class Colecciones extends TestAdaptativo {
    public void iniciar() {
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

        // NIVEL 1: BAJA
        p.add(new Pregunta("P1. ¿Qué es una colección?", "a) Un tipo de dato", "b) Contenedor de múltiples objetos", "c) Una variable", "d) Un array", "b", "✅", "❌", "Contenedor dinámico", "Colecciones", 1));
        p.add(new Pregunta("P2. ¿Qué es ArrayList?", "a) Un array fijo", "b) Colección dinámica", "c) Una clase", "d) Un método", "b", "✅", "❌", "Crece/reduce dinámicamente", "ArrayList", 1));
        p.add(new Pregunta("P3. ¿Cuál es la diferencia entre array y ArrayList?", "a) No hay", "b) Array fijo, ArrayList dinámico", "c) ArrayList es más rápido", "d) Depende", "b", "✅", "❌", "Tamaño vs dinámico", "Diferencia", 1));
        p.add(new Pregunta("P4. ¿Cuál es el método para agregar en ArrayList?", "a) insert()", "b) add()", "c) append()", "d) push()", "b", "✅", "❌", ".add() agrega", "Métodos", 1));
        p.add(new Pregunta("P5. ¿Cuál es el método para obtener elemento?", "a) get()", "b) obtain()", "c) fetch()", "d) retrieve()", "a", "✅", "❌", ".get(índice)", "Métodos", 1));
        p.add(new Pregunta("P6. ¿Qué es HashMap?", "a) Un array", "b) Estructura clave-valor", "c) Un ArrayList", "d) Una clase", "b", "✅", "❌", "Clave-valor", "HashMap", 1));
        p.add(new Pregunta("P7. ¿Cuál es el método para agregar en HashMap?", "a) add()", "b) put()", "c) insert()", "d) append()", "b", "✅", "❌", ".put(clave, valor)", "Métodos", 1));
        p.add(new Pregunta("P8. {NOMBRE}, ¿cuál es el método para obtener de HashMap?", "a) get()", "b) fetch()", "c) retrieve()", "d) obtain()", "a", "✅", "❌", ".get(clave)", "Métodos", 1));
        p.add(new Pregunta("P9. ¿Qué es HashSet?", "a) Un array", "b) Colección sin duplicados", "c) Un HashMap", "d) Un ArrayList", "b", "✅", "❌", "Sin duplicados", "HashSet", 1));
        p.add(new Pregunta("P10. ¿Qué es LinkedList?", "a) Un ArrayList", "b) Lista basada en nodos enlazados", "c) Un array", "d) Un HashMap", "b", "✅", "❌", "Nodos enlazados", "LinkedList", 1));

        // NIVEL 2: MEDIA
        p.add(new Pregunta("P11. ¿Cuál es la diferencia entre ArrayList y LinkedList?", "a) No hay", "b) ArrayList=índice, LinkedList=nodos", "c) LinkedList es más rápido", "d) Depende", "b", "✅", "❌", "Estructura diferente", "Diferencia", 2));
        p.add(new Pregunta("P12. ¿Cuál es más rápido para acceso: ArrayList o LinkedList?", "a) LinkedList", "b) ArrayList", "c) Iguales", "d) Depende", "b", "✅", "❌", "ArrayList O(1)", "Rendimiento", 2));
        p.add(new Pregunta("P13. ¿Cuál es más rápido para insertar: ArrayList o LinkedList?", "a) ArrayList", "b) LinkedList", "c) Iguales", "d) Depende", "b", "✅", "❌", "LinkedList O(1)", "Rendimiento", 2));
        p.add(new Pregunta("P14. ¿Cómo recorrer ArrayList?", "a) if", "b) for-each", "c) while", "d) switch", "b", "✅", "❌", "for-each recorre", "Iteración", 2));
        p.add(new Pregunta("P15. ¿Qué es un Iterator?", "a) Una variable", "b) Objeto para recorrer colecciones", "c) Un método", "d) Un tipo", "b", "✅", "❌", "Recorredor seguro", "Iterator", 2));
        p.add(new Pregunta("P16. ¿Cuál es el método de Iterator?", "a) next()", "b) hasNext()", "c) Ambos", "d) Otros", "c", "✅", "❌", "Ambos necesarios", "Iterator", 2));
        p.add(new Pregunta("P17. {NOMBRE}, ¿puedo agregar null en ArrayList?", "a) No", "b) Sí", "c) Depende", "d) Error", "b", "✅", "❌", "Sí, permite null", "null", 2));
        p.add(new Pregunta("P18. ¿Puedo agregar null en HashSet?", "a) No", "b) Sí, pero máximo uno", "c) Ilimitados", "d) Error", "b", "✅", "❌", "Un null máximo", "null", 2));
        p.add(new Pregunta("P19. ¿Qué es Generics en colecciones?", "a) Un tipo", "b) Especificar tipo de elementos", "c) Un error", "d) Nada", "b", "✅", "❌", "ArrayList<String>", "Generics", 2));
        p.add(new Pregunta("P20. ¿Qué es la interfaz Collection?", "a) Una clase", "b) Interface base de colecciones", "c) Un método", "d) Un tipo de dato", "b", "✅", "❌", "Interface madre", "Collection", 2));

        // NIVEL 3: ALTA
        p.add(new Pregunta("P21. ¿Cuál es la diferencia entre remove() y clear()?", "a) No hay", "b) remove=elemento, clear=todos", "c) clear es más rápido", "d) Depende", "b", "✅", "❌", "Específico vs todo", "Métodos", 3));
        p.add(new Pregunta("P22. ¿Qué es una colección sincronizada?", "a) Más rápida", "b) Thread-safe para acceso múltiple", "c) Menos memoria", "d) Error", "b", "✅", "❌", "Thread-safe", "Sincronización", 3));
        p.add(new Pregunta("P23. ¿Cómo sincronizar ArrayList?", "a) synchronized()", "b) Collections.synchronizedList()", "c) sync()", "d) thread()", "b", "✅", "❌", "Collections.synchronized...", "Sincronización", 3));
        p.add(new Pregunta("P24. {NOMBRE}, ¿qué es TreeSet?", "a) Un HashSet", "b) Set ordenado (árbol)", "c) Un ArrayList", "d) Un HashMap", "b", "✅", "❌", "Ordenado automáticamente", "TreeSet", 3));
        p.add(new Pregunta("P25. ¿Qué es TreeMap?", "a) Un HashMap", "b) Map ordenado (árbol)", "c) Un ArrayList", "d) Un TreeSet", "b", "✅", "❌", "Clave-valor ordenado", "TreeMap", 3));
        p.add(new Pregunta("P26. ¿Cuál es la diferencia HashMap vs TreeMap?", "a) No hay", "b) HashMap sin orden, TreeMap ordenado", "c) TreeMap más rápido", "d) Depende", "b", "✅", "❌", "Orden automático", "Diferencia", 3));
        p.add(new Pregunta("P27. ¿Qué es Stream en colecciones?", "a) Un error", "b) Procesamiento funcional de colecciones", "c) Un tipo de dato", "d) Un método", "b", "✅", "❌", "Procesamiento funcional", "Stream", 3));
        p.add(new Pregunta("P28. ¿Qué es containsKey()?", "a) Error", "b) Verifica si clave existe en HashMap", "c) Verifica elemento", "d) Borra clave", "b", "✅", "❌", "Existe en HashMap", "Métodos", 3));
        p.add(new Pregunta("P29. {NOMBRE}, ¿puedo iterar while modifico?", "a) Sí siempre", "b) No, ConcurrentModificationException", "c) Solo con Iterator", "d) Depende", "c", "✅", "❌", "Usar Iterator", "Modificación", 3));
        p.add(new Pregunta("P30. ¿Cuál es la complejidad de HashSet?", "a) O(n)", "b) O(1) promedio", "c) O(log n)", "d) O(n²)", "b", "✅", "❌", "O(1) hash", "Complejidad", 3));

        return p;
    }

    public static void main(String[] args) {
        Test_Colecciones_Adaptativo test = new Colecciones();
        test.iniciar();
    }
}

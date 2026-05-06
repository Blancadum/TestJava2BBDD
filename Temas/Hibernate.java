import java.util.ArrayList;

public class Hibernate extends TestAdaptativo {
    public void iniciar() {
        urlRecurso = "https://www.w3schools.com/JAVA/";
        super.iniciarTest("TEST: HIBERNATE (ORM)");
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
            "P1. ¿Qué es Hibernate?",
            "b) Framework ORM", "c) Un lenguaje", "b) Framework ORM", "d) Un servidor",
            "a", "✅ Correcto.", "❌ Incorrecto.", "ORM framework", "Hibernate", 1
        ));
        p.add(new Pregunta(
            "P2. ¿Qué significa ORM?",
            "b) Object-Request Module", "a) Object-Relational Mapping", "c) Online Resource Manager", "d) Operation Record Model",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Object-Relational", "ORM", 1
        ));
        p.add(new Pregunta(
            "P3. ¿Para qué sirve Hibernate?",
            "b) Mapear objetos a tablas", "a) Gestionar BD", "c) Crear servidores", "d) Compilar código",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Mapeo objeto-relacional", "Propósito", 1
        ));
        p.add(new Pregunta(
            "P4. ¿Cuál es la anotación para marcar entidad?",
            "b) @Entity", "a) @Table", "c) @Column", "d) @Id",
            "b", "✅ Correcto.", "❌ Incorrecto.", "@Entity marca clase", "Anotaciones", 1
        ));
        p.add(new Pregunta(
            "P5. ¿Cuál es la anotación para clave primaria?",
            "c) @Id", "b) @Key", "a) @Primary", "d) @PK",
            "c", "✅ Correcto.", "❌ Incorrecto.", "@Id para clave", "Anotaciones", 1
        ));
        p.add(new Pregunta(
            "P6. ¿Cuál es la anotación para columna?",
            "c) @Column", "b) @Field", "a) @Attr", "c) @Column",
            "d", "✅ Correcto.", "❌ Incorrecto.", "@Column para atributo", "Anotaciones", 1
        ));
        p.add(new Pregunta(
            "P7. ¿Qué es SessionFactory?",
            "b) Factory de sesiones Hibernate", "a) Una sesión", "c) Un objeto", "d) Un error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Crea sesiones", "SessionFactory", 1
        ));
        p.add(new Pregunta(
            "P8. {NOMBRE}, ¿qué es Session?",
            "b) Conexión para operaciones BD", "a) Una clase", "b) Conexión para operaciones BD", "d) Un objeto",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Conexión a BD", "Session", 1
        ));
        p.add(new Pregunta(
            "P9. ¿Cuál es el método para guardar?",
            "b) insert()", "a) save()", "c) create()", "d) store()",
            "a", "✅ Correcto.", "❌ Incorrecto.", "session.save()", "Métodos", 1
        ));
        p.add(new Pregunta(
            "P10. ¿Cuál es el método para obtener?",
            "b) retrieve()", "a) get()", "c) find()", "d) fetch()",
            "a", "✅ Correcto.", "❌ Incorrecto.", "session.get()", "Métodos", 1
        ));

        // NIVEL 2: MEDIA (10)
        p.add(new Pregunta(
            "P11. ¿Cuál es el archivo de configuración?",
            "c) hibernate.cfg.xml", "b) hibernate.properties", "a) application.properties", "d) config.xml",
            "c", "✅ Correcto.", "❌ Incorrecto.", "hibernate.cfg.xml", "Configuración", 2
        ));
        p.add(new Pregunta(
            "P12. ¿Qué es un POJO?",
            "b) Plain Old Java Object", "a) Una clase especial", "b) Plain Old Java Object", "d) Un patrón",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Clase simple", "POJO", 2
        ));
        p.add(new Pregunta(
            "P13. ¿Qué es HQL?",
            "b) Hibernate Query Language", "c) Una BD", "b) Hibernate Query Language", "d) Un método",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Query en Hibernate", "HQL", 2
        ));
        p.add(new Pregunta(
            "P14. ¿Cuál es la diferencia save() vs update()?",
            "b) save=nuevo, update=existente", "a) No hay", "c) update más rápido", "b) save=nuevo, update=existente",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Insertar vs actualizar", "Métodos", 2
        ));
        p.add(new Pregunta(
            "P15. ¿Qué es lazy loading?",
            "b) Cargar datos cuando se accede", "c) Cargar todo", "b) Cargar datos cuando se accede", "d) Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Carga diferida", "Lazy", 2
        ));
        p.add(new Pregunta(
            "P16. ¿Qué es eager loading?",
            "b) Cargar datos inmediatamente", "c) Cargar lentamente", "b) Cargar datos inmediatamente", "d) Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Carga inmediata", "Eager", 2
        ));
        p.add(new Pregunta(
            "P17. {NOMBRE}, ¿para qué sirve @GeneratedValue?",
            "b) Auto-generar ID", "a) Generar clase", "c) Crear tabla", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Auto-incremento", "GeneratedValue", 2
        ));
        p.add(new Pregunta(
            "P18. ¿Qué es una relación One-to-Many?",
            "b) Un error", "a) Un objeto a varios", "c) Un atributo", "a) Un objeto a varios",
            "d", "✅ Correcto.", "❌ Incorrecto.", "1 a N", "Relaciones", 2
        ));
        p.add(new Pregunta(
            "P19. ¿Qué es una relación Many-to-One?",
            "b) Un error", "a) Varios objetos a uno", "a) Varios objetos a uno", "d) Una tabla",
            "c", "✅ Correcto.", "❌ Incorrecto.", "N a 1", "Relaciones", 2
        ));
        p.add(new Pregunta(
            "P20. ¿Cuál es el método para eliminar?",
            "b) delete()", "a) remove()", "c) destroy()", "b) delete()",
            "d", "✅ Correcto.", "❌ Incorrecto.", "session.delete()", "Métodos", 2
        ));

        // NIVEL 3: ALTA (10)
        p.add(new Pregunta(
            "P21. ¿Qué es un proxy en Hibernate?",
            "b) Objeto substituto para lazy loading", "a) Un error", "c) Un método", "d) Una clase",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Lazy loading proxy", "Proxy", 3
        ));
        p.add(new Pregunta(
            "P22. ¿Qué es Cascade?",
            "b) Propagar operaciones a relaciones", "a) Un error", "b) Propagar operaciones a relaciones", "d) Una tabla",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Propagación", "Cascade", 3
        ));
        p.add(new Pregunta(
            "P23. {{NOMBRE}, ¿qué es una Collection en Hibernate?",
            "b) Relación uno-a-muchos", "a) Un array", "c) Un HashMap", "b) Relación uno-a-muchos",
            "d", "✅ Correcto.", "❌ Incorrecto.", "One-to-Many", "Collection", 3
        ));
        p.add(new Pregunta(
            "P24. ¿Qué es la anotación @JoinColumn?",
            "b) Define columna de clave foránea", "a) Error", "b) Define columna de clave foránea", "d) Borra columna",
            "c", "✅ Correcto.", "❌ Incorrecto.", "FK mapping", "JoinColumn", 3
        ));
        p.add(new Pregunta(
            "P25. ¿Qué es @ManyToMany?",
            "b) Relación muchos-a-muchos", "c) Un método", "b) Relación muchos-a-muchos", "d) Una tabla",
            "a", "✅ Correcto.", "❌ Incorrecto.", "N a N", "Relaciones", 3
        ));
        p.add(new Pregunta(
            "P26. ¿Qué es criteriaQuery?",
            "b) API para queries type-safe", "a) Un error", "c) Un método", "d) Una tabla",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Type-safe queries", "Criteria", 3
        ));
        p.add(new Pregunta(
            "P27. ¿Qué es el patrón Active Record?",
            "b) Clase = tabla, métodos para CRUD", "a) Error", "c) Un método", "b) Clase = tabla, métodos para CRUD",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Patrón de diseño", "Active Record", 3
        ));
        p.add(new Pregunta(
            "P28. ¿Qué es @Transient?",
            "b) Campo no persistente", "a) Error", "c) Un método", "d) Una tabla",
            "b", "✅ Correcto.", "❌ Incorrecto.", "No persistir", "Transient", 3
        ));
        p.add(new Pregunta(
            "P29. {{NOMBRE}, ¿qué es FlushMode?",
            "b) Controla cuándo sincronizar BD", "a) Error", "c) Un método", "b) Controla cuándo sincronizar BD",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Sincronización", "FlushMode", 3
        ));
        p.add(new Pregunta(
            "P30. ¿Cuál es la ventaja de Hibernate sobre SQL?",
            "b) Abstrae BD, más portable", "a) No hay", "c) Es más rápido", "d) Depende",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Abstracción BD", "Ventajas", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        Hibernate test = new Hibernate();
        test.iniciar();
    }
}

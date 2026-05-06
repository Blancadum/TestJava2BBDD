import java.util.ArrayList;

public class Hibernate extends TestAdaptativo {
    public void iniciar() {
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
        p.add(new Pregunta("P1. ¿Qué es Hibernate?", "a) Una BD", "b) Framework ORM", "c) Un lenguaje", "d) Un servidor", "b", "✅", "❌", "ORM framework", "Hibernate", 1));
        p.add(new Pregunta("P2. ¿Qué significa ORM?", "a) Object-Relational Mapping", "b) Object-Request Module", "c) Online Resource Manager", "d) Operation Record Model", "a", "✅", "❌", "Object-Relational", "ORM", 1));
        p.add(new Pregunta("P3. ¿Para qué sirve Hibernate?", "a) Gestionar BD", "b) Mapear objetos a tablas", "c) Crear servidores", "d) Compilar código", "b", "✅", "❌", "Mapeo objeto-relacional", "Propósito", 1));
        p.add(new Pregunta("P4. ¿Cuál es la anotación para marcar entidad?", "a) @Table", "b) @Entity", "c) @Column", "d) @Id", "b", "✅", "❌", "@Entity marca clase", "Anotaciones", 1));
        p.add(new Pregunta("P5. ¿Cuál es la anotación para clave primaria?", "a) @Primary", "b) @Key", "c) @Id", "d) @PK", "c", "✅", "❌", "@Id para clave", "Anotaciones", 1));
        p.add(new Pregunta("P6. ¿Cuál es la anotación para columna?", "a) @Attr", "b) @Field", "c) @Column", "d) @Data", "c", "✅", "❌", "@Column para atributo", "Anotaciones", 1));
        p.add(new Pregunta("P7. ¿Qué es SessionFactory?", "a) Una sesión", "b) Factory de sesiones Hibernate", "c) Un objeto", "d) Un error", "b", "✅", "❌", "Crea sesiones", "SessionFactory", 1));
        p.add(new Pregunta("P8. {NOMBRE}, ¿qué es Session?", "a) Una clase", "b) Conexión para operaciones BD", "c) Un usuario", "d) Un objeto", "b", "✅", "❌", "Conexión a BD", "Session", 1));
        p.add(new Pregunta("P9. ¿Cuál es el método para guardar?", "a) save()", "b) insert()", "c) create()", "d) store()", "a", "✅", "❌", "session.save()", "Métodos", 1));
        p.add(new Pregunta("P10. ¿Cuál es el método para obtener?", "a) get()", "b) retrieve()", "c) find()", "d) fetch()", "a", "✅", "❌", "session.get()", "Métodos", 1));

        // NIVEL 2: MEDIA (10)
        p.add(new Pregunta("P11. ¿Cuál es el archivo de configuración?", "a) application.properties", "b) hibernate.properties", "c) hibernate.cfg.xml", "d) config.xml", "c", "✅", "❌", "hibernate.cfg.xml", "Configuración", 2));
        p.add(new Pregunta("P12. ¿Qué es un POJO?", "a) Una clase especial", "b) Plain Old Java Object", "c) Un error", "d) Un patrón", "b", "✅", "❌", "Clase simple", "POJO", 2));
        p.add(new Pregunta("P13. ¿Qué es HQL?", "a) SQL normal", "b) Hibernate Query Language", "c) Una BD", "d) Un método", "b", "✅", "❌", "Query en Hibernate", "HQL", 2));
        p.add(new Pregunta("P14. ¿Cuál es la diferencia save() vs update()?", "a) No hay", "b) save=nuevo, update=existente", "c) update más rápido", "d) Depende", "b", "✅", "❌", "Insertar vs actualizar", "Métodos", 2));
        p.add(new Pregunta("P15. ¿Qué es lazy loading?", "a) Error", "b) Cargar datos cuando se accede", "c) Cargar todo", "d) Nada", "b", "✅", "❌", "Carga diferida", "Lazy", 2));
        p.add(new Pregunta("P16. ¿Qué es eager loading?", "a) Error", "b) Cargar datos inmediatamente", "c) Cargar lentamente", "d) Nada", "b", "✅", "❌", "Carga inmediata", "Eager", 2));
        p.add(new Pregunta("P17. {NOMBRE}, ¿para qué sirve @GeneratedValue?", "a) Generar clase", "b) Auto-generar ID", "c) Crear tabla", "d) Error", "b", "✅", "❌", "Auto-incremento", "GeneratedValue", 2));
        p.add(new Pregunta("P18. ¿Qué es una relación One-to-Many?", "a) Un objeto a varios", "b) Un error", "c) Un atributo", "d) Una tabla", "a", "✅", "❌", "1 a N", "Relaciones", 2));
        p.add(new Pregunta("P19. ¿Qué es una relación Many-to-One?", "a) Varios objetos a uno", "b) Un error", "c) Un atributo", "d) Una tabla", "a", "✅", "❌", "N a 1", "Relaciones", 2));
        p.add(new Pregunta("P20. ¿Cuál es el método para eliminar?", "a) remove()", "b) delete()", "c) destroy()", "d) erase()", "b", "✅", "❌", "session.delete()", "Métodos", 2));

        // NIVEL 3: ALTA (10)
        p.add(new Pregunta("P21. ¿Qué es un proxy en Hibernate?", "a) Un error", "b) Objeto substituto para lazy loading", "c) Un método", "d) Una clase", "b", "✅", "❌", "Lazy loading proxy", "Proxy", 3));
        p.add(new Pregunta("P22. ¿Qué es Cascade?", "a) Un error", "b) Propagar operaciones a relaciones", "c) Un método", "d) Una tabla", "b", "✅", "❌", "Propagación", "Cascade", 3));
        p.add(new Pregunta("P23. {{NOMBRE}, ¿qué es una Collection en Hibernate?", "a) Un array", "b) Relación uno-a-muchos", "c) Un HashMap", "d) Un ArrayList", "b", "✅", "❌", "One-to-Many", "Collection", 3));
        p.add(new Pregunta("P24. ¿Qué es la anotación @JoinColumn?", "a) Error", "b) Define columna de clave foránea", "c) Crea tabla", "d) Borra columna", "b", "✅", "❌", "FK mapping", "JoinColumn", 3));
        p.add(new Pregunta("P25. ¿Qué es @ManyToMany?", "a) Error", "b) Relación muchos-a-muchos", "c) Un método", "d) Una tabla", "b", "✅", "❌", "N a N", "Relaciones", 3));
        p.add(new Pregunta("P26. ¿Qué es criteriaQuery?", "a) Un error", "b) API para queries type-safe", "c) Un método", "d) Una tabla", "b", "✅", "❌", "Type-safe queries", "Criteria", 3));
        p.add(new Pregunta("P27. ¿Qué es el patrón Active Record?", "a) Error", "b) Clase = tabla, métodos para CRUD", "c) Un método", "d) Una tabla", "b", "✅", "❌", "Patrón de diseño", "Active Record", 3));
        p.add(new Pregunta("P28. ¿Qué es @Transient?", "a) Error", "b) Campo no persistente", "c) Un método", "d) Una tabla", "b", "✅", "❌", "No persistir", "Transient", 3));
        p.add(new Pregunta("P29. {{NOMBRE}, ¿qué es FlushMode?", "a) Error", "b) Controla cuándo sincronizar BD", "c) Un método", "d) Una tabla", "b", "✅", "❌", "Sincronización", "FlushMode", 3));
        p.add(new Pregunta("P30. ¿Cuál es la ventaja de Hibernate sobre SQL?", "a) No hay", "b) Abstrae BD, más portable", "c) Es más rápido", "d) Depende", "b", "✅", "❌", "Abstracción BD", "Ventajas", 3));

        return p;
    }

    public static void main(String[] args) {
        Test_Hibernate_Adaptativo test = new Hibernate();
        test.iniciar();
    }
}

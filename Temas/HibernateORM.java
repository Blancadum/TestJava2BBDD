import java.util.ArrayList;
public class HibernateORM extends TestAdaptativo {
    public void iniciar() {
        urlRecurso = "https://hibernate.org/orm/";
        super.iniciarTest("TEST: HIBERNATE + ORM + POSTGRESQL");
    }
    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        for (Pregunta p : filtradas) { pintarPregunta(p); puntuarPregunta(p, obtenerRespuesta()); }
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
    private String obtenerRespuesta() { String resp; do { System.out.print("\nTu respuesta (a/b/c/d): "); resp = scanner.nextLine().toLowerCase().trim(); } while (!resp.matches("[a-d]")); return resp; }
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

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. ¿Qué es ORM?",
            "b) Object-Relational Mapping: mapea objetos Java a filas BD", "a) Un tipo de tabla", "c) Un índice", "b) Object-Relational Mapping: mapea objetos Java a filas BD",
            "d", "✅ Correcto.", "❌ Incorrecto.", "ORM bridges objects and SQL", "ORM", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Qué es Hibernate?",
            "b) Framework ORM para Java", "a) Un tipo de error", "b) Framework ORM para Java", "d) Un índice BD",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Hibernate simplifies database", "Hibernate", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Qué es una ENTIDAD en Hibernate?",
            "b) Clase Java MAPEADA a tabla BD", "a) Una clase de error", "c) Una tabla SQL", "d) Un índice",
            "b", "✅ Correcto.", "❌ Incorrecto.", "@Entity anotación", "Entidad", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué anotación marca una clase como Entidad?",
            "c) @Entity", "b) @Object", "a) @Table", "d) @Class",
            "c", "✅ Correcto.", "❌ Incorrecto.", "@Entity anotación", "Anotaciones", 1
        ));

        p.add(new Pregunta(
            "P5. ¿Qué es @Id en Hibernate?",
            "b) Anotación que marca CLAVE PRIMARIA", "a) Nombre de la clase", "c) Un índice", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "@Id identifier field", "Anotaciones", 1
        ));

        p.add(new Pregunta(
            "P6. ¿Qué anotación mapea propiedad a columna?",
            "c) @Column", "c) @Column", "a) @Table", "d) @Property",
            "b", "✅ Correcto.", "❌ Incorrecto.", "@Column personaliza mapeo", "Anotaciones", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué es una SessionFactory en Hibernate?",
            "b) Objeto que crea SESSIONS (conexiones)", "a) Una tabla", "c) Un error", "b) Objeto que crea SESSIONS (conexiones)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "SessionFactory singleton", "Sesión", 1
        ));

        p.add(new Pregunta(
            "P8. ¿Qué es Session en Hibernate?",
            "b) CONEXIÓN lógica a BD para operaciones", "a) Usuario de BD", "c) Tabla temporal", "b) CONEXIÓN lógica a BD para operaciones",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Session CRUD operations", "Sesión", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué hace el método save()?",
            "b) INSERTA nuevo objeto en BD", "c) Borra registro", "b) INSERTA nuevo objeto en BD", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "save() método INSERT", "CRUD", 1
        ));

        p.add(new Pregunta(
            "P10. ¿Cuál es el archivo de configuración de Hibernate?",
            "b) hibernate.cfg.xml", "a) config.properties", "b) hibernate.cfg.xml", "d) application.conf",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Configuration file XML", "Configuración", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. ¿Qué es @GeneratedValue en Hibernate?",
            "b) GENERA automáticamente valor (ej. auto-increment ID)", "c) Constante", "b) GENERA automáticamente valor (ej. auto-increment ID)", "d) Función",
            "a", "✅ Correcto.", "❌ Incorrecto.", "@GeneratedValue identity", "Anotaciones", 2
        ));

        p.add(new Pregunta(
            "P12. {NOMBRE}, ¿qué es LAZY LOADING?",
            "b) CARGAR datos SOLO cuando se accede", "a) Cargar datos inmediatamente", "c) Cargar en background", "b) CARGAR datos SOLO cuando se accede",
            "d", "✅ Correcto.", "❌ Incorrecto.", "lazy=true strategy", "Loading", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Qué es EAGER LOADING?",
            "b) CARGAR datos INMEDIATAMENTE al abrir sesión", "c) Cargar manual", "b) CARGAR datos INMEDIATAMENTE al abrir sesión", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "fetch=FetchType.EAGER", "Loading", 2
        ));

        p.add(new Pregunta(
            "P14. ¿Cuál es la relación ONE-TO-MANY?",
            "b) Un Usuario TIENE MUCHOS Pedidos", "a) Un usuario a muchos usuarios", "c) Un pedido a muchos", "b) Un Usuario TIENE MUCHOS Pedidos",
            "d", "✅ Correcto.", "❌ Incorrecto.", "@OneToMany relación", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P15. ¿Cuál es la relación MANY-TO-ONE?",
            "b) MUCHOS Pedidos pertenecen a UN Usuario", "c) Uno a uno", "b) MUCHOS Pedidos pertenecen a UN Usuario", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "@ManyToOne relación", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P16. ¿Qué anotación especifica la columna de unión?",
            "c) @JoinColumn", "b) @Key", "a) @Foreign", "c) @JoinColumn",
            "d", "✅ Correcto.", "❌ Incorrecto.", "@JoinColumn mapeo", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Qué es HQL?",
            "d) Ambas a y b", "d) Ambas a y b", "c) HTML", "b) Lenguaje de consultas orientado a OBJETOS (no SQL)",
            "a", "✅ Correcto.", "❌ Incorrecto.", "HQL object-oriented queries", "HQL", 2
        ));

        p.add(new Pregunta(
            "P18. ¿Cuál es la diferencia update() vs save()?",
            "b) save()=INSERT; update()=UPDATE objeto existente", "c) update() borra", "b) save()=INSERT; update()=UPDATE objeto existente", "d) No existe update()",
            "a", "✅ Correcto.", "❌ Incorrecto.", "CRUD merge vs save", "CRUD", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué es CASCADE en Hibernate?",
            "b) PROPAGAR operaciones (save/delete) a relaciones", "a) Error de sintaxis", "b) PROPAGAR operaciones (save/delete) a relaciones", "d) Un tipo dato",
            "c", "✅ Correcto.", "❌ Incorrecto.", "cascade=CascadeType properties", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P20. ¿Qué es DELETE en cascada?",
            "b) AL eliminar usuario, ELIMINA sus Pedidos automáticamente", "a) Eliminar una tabla", "c) Eliminar BD", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "CascadeType.DELETE_ORPHANS", "Cascada", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. ¿Qué es MANY-TO-MANY?",
            "b) MUCHOS Estudiantes en MUCHOS Cursos", "a) Uno a muchos", "c) Uno a uno", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "@ManyToMany relación", "Relaciones", 3
        ));

        p.add(new Pregunta(
            "P22. ¿Qué anotación define tabla de unión en Many-to-Many?",
            "b) @JoinTable", "a) @Junction", "c) @Bridge", "d) @Link",
            "b", "✅ Correcto.", "❌ Incorrecto.", "@JoinTable junction table", "Anotaciones", 3
        ));

        p.add(new Pregunta(
            "P23. {NOMBRE}, ¿qué es un PROXY OBJECT?",
            "b) Objeto LAZY que carga datos al acceder", "a) Servidor proxy", "c) Un índice", "b) Objeto LAZY que carga datos al acceder",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Hibernate proxy pattern", "Proxy", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es @Transient en Hibernate?",
            "b) Marca propiedad que NO se mapea a BD", "c) Un error", "b) Marca propiedad que NO se mapea a BD", "d) Un índice",
            "a", "✅ Correcto.", "❌ Incorrecto.", "@Transient ignored column", "Anotaciones", 3
        ));

        p.add(new Pregunta(
            "P25. ¿Cuál es el problema N+1 en Hibernate?",
            "b) Hacer 1 query principal + N adicionales por cada relación", "c) Un error", "b) Hacer 1 query principal + N adicionales por cada relación", "d) Bug",
            "a", "✅ Correcto.", "❌ Incorrecto.", "N+1 problem lazy loading", "Problemas", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Cómo prevenir N+1 en Hibernate?",
            "b) Usar EAGER loading, JOIN fetch, o batch loading", "a) No se puede", "b) Usar EAGER loading, JOIN fetch, o batch loading", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.", "N+1 solution strategies", "Optimización", 3
        ));

        p.add(new Pregunta(
            "P27. ¿Qué es un DETACHED object en Hibernate?",
            "b) Objeto que FUE asociado con Session PERO YA NO", "a) Objeto sin relaciones", "b) Objeto que FUE asociado con Session PERO YA NO", "d) Índice",
            "c", "✅ Correcto.", "❌ Incorrecto.", "Detached object lifecycle", "Ciclo vida", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Qué hace merge() con objeto detached?",
            "b) REATTACH objeto a nueva Session", "a) Borra objeto", "b) REATTACH objeto a nueva Session", "d) Nada",
            "c", "✅ Correcto.", "❌ Incorrecto.", "merge() reattach operation", "Ciclo vida", 3
        ));

        p.add(new Pregunta(
            "P29. ¿Qué es la Criteria API en Hibernate?",
            "b) API para construir queries PROGRAMÁTICAMENTE (sin HQL/SQL)", "a) Error", "c) Un índice", "d) SQL nativo",
            "b", "✅ Correcto.", "❌ Incorrecto.", "CriteriaBuilder queries", "Queries", 3
        ));

        p.add(new Pregunta(
            "P30. PostgreSQL + Hibernate: ¿cuál es la ventaja de ORM?",
            "b) INDEPENDENCIA de BD: cambiar de PostgreSQL a MySQL sin cambiar código", "a) Nada", "c) Velocidad", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.", "Portabilidad entre BDs", "Ventajas", 3
        ));

        return p;
    }
    public static void main(String[] args) { new HibernateORM().iniciar(); }
}

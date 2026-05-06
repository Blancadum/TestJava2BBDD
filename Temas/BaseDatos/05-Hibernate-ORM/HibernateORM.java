import java.util.ArrayList;
public class HibernateORM extends TestAdaptativo {
    public void iniciar() { super.iniciarTest("TEST: HIBERNATE + ORM + POSTGRESQL"); }
    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        for (Pregunta p : filtradas) { pintarPregunta(p); puntuarPregunta(p, obtenerRespuesta()); }
    }
    private void pintarPregunta(Pregunta p) { System.out.println("\n" + incluirNombre(p.getTexto())); System.out.println(p.getOpcionA()); System.out.println(p.getOpcionB()); System.out.println(p.getOpcionC()); System.out.println(p.getOpcionD()); }
    private String obtenerRespuesta() { String resp; do { System.out.print("\nTu respuesta (a/b/c/d): "); resp = scanner.nextLine().toLowerCase().trim(); } while (!resp.matches("[a-d]")); return resp; }
    private void puntuarPregunta(Pregunta p, String resp) { boolean ok = p.esCorrecta(resp); respuestas.add(new Respuesta(p, resp, ok)); System.out.println(ok ? "\n✅ " + p.getMensajeOK() : "\n❌ " + p.getMensajeError()); if (!ok) conceptosDebiles.add(p.getConcepto()); }
    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. ¿Qué es ORM?",
            "a) Un tipo de tabla", "b) Object-Relational Mapping: mapea objetos Java a filas BD", "c) Un índice", "d) Una contraseña",
            "b", "✅ ORM = mapeo objeto-relacional", "❌ Incorrecto", "ORM bridges objects and SQL", "ORM", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Qué es Hibernate?",
            "a) Un tipo de error", "b) Framework ORM para Java", "c) Un servidor web", "d) Un índice BD",
            "b", "✅ Hibernate = Java ORM framework", "❌ Incorrecto", "Hibernate simplifies database", "Hibernate", 1
        ));

        p.add(new Pregunta(
            "P3. ¿Qué es una ENTIDAD en Hibernate?",
            "a) Una clase de error", "b) Clase Java MAPEADA a tabla BD", "c) Una tabla SQL", "d) Un índice",
            "b", "✅ Entity = mapped class", "❌ Incorrecto", "@Entity anotación", "Entidad", 1
        ));

        p.add(new Pregunta(
            "P4. {NOMBRE}, ¿qué anotación marca una clase como Entidad?",
            "a) @Table", "b) @Object", "c) @Entity", "d) @Class",
            "c", "✅ @Entity marca entidad", "❌ Incorrecto", "@Entity anotación", "Anotaciones", 1
        ));

        p.add(new Pregunta(
            "P5. ¿Qué es @Id en Hibernate?",
            "a) Nombre de la clase", "b) Anotación que marca CLAVE PRIMARIA", "c) Un índice", "d) Error",
            "b", "✅ @Id = primary key field", "❌ Incorrecto", "@Id identifier field", "Anotaciones", 1
        ));

        p.add(new Pregunta(
            "P6. ¿Qué anotación mapea propiedad a columna?",
            "a) @Table", "b) @Field", "c) @Column", "d) @Property",
            "c", "✅ @Column = mapeo a columna", "❌ Incorrecto", "@Column personaliza mapeo", "Anotaciones", 1
        ));

        p.add(new Pregunta(
            "P7. ¿Qué es una SessionFactory en Hibernate?",
            "a) Una tabla", "b) Objeto que crea SESSIONS (conexiones)", "c) Un error", "d) Un índice",
            "b", "✅ SessionFactory = session creator", "❌ Incorrecto", "SessionFactory singleton", "Sesión", 1
        ));

        p.add(new Pregunta(
            "P8. ¿Qué es Session en Hibernate?",
            "a) Usuario de BD", "b) CONEXIÓN lógica a BD para operaciones", "c) Tabla temporal", "d) Error",
            "b", "✅ Session = BD connection", "❌ Incorrecto", "Session CRUD operations", "Sesión", 1
        ));

        p.add(new Pregunta(
            "P9. ¿Qué hace el método save()?",
            "a) Actualiza registro", "b) INSERTA nuevo objeto en BD", "c) Borra registro", "d) Error",
            "b", "✅ save() = INSERT en BD", "❌ Incorrecto", "save() método INSERT", "CRUD", 1
        ));

        p.add(new Pregunta(
            "P10. ¿Cuál es el archivo de configuración de Hibernate?",
            "a) config.properties", "b) hibernate.cfg.xml", "c) setup.sql", "d) application.conf",
            "b", "✅ hibernate.cfg.xml = configuración", "❌ Incorrecto", "Configuration file XML", "Configuración", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. ¿Qué es @GeneratedValue en Hibernate?",
            "a) Error de sintaxis", "b) GENERA automáticamente valor (ej. auto-increment ID)", "c) Constante", "d) Función",
            "b", "✅ @GeneratedValue = auto ID", "❌ Incorrecto", "@GeneratedValue identity", "Anotaciones", 2
        ));

        p.add(new Pregunta(
            "P12. {NOMBRE}, ¿qué es LAZY LOADING?",
            "a) Cargar datos inmediatamente", "b) CARGAR datos SOLO cuando se accede", "c) Cargar en background", "d) Error",
            "b", "✅ Lazy = on-demand loading", "❌ Incorrecto", "lazy=true strategy", "Loading", 2
        ));

        p.add(new Pregunta(
            "P13. ¿Qué es EAGER LOADING?",
            "a) Cargar lentamente", "b) CARGAR datos INMEDIATAMENTE al abrir sesión", "c) Cargar manual", "d) Error",
            "b", "✅ Eager = immediate loading", "❌ Incorrecto", "fetch=FetchType.EAGER", "Loading", 2
        ));

        p.add(new Pregunta(
            "P14. ¿Cuál es la relación ONE-TO-MANY?",
            "a) Un usuario a muchos usuarios", "b) Un Usuario TIENE MUCHOS Pedidos", "c) Un pedido a muchos", "d) Error",
            "b", "✅ One-to-Many = 1:N relationship", "❌ Incorrecto", "@OneToMany relación", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P15. ¿Cuál es la relación MANY-TO-ONE?",
            "a) Muchos a muchos", "b) MUCHOS Pedidos pertenecen a UN Usuario", "c) Uno a uno", "d) Error",
            "b", "✅ Many-to-One = N:1 relationship", "❌ Incorrecto", "@ManyToOne relación", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P16. ¿Qué anotación especifica la columna de unión?",
            "a) @Foreign", "b) @Key", "c) @JoinColumn", "d) @Link",
            "c", "✅ @JoinColumn = foreign key column", "❌ Incorrecto", "@JoinColumn mapeo", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P17. ¿Qué es HQL?",
            "a) Hibernate Query Language", "b) Lenguaje de consultas orientado a OBJETOS (no SQL)", "c) HTML", "d) Ambas a y b",
            "d", "✅ HQL = Hibernate Query Language", "❌ Incorrecto", "HQL object-oriented queries", "HQL", 2
        ));

        p.add(new Pregunta(
            "P18. ¿Cuál es la diferencia update() vs save()?",
            "a) No hay", "b) save()=INSERT; update()=UPDATE objeto existente", "c) update() borra", "d) No existe update()",
            "b", "✅ save()=INSERT; update()=UPDATE", "❌ Incorrecto", "CRUD merge vs save", "CRUD", 2
        ));

        p.add(new Pregunta(
            "P19. ¿Qué es CASCADE en Hibernate?",
            "a) Error de sintaxis", "b) PROPAGAR operaciones (save/delete) a relaciones", "c) Un índice", "d) Un tipo dato",
            "b", "✅ CASCADE = propagate operations", "❌ Incorrecto", "cascade=CascadeType properties", "Relaciones", 2
        ));

        p.add(new Pregunta(
            "P20. ¿Qué es DELETE en cascada?",
            "a) Eliminar una tabla", "b) AL eliminar usuario, ELIMINA sus Pedidos automáticamente", "c) Eliminar BD", "d) Error",
            "b", "✅ Cascade delete = orphan removal", "❌ Incorrecto", "CascadeType.DELETE_ORPHANS", "Cascada", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. ¿Qué es MANY-TO-MANY?",
            "a) Uno a muchos", "b) MUCHOS Estudiantes en MUCHOS Cursos", "c) Uno a uno", "d) Error",
            "b", "✅ Many-to-Many = M:N relationship", "❌ Incorrecto", "@ManyToMany relación", "Relaciones", 3
        ));

        p.add(new Pregunta(
            "P22. ¿Qué anotación define tabla de unión en Many-to-Many?",
            "a) @Junction", "b) @JoinTable", "c) @Bridge", "d) @Link",
            "b", "✅ @JoinTable = join table mapping", "❌ Incorrecto", "@JoinTable junction table", "Anotaciones", 3
        ));

        p.add(new Pregunta(
            "P23. {NOMBRE}, ¿qué es un PROXY OBJECT?",
            "a) Servidor proxy", "b) Objeto LAZY que carga datos al acceder", "c) Un índice", "d) Error",
            "b", "✅ Proxy = lazy loading wrapper", "❌ Incorrecto", "Hibernate proxy pattern", "Proxy", 3
        ));

        p.add(new Pregunta(
            "P24. ¿Qué es @Transient en Hibernate?",
            "a) Error de sintaxis", "b) Marca propiedad que NO se mapea a BD", "c) Un error", "d) Un índice",
            "b", "✅ @Transient = non-persisted field", "❌ Incorrecto", "@Transient ignored column", "Anotaciones", 3
        ));

        p.add(new Pregunta(
            "P25. ¿Cuál es el problema N+1 en Hibernate?",
            "a) Error matemático", "b) Hacer 1 query principal + N adicionales por cada relación", "c) Un error", "d) Bug",
            "b", "✅ N+1 = extra queries performance", "❌ Incorrecto", "N+1 problem lazy loading", "Problemas", 3
        ));

        p.add(new Pregunta(
            "P26. ¿Cómo prevenir N+1 en Hibernate?",
            "a) No se puede", "b) Usar EAGER loading, JOIN fetch, o batch loading", "c) Cambiar BD", "d) Error",
            "b", "✅ JOIN fetch, batch solve N+1", "❌ Incorrecto", "N+1 solution strategies", "Optimización", 3
        ));

        p.add(new Pregunta(
            "P27. ¿Qué es un DETACHED object en Hibernate?",
            "a) Objeto sin relaciones", "b) Objeto que FUE asociado con Session PERO YA NO", "c) Un error", "d) Índice",
            "b", "✅ Detached = after session close", "❌ Incorrecto", "Detached object lifecycle", "Ciclo vida", 3
        ));

        p.add(new Pregunta(
            "P28. ¿Qué hace merge() con objeto detached?",
            "a) Borra objeto", "b) REATTACH objeto a nueva Session", "c) Error", "d) Nada",
            "b", "✅ merge() = reattach detached", "❌ Incorrecto", "merge() reattach operation", "Ciclo vida", 3
        ));

        p.add(new Pregunta(
            "P29. ¿Qué es la Criteria API en Hibernate?",
            "a) Error", "b) API para construir queries PROGRAMÁTICAMENTE (sin HQL/SQL)", "c) Un índice", "d) SQL nativo",
            "b", "✅ Criteria = programmatic queries", "❌ Incorrecto", "CriteriaBuilder queries", "Queries", 3
        ));

        p.add(new Pregunta(
            "P30. PostgreSQL + Hibernate: ¿cuál es la ventaja de ORM?",
            "a) Nada", "b) INDEPENDENCIA de BD: cambiar de PostgreSQL a MySQL sin cambiar código", "c) Velocidad", "d) Error",
            "b", "✅ ORM = database independence", "❌ Incorrecto", "Portabilidad entre BDs", "Ventajas", 3
        ));

        return p;
    }
    public static void main(String[] args) { new HibernateORM().iniciar(); }
}

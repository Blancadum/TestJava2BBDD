package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class HibernateORMService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. ORM (Object-Relational Mapping) mapea:",
            "Objetos SQL", "Objetos Java a filas BD", "Archivos", "Carpetas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ORM convierte objetos <--> registros BD",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. Hibernate es un ORM para:",
            "Multiplicar", "Mapear Java a BD", "Compilar", "Diseñar web",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Hibernate simplifica persistencia Java",
            "Framework", 1
        ));

        preguntas.add(new Pregunta(
            "P3. @Entity en Hibernate marca:",
            "Una variable", "Una clase mapeada a tabla", "Un método", "Un paquete",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@Entity = clase que representa tabla",
            "Anotaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P4. @Table(name='users') sirve para:",
            "Cambiar clase nombre", "Especificar nombre tabla en BD", "Crear tabla", "Borrar datos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@Table vincula clase a tabla específica",
            "Anotaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P5. @Id marca:",
            "Identificador único (Primary Key)", "Importación", "Variable interna", "Método",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "@Id = clave primaria de entidad",
            "Anotaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P6. @GeneratedValue estrategia AUTO:",
            "Número fijo", "Genera ID automáticamente", "Texto", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@GeneratedValue auto-genera IDs",
            "Anotaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P7. @Column(name='user_name') personaliza:",
            "Clase", "Mapeo columna específica", "Tabla", "BD",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@Column vincula atributo a columna",
            "Anotaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P8. @Column(nullable=false) significa:",
            "Puede ser NULL", "No puede ser NULL (obligatorio)", "Sin valor", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "nullable=false = valor requerido",
            "Anotaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P9. @OneToMany relaciona:",
            "Una fila a una", "Una entidad a muchas", "Muchas a una", "Ninguna",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@OneToMany = uno a muchos",
            "Relaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P10. @ManyToOne relaciona:",
            "Muchas a muchas", "Muchas entidades a una", "Una a una", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@ManyToOne = muchos a uno",
            "Relaciones", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. @JoinColumn(name='user_id') especifica:",
            "Clase relacionada", "Columna Foreign Key", "Tabla", "BD",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@JoinColumn nombre columna FK",
            "Relaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P12. @ManyToMany requiere:",
            "Una tabla", "Tabla puente (junction)", "Dos tablas", "Índice",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@ManyToMany necesita tabla intermedia",
            "Relaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P13. Lazy loading en Hibernate carga datos:",
            "Inmediato", "Cuando se accede (bajo demanda)", "Nunca", "Siempre",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Lazy = cargar solo si se usa",
            "Estrategias", 2
        ));

        preguntas.add(new Pregunta(
            "P14. Eager loading en Hibernate carga:",
            "Bajo demanda", "Inmediatamente con padre", "Nunca", "Parcial",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Eager = cargar junto con entidad padre",
            "Estrategias", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Session en Hibernate es:",
            "Usuario web", "Contexto persistencia (unidad trabajo)", "Conexión BD", "Transacción",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Session = conversación con BD",
            "Conceptos", 2
        ));

        preguntas.add(new Pregunta(
            "P16. session.save(objeto) persiste:",
            "Actualiza", "Inserta nuevo registro", "Deletes", "Consulta",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "save() INSERT nuevo objeto",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P17. session.update(objeto) modifica:",
            "Inserta", "Actualiza registro existente", "Borra", "Lee",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "update() UPDATE objeto ya persistido",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P18. session.delete(objeto) elimina:",
            "Inserta", "Borra BD", "Copia", "Cierra",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "delete() DELETE del objeto",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P19. Cascade.ALL en relación significa:",
            "Borrar", "Propagar cambios padre a hijos", "Nada", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Cascade = operaciones afectan entidades relacionadas",
            "Relaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P20. FetchType.LAZY recomienda usar:",
            "Nunca", "Siempre en relaciones grandes", "A veces", "En índices",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LAZY = carga bajo demanda (optimiza)",
            "Optimización", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. Detached vs Transient en Hibernate:",
            "Igual", "Transient=nuevo, Detached=fue persistido", "Opuesto", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Estados entidad: transient, persistent, detached",
            "Estados", 3
        ));

        preguntas.add(new Pregunta(
            "P22. session.merge(objeto) es:",
            "Borrar", "Sincroniza detached con session", "Insertar", "Consultar",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "merge() reattach detached a session",
            "Operaciones", 3
        ));

        preguntas.add(new Pregunta(
            "P23. HQL (Hibernate Query Language):",
            "SQL puro", "Query sobre objetos (como SQL)", "Lenguaje BD", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "HQL = SQL pero sobre entidades Java",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P24. Criteria API en Hibernate permite:",
            "SQL string", "Queries programáticas (type-safe)", "HQL", "DDL",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Criteria API = queries sin strings",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P25. N+1 Query Problem es cuando:",
            "Una query perfecta", "1 SELECT + N SELECT para relaciones", "N queries", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "N+1 = select padre + 1 por cada hijo",
            "Problemas", 3
        ));

        preguntas.add(new Pregunta(
            "P26. Batch fetching resuelve N+1 por:",
            "Ignorar", "Fetch múltiples en batches", "Index", "Cache",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "batch_size agrupa fetches",
            "Optimización", 3
        ));

        preguntas.add(new Pregunta(
            "P27. Second-level Cache en Hibernate:",
            "Memoria session", "Cache compartido entre sesiones", "Disco", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "L2 cache = entre sesiones (EHCache, Redis)",
            "Cache", 3
        ));

        preguntas.add(new Pregunta(
            "P28. @NamedQuery permite:",
            "Solo select", "Definir queries reutilizables", "DDL", "Variables",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@NamedQuery = query con nombre",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Inheritance mapping @Inheritance:",
            "No existe", "Mapea herencia Java a BD", "Tabla", "Índice",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@Inheritance = estrategia SINGLE_TABLE, JOINED, TABLE_PER_CLASS",
            "Herencia", 3
        ));

        preguntas.add(new Pregunta(
            "P30. @Version en Hibernate detecta:",
            "Cambios", "Colisiones optimistic locking", "Usuarios", "Tiempo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@Version = versionado automático para detectar conflictos",
            "Optimización", 3
        ));

        return preguntas;
    }
}

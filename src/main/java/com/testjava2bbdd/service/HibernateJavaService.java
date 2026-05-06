package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class HibernateJavaService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. SessionFactory en Hibernate crea:",
            "Sesiones", "Pool sesiones (singleton)", "Mapeos", "Tablas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SessionFactory = fábrica Thread-safe reutilizable",
            "Configuración", 1
        ));

        preguntas.add(new Pregunta(
            "P2. Session en Hibernate representa:",
            "Usuario", "Conversación BD (unidad trabajo)", "Conexión", "Transacción",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Session = contexto persistencia",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P3. session.beginTransaction() inicia:",
            "Sesión", "Transacción explícita", "Query", "Conexión",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "beginTransaction() = inicia TX",
            "Transacciones", 1
        ));

        preguntas.add(new Pregunta(
            "P4. transaction.commit() persiste:",
            "Consulta", "Cambios a BD (permanente)", "Sesión", "Query",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "commit() = guarda cambios",
            "Transacciones", 1
        ));

        preguntas.add(new Pregunta(
            "P5. transaction.rollback() revierte:",
            "Sesión", "Cambios de transacción", "Tablas", "Mapeos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "rollback() = deshace cambios",
            "Transacciones", 1
        ));

        preguntas.add(new Pregunta(
            "P6. session.close() finaliza:",
            "Transacción", "Sesión (libera recursos)", "BD", "Aplicación",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "close() = cierre sesión",
            "Sesiones", 1
        ));

        preguntas.add(new Pregunta(
            "P7. sessionFactory.close() cierra:",
            "Sesión", "Fábrica (libera todo)", "Transacción", "Query",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "close() SessionFactory = shutdown",
            "Configuración", 1
        ));

        preguntas.add(new Pregunta(
            "P8. Configuration en Hibernate configura:",
            "Entidades", "Propiedades, mapeos, BD", "Sesiones", "Queries",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Configuration = setup inicial",
            "Configuración", 1
        ));

        preguntas.add(new Pregunta(
            "P9. hibernate.cfg.xml es:",
            "Clase", "Archivo configuración Hibernate", "Entidad", "Mapeo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "hibernate.cfg.xml = config XML",
            "Configuración", 1
        ));

        preguntas.add(new Pregunta(
            "P10. ORMappingException es lanzado por:",
            "Usuario", "Errores mapeo anotaciones", "SQL", "BD",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ORMappingException = problema @Entity/@Column",
            "Excepciones", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. Annotation-based mapping usa:",
            "XML", "@Entity, @Column, etc", "SQL", "Configuración",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Anotaciones = mejor que XML",
            "Mapeos", 2
        ));

        preguntas.add(new Pregunta(
            "P12. XML-based mapping usa archivos:",
            "Anotaciones", ".hbm.xml (mapeo XML)", "Clases", "Propiedades",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            ".hbm.xml = mapeo externo",
            "Mapeos", 2
        ));

        preguntas.add(new Pregunta(
            "P13. persist() en EntityManager:",
            "Carga", "Inserta nuevo (managed)", "Actualiza", "Borra",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "persist() = INSERT en JPA",
            "JPA", 2
        ));

        preguntas.add(new Pregunta(
            "P14. merge() en EntityManager:",
            "Nuevo", "Actualiza detached", "Borra", "Carga",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "merge() = UPDATE o INSERT",
            "JPA", 2
        ));

        preguntas.add(new Pregunta(
            "P15. find(id) en EntityManager obtiene:",
            "Por query", "Por clave primaria", "Primer", "Todos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "find() = SELECT by PK",
            "JPA", 2
        ));

        preguntas.add(new Pregunta(
            "P16. remove() en EntityManager elimina:",
            "Managed entity", "Entidad de BD", "Temporal", "Todo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "remove() = DELETE",
            "JPA", 2
        ));

        preguntas.add(new Pregunta(
            "P17. flush() en Session:",
            "Cierra", "Sincroniza BD (no commit)", "Rollback", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "flush() = SQL ejecuta sin commit",
            "Sesiones", 2
        ));

        preguntas.add(new Pregunta(
            "P18. clear() en Session limpia:",
            "BD", "Caché de sesión", "Transacción", "Mapeos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "clear() = limpia entidades managed",
            "Sesiones", 2
        ));

        preguntas.add(new Pregunta(
            "P19. evict() en Session desasocia:",
            "Sesión", "Una entidad de caché", "Todas", "BD",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "evict() = quita del caché",
            "Caché", 2
        ));

        preguntas.add(new Pregunta(
            "P20. Query.setMaxResults(10) limita:",
            "Queries", "Filas resultado", "Conexiones", "Sesiones",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "setMaxResults() = LIMIT",
            "Queries", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. JPA (Java Persistence API) es:",
            "Hibernate", "Especificación ORM (Hibernate implementa)", "SQL", "JDBC",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "JPA = estándar, Hibernate = implementación",
            "Conceptos", 3
        ));

        preguntas.add(new Pregunta(
            "P22. EntityManager en JPA es equivalente a:",
            "SessionFactory", "Session en Hibernate", "Connection", "ResultSet",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "EntityManager = Session JPA",
            "JPA", 3
        ));

        preguntas.add(new Pregunta(
            "P23. @PersistenceContext anotación es para:",
            "Inyección conexión", "Inyección EntityManager", "Mapeo", "Query",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@PersistenceContext = autowire EntityManager",
            "JPA", 3
        ));

        preguntas.add(new Pregunta(
            "P24. Query.createQuery() es para:",
            "Nativo", "HQL/JPQL query", "Stored procedure", "DDL",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "createQuery() = HQL/JPQL",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P25. Query.createNativeQuery() es para:",
            "HQL", "SQL puro", "Stored procedure", "Entity",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "createNativeQuery() = SQL directo",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P26. setParameter(nombre, valor) establece:",
            "Propiedad", "Valor parámetro query", "Entidad", "Conexión",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "setParameter() = valor en :nombre o ?",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P27. getSingleResult() retorna:",
            "Lista", "Un único resultado", "Todos", "Null",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "getSingleResult() = una fila (error si 0 o >1)",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P28. getResultList() retorna:",
            "Un resultado", "Lista de resultados", "Una fila", "Null",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "getResultList() = List<T>",
            "Queries", 3
        ));

        preguntas.add(new Pregunta(
            "P29. refresh() en EntityManager:",
            "Guarda", "Recarga de BD (deshace cambios)", "Copia", "Clona",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "refresh() = SELECT nuevamente",
            "JPA", 3
        ));

        preguntas.add(new Pregunta(
            "P30. detach() en EntityManager:",
            "Carga", "Desasocia entidad de contexto", "Borra", "Guarda",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "detach() = entidad se vuelve detached",
            "JPA", 3
        ));

        return preguntas;
    }
}

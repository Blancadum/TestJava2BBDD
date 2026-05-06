package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransaccionesService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. ACID significa:",
            "Acidity Chemical", "Atomicity Consistency Isolation Durability", "Advanced Coding", "Algo complejo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ACID = propiedades transaccionales",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. Atomicity en transacciones:",
            "Datos grandes", "TODO o NADA (todo-o-nada)", "Velocidad", "Seguridad",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Atomicity = operación indivisible (commit/rollback)",
            "ACID", 1
        ));

        preguntas.add(new Pregunta(
            "P3. Consistency significa:",
            "Datos comprimidos", "BD pasa de estado válido a válido", "Copia de datos", "Frecuencia",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Consistency = integridad datos tras transacción",
            "ACID", 1
        ));

        preguntas.add(new Pregunta(
            "P4. Isolation en transacciones es:",
            "Datos aislados", "Transacciones concurrentes no interfieren", "Encriptación", "Backup",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Isolation = cada transacción independiente",
            "ACID", 1
        ));

        preguntas.add(new Pregunta(
            "P5. Durability asegura:",
            "Datos únicos", "Datos guardados permanentemente tras commit", "Sin errores", "Sin pérdidas",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Durability = datos persisten incluso tras crash",
            "ACID", 1
        ));

        preguntas.add(new Pregunta(
            "P6. BEGIN; inicia:",
            "Consulta", "Transacción", "Tabla", "Usuario",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "BEGIN marca inicio transacción explícita",
            "Transacciones", 1
        ));

        preguntas.add(new Pregunta(
            "P7. COMMIT en transacción:",
            "Revierte cambios", "Confirma cambios (permanente)", "Pausa", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "COMMIT guarda cambios permanentemente",
            "Transacciones", 1
        ));

        preguntas.add(new Pregunta(
            "P8. ROLLBACK en transacción:",
            "Confirma", "Revierte cambios (abandona)", "Pausa", "Continúa",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ROLLBACK deshace cambios de transacción",
            "Transacciones", 1
        ));

        preguntas.add(new Pregunta(
            "P9. Dirty Read es cuando:",
            "Lee datos no confirmados de otra transacción", "Lee todos datos", "Lee datos viejos", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Dirty read = leer cambios no-committed",
            "Problemas", 1
        ));

        preguntas.add(new Pregunta(
            "P10. Deadlock ocurre cuando:",
            "Dos transacciones se bloquean mutuamente", "Hay un error", "Base de datos falla", "Puerto ocupado",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Deadlock = ciclo bloqueos imposible resolver",
            "Problemas", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. READ UNCOMMITTED aísla:",
            "Mucho", "Poco (permite dirty reads)", "Nada", "Todo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "READ UNCOMMITTED = sin aislamiento (peligroso)",
            "Aislamiento", 2
        ));

        preguntas.add(new Pregunta(
            "P12. READ COMMITTED previene:",
            "Dirty reads", "Dirty reads + non-repeatable reads", "Todo", "Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "READ COMMITTED = lee solo committed",
            "Aislamiento", 2
        ));

        preguntas.add(new Pregunta(
            "P13. REPEATABLE READ garantiza:",
            "Lectura consistente en transacción", "Sin phantom reads", "Sin cambios", "Sin errores",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "REPEATABLE READ = snapshot aislado",
            "Aislamiento", 2
        ));

        preguntas.add(new Pregunta(
            "P14. SERIALIZABLE es:",
            "Rápido", "Nivel máximo aislamiento (transacciones secuenciales)", "Peligroso", "Sin usar",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SERIALIZABLE = como ejecutar una por una",
            "Aislamiento", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Non-repeatable read es:",
            "Leer no confirmado", "Fila cambia entre lecturas en transacción", "Lectura lenta", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Non-repeatable = segunda lectura devuelve diferente",
            "Problemas", 2
        ));

        preguntas.add(new Pregunta(
            "P16. Phantom read ocurre cuando:",
            "Fila cambia", "Aparecen/desaparecen filas entre transacciones", "Tabla falla", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Phantom = nuevas filas satisfacen WHERE",
            "Problemas", 2
        ));

        preguntas.add(new Pregunta(
            "P17. Timeout de transacción es:",
            "Nunca expira", "Máximo tiempo antes de rollback automático", "Duración query", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Timeout previene transacciones eternas",
            "Configuración", 2
        ));

        preguntas.add(new Pregunta(
            "P18. Lock en transacción previene:",
            "Acceso", "Modificaciones conflictivas de otra tx", "Todo", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Lock bloquea acceso hasta release",
            "Bloqueos", 2
        ));

        preguntas.add(new Pregunta(
            "P19. Shared lock permite:",
            "Lectura múltiple (no escritura)", "Escribir", "Borrar", "Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Shared lock = múltiples lectores",
            "Bloqueos", 2
        ));

        preguntas.add(new Pregunta(
            "P20. Exclusive lock permite:",
            "Solo una transacción (lectura y escritura)", "Cualquiera leer", "Múltiples", "Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Exclusive lock = acceso único",
            "Bloqueos", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. MVCC (Multi-Version Concurrency Control):",
            "Varias copias datos para aislamiento", "Versión única", "Control lento", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "MVCC = snapshots para no bloquear",
            "Avanzado", 3
        ));

        preguntas.add(new Pregunta(
            "P22. Two-Phase Locking (2PL):",
            "2 bases de datos", "Bloquear luego liberar ordenado", "2 transacciones", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "2PL = fase bloqueo, fase liberación",
            "Avanzado", 3
        ));

        preguntas.add(new Pregunta(
            "P23. Optimistic locking confía en:",
            "Locks", "Pocas colisiones, detecta al commit", "Usuarios", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Optimistic = sin lock, verifica versión al final",
            "Estrategias", 3
        ));

        preguntas.add(new Pregunta(
            "P24. Pessimistic locking:",
            "Bloquea desde inicio (previene conflicto)", "Confianza", "Rápido", "Sin usar",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Pessimistic = lock inmediato preventivo",
            "Estrategias", 3
        ));

        preguntas.add(new Pregunta(
            "P25. Savepoint WITHIN transacción:",
            "Nuevo punto rollback parcial", "Commit parcial", "Error", "Transacción nueva",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "SAVEPOINT permite ROLLBACK TO parcial",
            "Avanzado", 3
        ));

        preguntas.add(new Pregunta(
            "P26. WAL (Write-Ahead Logging):",
            "Escribe disco ANTES cambios memoria", "Escribe después", "Sin usar", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "WAL = log en disco antes aplicar cambios",
            "Durability", 3
        ));

        preguntas.add(new Pregunta(
            "P27. Cascading Rollback ocurre cuando:",
            "Una tx falla, revierte dependientes", "Una falla", "Muchas fallan", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Cascading = rollback en cadena",
            "Problemas", 3
        ));

        preguntas.add(new Pregunta(
            "P28. Abort rate en transacciones es:",
            "Porcentaje fallidas/total", "Velocidad", "Número queries", "Tiempo",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Abort rate = (rollbacks/total) * 100%",
            "Métricas", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Checkpoint en BD es:",
            "Punto sincronización disco de cambios", "Revisión datos", "Copia", "Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Checkpoint = flush cambios a disco",
            "Durability", 3
        ));

        preguntas.add(new Pregunta(
            "P30. Recovery from crash usa:",
            "Memoria", "WAL para rehacer transacciones", "Backup", "Nothing",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Recovery = replay WAL para recuperar estado",
            "Recuperación", 3
        ));

        return preguntas;
    }
}

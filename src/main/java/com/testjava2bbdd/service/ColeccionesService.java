package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ColeccionesService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. Collection en Java es:",
            "Una clase", "Interfaz para agrupar objetos", "Un método", "Una variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Collection = interfaz raíz colecciones",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. List en Java es:",
            "Única", "Colección ordenada, permite duplicados", "Sin orden", "Sin valores",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "List = secuencia indexada",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P3. Set en Java es:",
            "Ordenada", "Sin duplicados, sin orden garantizado", "Indexada", "Con orden",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Set = elementos únicos",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P4. Map en Java es:",
            "Lista", "Clave-valor (diccionario)", "Conjunto", "Array",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Map = pares key-value",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P5. ArrayList es:",
            "Array fijo", "Lista redimensionable basada array", "Conjunto", "Diccionario",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ArrayList = List dinámico",
            "Implementaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P6. LinkedList es:",
            "Array", "Lista enlazada (nodos)", "Map", "Set",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LinkedList = nodos conectados",
            "Implementaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P7. HashSet es:",
            "Ordenado", "Set sin orden (hash)", "Secuencia", "Diccionario",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "HashSet = Set desordenado",
            "Implementaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P8. TreeSet es:",
            "Sin orden", "Set ordenado (árbol)", "Mapa", "Lista",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "TreeSet = Set ordenado automático",
            "Implementaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P9. HashMap es:",
            "Ordenado", "Map sin orden (hash)", "Set", "Lista",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "HashMap = Map desordenado",
            "Implementaciones", 1
        ));

        preguntas.add(new Pregunta(
            "P10. add() en Collection inserta:",
            "Reemplaza", "Agrega elemento", "Elimina", "Consulta",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "add() = INSERT",
            "Operaciones", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. size() en Collection retorna:",
            "Tipo", "Número elementos", "Lista", "Valor",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "size() = cantidad elementos",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P12. contains(elemento) revisa:",
            "Tipo", "Si elemento existe", "Posición", "Valor",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "contains() = búsqueda",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P13. remove(elemento) elimina:",
            "Primero", "Primer elemento que coincide", "Todos", "Aleatorio",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "remove() = DELETE primer match",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P14. get(índice) retorna:",
            "Tamaño", "Elemento en posición", "Clave", "Valor",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "get() = acceso por índice",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P15. put(clave, valor) en Map inserta:",
            "Solo clave", "Par clave-valor", "Solo valor", "Elemento",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "put() = INSERT/UPDATE en Map",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P16. get(clave) en Map retorna:",
            "Clave", "Valor asociado", "Índice", "Tipo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "get() accede por clave",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P17. keySet() en Map retorna:",
            "Valores", "Conjunto claves", "Pares", "Mapa",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "keySet() = todas claves",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P18. values() en Map retorna:",
            "Claves", "Colección valores", "Pares", "Mapa",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "values() = todos valores",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P19. entrySet() en Map retorna:",
            "Claves", "Pares clave-valor", "Valores", "Mapa",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "entrySet() = Entry<K,V> para ambos",
            "Operaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P20. Comparação ArrayList vs LinkedList:",
            "Iguales", "AL rápido acceso, LL rápido insert", "Opuesto", "No hay",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "AL O(1) get, LL O(n) get",
            "Rendimiento", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. equals() y hashCode() relación:",
            "Sin conexión", "Si iguales, mismo hash (contrato)", "Opuesto", "No hay",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "hashCode() debe ser consistente con equals()",
            "Contrato", 3
        ));

        preguntas.add(new Pregunta(
            "P22. TreeMap es:",
            "Desordenado", "Map ordenado por clave", "HashSet", "ArrayList",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "TreeMap = Map ordenado (Red-Black Tree)",
            "Implementaciones", 3
        ));

        preguntas.add(new Pregunta(
            "P23. LinkedHashMap es:",
            "Random", "Map orden inserción", "HashSet", "TreeSet",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LinkedHashMap = orden de inserción",
            "Implementaciones", 3
        ));

        preguntas.add(new Pregunta(
            "P24. ConcurrentHashMap es para:",
            "Sincronización", "Maps thread-safe sin lock total", "HashSet", "Única thread",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ConcurrentHashMap = sincronización por segmento",
            "Implementaciones", 3
        ));

        preguntas.add(new Pregunta(
            "P25. Collections.sort() ordena:",
            "Sin cambios", "Colección (in-place)", "Devuelve nueva", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "sort() modifica lista original",
            "Utilidades", 3
        ));

        preguntas.add(new Pregunta(
            "P26. Collections.binarySearch() requiere:",
            "Desordenado", "Lista ordenada", "Set", "Map",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "binarySearch() O(log n) en ordenados",
            "Utilidades", 3
        ));

        preguntas.add(new Pregunta(
            "P27. Stream API filter() retorna:",
            "Original", "Stream filtrado", "Colección", "Booleano",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "filter() = Stream intermedia",
            "Streams", 3
        ));

        preguntas.add(new Pregunta(
            "P28. Stream API map() transforma:",
            "Mismo tipo", "Stream de resultados transformados", "Colección", "Tipo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "map() = transformación de elementos",
            "Streams", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Stream API collect() es:",
            "Intermedia", "Terminal (recolecta resultados)", "Filtro", "Transformación",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "collect() = terminal, devuelve Collection",
            "Streams", 3
        ));

        preguntas.add(new Pregunta(
            "P30. WeakHashMap vs HashMap diferencia:",
            "Iguales", "Weak permite garbage collection claves", "Opuesto", "No hay",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "WeakHashMap = referencias débiles",
            "Implementaciones", 3
        ));

        return preguntas;
    }
}

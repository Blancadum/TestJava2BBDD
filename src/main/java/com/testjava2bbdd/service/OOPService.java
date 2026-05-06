package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class OOPService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. OOP (Programación Orientada Objetos) es:",
            "Matemática", "Paradigma basado en objetos/clases", "Algoritmo", "Librería",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "OOP = estructurar código en objetos",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. Clase en OOP es:",
            "Instancia", "Plantilla para crear objetos", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "clase = tipo (blueprint) de objeto",
            "Clases", 1
        ));

        preguntas.add(new Pregunta(
            "P3. Objeto en OOP es:",
            "Clase", "Instancia de clase", "Tipo", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "objeto = realización concreta de clase",
            "Objetos", 1
        ));

        preguntas.add(new Pregunta(
            "P4. Atributo (propiedad) en clase es:",
            "Método", "Dato miembro de clase", "Función", "Variable global",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "atributo = variable de clase/objeto",
            "Componentes", 1
        ));

        preguntas.add(new Pregunta(
            "P5. Método en clase es:",
            "Dato", "Función miembro de clase", "Variable", "Propiedad",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "método = comportamiento de clase",
            "Componentes", 1
        ));

        preguntas.add(new Pregunta(
            "P6. Herencia permite:",
            "Copiar código", "Clase heredar propiedades/métodos de otra", "Duplicar", "Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "herencia = reutilizar código base",
            "Principios", 1
        ));

        preguntas.add(new Pregunta(
            "P7. Encapsulación es:",
            "Compilación", "Ocultar detalles internos, exponer interfaz", "Herencia", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "encapsulación = private/public",
            "Principios", 1
        ));

        preguntas.add(new Pregunta(
            "P8. Polimorfismo es:",
            "Herencia", "Muchas formas (métodos con mismo nombre)", "Objeto", "Clase",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "polimorfismo = sobrecarga/sobrescritura",
            "Principios", 1
        ));

        preguntas.add(new Pregunta(
            "P9. extends en Java es para:",
            "Extender variable", "Heredar de clase padre", "Ampliar método", "Crear",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "extends = herencia (Hijo extends Padre)",
            "Herencia", 1
        ));

        preguntas.add(new Pregunta(
            "P10. super() en constructor llama a:",
            "Método actual", "Constructor clase padre", "Clase", "Variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "super() inicializa clase padre",
            "Herencia", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. Abstracción en OOP es:",
            "Detalles bajos nivel", "Simplificar complejidad, modelar concepto", "Herencia", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "abstracción = esencial vs detalles",
            "Principios", 2
        ));

        preguntas.add(new Pregunta(
            "P12. Abstract class es:",
            "Clase normal", "Clase no instanciable (esqueleto)", "Interfaz", "Objeto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "abstract class = base para herencia",
            "Abstracción", 2
        ));

        preguntas.add(new Pregunta(
            "P13. Interface en Java define:",
            "Implementación", "Contrato (métodos a implementar)", "Clase", "Atributo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "interface = qué hacer (no cómo)",
            "Abstracción", 2
        ));

        preguntas.add(new Pregunta(
            "P14. implements en Java es para:",
            "Heredar", "Implementar interfaz", "Extender", "Crear",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "implements = Clase implements Interface",
            "Interfaces", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Sobrecarga (overload) es:",
            "Métodos mismo nombre, parámetros diferentes", "Heredar", "Reescribir", "Ocultar",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "sobrecarga = múltiples mismo método",
            "Polimorfismo", 2
        ));

        preguntas.add(new Pregunta(
            "P16. Sobrescritura (override) es:",
            "Múltiples métodos", "Hijo redefine método padre", "Sobrecarga", "Clase",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "sobrescritura = hijo cambia implementación",
            "Polimorfismo", 2
        ));

        preguntas.add(new Pregunta(
            "P17. Composición en OOP es:",
            "Herencia", "Objeto contiene otro objeto", "Interfaz", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "composición = has-a (no is-a)",
            "Relaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P18. Asociación en OOP conecta:",
            "Clases", "Clases entre sí", "Métodos", "Variables",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "asociación = relación entre clases",
            "Relaciones", 2
        ));

        preguntas.add(new Pregunta(
            "P19. Cohesión en clase significa:",
            "Dependencia", "Métodos/atributos relacionados", "Herencia", "Interfaz",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "cohesión = elementos unidos por propósito",
            "Métricas", 2
        ));

        preguntas.add(new Pregunta(
            "P20. Acoplamiento bajo es:",
            "Muchas dependencias", "Pocas dependencias entre clases", "Herencia", "Interfaz",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "bajo acoplamiento = independencia",
            "Métricas", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. SOLID es conjunto de:",
            "Clases", "Principios OOP (5)", "Métodos", "Tipos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SOLID = S,O,L,I,D (5 principios)",
            "Principios", 3
        ));

        preguntas.add(new Pregunta(
            "P22. SRP (Single Responsibility) dice:",
            "Una clase", "Clase un propósito", "Método", "Variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "SRP = una razón cambiar",
            "SOLID", 3
        ));

        preguntas.add(new Pregunta(
            "P23. OCP (Open/Closed) permite:",
            "Extender sin modificar", "Cambiar cualquier cosa", "Borrar", "Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "OCP = abierto extensión, cerrado modificación",
            "SOLID", 3
        ));

        preguntas.add(new Pregunta(
            "P24. LSP (Liskov Substitution) garantiza:",
            "Sustitución segura", "Hijo reemplaza padre", "Tipo", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "LSP = subtipos sustituibles",
            "SOLID", 3
        ));

        preguntas.add(new Pregunta(
            "P25. ISP (Interface Segregation) propone:",
            "Interfaces grandes", "Muchas interfaces pequeñas (específicas)", "Métodos", "Clases",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "ISP = interfaces especializadas",
            "SOLID", 3
        ));

        preguntas.add(new Pregunta(
            "P26. DIP (Dependency Inversion) dice:",
            "Bajo nivel", "Depender abstracciones, no concreto", "Herencia", "Interfaz",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "DIP = inyección dependencias",
            "SOLID", 3
        ));

        preguntas.add(new Pregunta(
            "P27. Patrón Singleton asegura:",
            "Una instancia", "Una única instancia de clase", "Herencia", "Interfaz",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Singleton = instancia única global",
            "Patrones", 3
        ));

        preguntas.add(new Pregunta(
            "P28. Patrón Factory crea:",
            "Manualmente", "Objetos (abstrae creación)", "Métodos", "Variables",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Factory = método crear sin especificar clase",
            "Patrones", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Patrón Observer es para:",
            "Espiar", "Notificación cambios (publish-subscribe)", "Método", "Variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Observer = reacción eventos",
            "Patrones", 3
        ));

        preguntas.add(new Pregunta(
            "P30. Patrón Strategy permite:",
            "Fijar", "Cambiar algoritmo en runtime", "Heredar", "Copiar",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Strategy = algoritmo intercambiable",
            "Patrones", 3
        ));

        return preguntas;
    }
}

package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class BasicosJavaService {

    public List<Pregunta> crearTodasLasPreguntas() {
        List<Pregunta> preguntas = new ArrayList<>();

        // NIVEL 1: BAJA
        preguntas.add(new Pregunta(
            "P1. Java es un lenguaje:",
            "Ensamblador", "Interpretado y compilado", "Script", "Declarativo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Java compila a bytecode, JVM interpreta",
            "Fundamentos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. JVM (Java Virtual Machine) ejecuta:",
            "Código fuente", "Bytecode (.class)", "Binario", "Scripts",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "JVM es máquina virtual que ejecuta bytecode",
            "Conceptos", 1
        ));

        preguntas.add(new Pregunta(
            "P3. int en Java almacena:",
            "Decimales", "Números enteros 32-bit", "Textos", "Booleans",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "int = -2^31 a 2^31-1",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P4. String en Java es:",
            "Número", "Secuencia caracteres (objeto)", "Array", "Primitivo",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "String es clase, no tipo primitivo",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P5. boolean en Java puede ser:",
            "0 o 1", "true o false", "Número", "Texto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "boolean = true/false (no números)",
            "Tipos", 1
        ));

        preguntas.add(new Pregunta(
            "P6. null en Java significa:",
            "Cero", "Sin referencia (ausencia)", "Vacío", "False",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "null = referencia nula (sin objeto)",
            "Valores", 1
        ));

        preguntas.add(new Pregunta(
            "P7. if (condición) {} sirve para:",
            "Repetir", "Decisión condicional", "Función", "Clase",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "if ejecuta bloque si condición es true",
            "Control", 1
        ));

        preguntas.add(new Pregunta(
            "P8. for (int i=0; i<10; i++) repite:",
            "Infinitamente", "10 veces (i: 0-9)", "5 veces", "Una vez",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "for loop desde 0 hasta 9 (10 iteraciones)",
            "Control", 1
        ));

        preguntas.add(new Pregunta(
            "P9. while (condición) {} repite:",
            "N veces fijas", "Mientras condición sea true", "Una vez", "Nunca",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "while loop continúa si true",
            "Control", 1
        ));

        preguntas.add(new Pregunta(
            "P10. method() en Java es:",
            "Variable", "Función/procedimiento de clase", "Dato", "Constante",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "method = función con parámetros y retorno",
            "Funciones", 1
        ));

        // NIVEL 2: MEDIA
        preguntas.add(new Pregunta(
            "P11. public method() significa:",
            "Privado", "Accesible desde cualquier clase", "Solo clase", "Interno",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "public = acceso ilimitado",
            "Modificadores", 2
        ));

        preguntas.add(new Pregunta(
            "P12. private method() es:",
            "Público", "Accesible solo dentro clase", "Protegido", "Global",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "private = acceso solo clase",
            "Modificadores", 2
        ));

        preguntas.add(new Pregunta(
            "P13. static method() pertenece a:",
            "Instancia", "Clase (no necesita objeto)", "Paquete", "Proyecto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "static = accesible sin crear objeto",
            "Modificadores", 2
        ));

        preguntas.add(new Pregunta(
            "P14. final variable significa:",
            "Mutable", "Constante (no cambia)", "Temporal", "Global",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "final = asignación única",
            "Modificadores", 2
        ));

        preguntas.add(new Pregunta(
            "P15. Constructor es:",
            "Método normal", "Método especial (mismo nombre clase)", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Constructor inicializa objetos",
            "Clases", 2
        ));

        preguntas.add(new Pregunta(
            "P16. new Clase() crea:",
            "Clase", "Instancia/objeto de clase", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "new instancia clase",
            "Objetos", 2
        ));

        preguntas.add(new Pregunta(
            "P17. this en método Java refiere a:",
            "Clase", "Objeto actual (instancia)", "Método", "Variable",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "this = referencia al objeto mismo",
            "Palabras clave", 2
        ));

        preguntas.add(new Pregunta(
            "P18. super en método refiere a:",
            "Clase actual", "Clase padre (superclase)", "Método", "Global",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "super = referencia clase padre",
            "Herencia", 2
        ));

        preguntas.add(new Pregunta(
            "P19. == vs .equals() para Strings:",
            "Igual", "== referencia, .equals() contenido", "Opuesto", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "== compara referencia, .equals() compara valor",
            "Comparación", 2
        ));

        preguntas.add(new Pregunta(
            "P20. break en loop:",
            "Pausa", "Sale del loop", "Continúa", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "break termina loop",
            "Control", 2
        ));

        // NIVEL 3: ALTA
        preguntas.add(new Pregunta(
            "P21. Package en Java es:",
            "Clase", "Organización código (namespace)", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "package agrupa clases relacionadas",
            "Estructura", 3
        ));

        preguntas.add(new Pregunta(
            "P22. import java.util.*; importa:",
            "Una clase", "Todas clases de paquete util", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "import * carga todas clases del paquete",
            "Importaciones", 3
        ));

        preguntas.add(new Pregunta(
            "P23. @Override anotación verifica:",
            "Sintaxis", "Método sobrescribe padre", "Tipo", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "@Override indica método sobrescrito",
            "Anotaciones", 3
        ));

        preguntas.add(new Pregunta(
            "P24. Getter en Java es:",
            "Asignador", "Método que retorna valor privado", "Constructor", "Destructor",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "getter accede atributo privado",
            "Encapsulación", 3
        ));

        preguntas.add(new Pregunta(
            "P25. Setter en Java es:",
            "Obtenedor", "Método que asigna valor privado", "Getter", "Método",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "setter modifica atributo privado",
            "Encapsulación", 3
        ));

        preguntas.add(new Pregunta(
            "P26. instanceof verifica:",
            "Valor", "Si objeto es instancia de clase", "Tipo", "Null",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "instanceof = operador tipo-checking",
            "Operadores", 3
        ));

        preguntas.add(new Pregunta(
            "P27. Cast (tipo) objeto es para:",
            "Conversión de tipo", "Convertir objeto a tipo especifico", "Variable", "Función",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "cast = conversión tipo explícita",
            "Conversión", 3
        ));

        preguntas.add(new Pregunta(
            "P28. try-catch-finally estructura:",
            "Ignorar errores", "try ejecuta, catch atrapa, finally siempre", "Nada", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "try-catch maneja excepciones",
            "Excepciones", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Autoboxing en Java es:",
            "Automático", "Conversión primitivo <-> Objeto automático", "Manual", "Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "autoboxing = int <-> Integer automático",
            "Conversión", 3
        ));

        preguntas.add(new Pregunta(
            "P30. Varargs method(int... args) permite:",
            "Parámetro fijo", "Número variable de argumentos", "Ninguno", "Texto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "... = variable arguments",
            "Parámetros", 3
        ));

        return preguntas;
    }
}

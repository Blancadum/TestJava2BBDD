import java.util.ArrayList;

/**
 * TEST ADAPTATIVO: CONCEPTOS BÁSICOS DE JAVA
 * 30 preguntas distribuidas en 3 niveles de dificultad
 */
public class Basicos extends TestAdaptativo {

    public void iniciar() {
        // Flujo completo: saludo, nombre, ánimo, test
        super.iniciarTest("TEST: CONCEPTOS BÁSICOS DE JAVA");
    }

    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> preguntasAdaptadas = filtrarPorDificultad(todas);

        System.out.println("Tienes " + preguntasAdaptadas.size() + " preguntas. ¡Vamos!\n");

        for (Pregunta pregunta : preguntasAdaptadas) {
            pintarPregunta(pregunta);
            String respuesta = obtenerRespuesta();
            puntuarPregunta(pregunta, respuesta);
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
        String respuesta;
        do {
            System.out.print("\nTu respuesta (a/b/c/d): ");
            respuesta = scanner.nextLine().toLowerCase().trim();
        } while (!respuesta.matches("[a-d]"));
        return respuesta;
    }

    private void puntuarPregunta(Pregunta pregunta, String respuestaUsuario) {
        boolean esCorrecta = pregunta.esCorrecta(respuestaUsuario);
        respuestas.add(new Respuesta(pregunta, respuestaUsuario, esCorrecta));

        if (esCorrecta) {
            System.out.println("\n✅ " + pregunta.getMensajeOK());
        } else {
            System.out.println("\n❌ " + pregunta.getMensajeError());
            System.out.println("💡 " + pregunta.getSugerencia());
            conceptosDebiles.add(pregunta.getConcepto());
        }
    }

    /**
     * CREAR 30 PREGUNTAS (10 x cada nivel)
     */
    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> preguntas = new ArrayList<>();

        // ========== NIVEL 1: BAJA DIFICULTAD (10 preguntas) ==========
        preguntas.add(new Pregunta(
            "P1. Hola {NOMBRE}, ¿cuál es el tipo de dato para números enteros?",
            "a) float", "b) int", "c) double", "d) String",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "int es para números enteros", "Tipos de datos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. ¿Cuál es el rango de int en Java?",
            "a) 0-100", "b) -128 a 127", "c) -2,147,483,648 a 2,147,483,647", "d) -32,768 a 32,767",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "int es de 32 bits", "Tipos de datos", 1
        ));

        preguntas.add(new Pregunta(
            "P3. ¿Qué tipo de dato almacena texto?",
            "a) int", "b) char", "c) String", "d) boolean",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "String almacena cadenas de texto", "Tipos de datos", 1
        ));

        preguntas.add(new Pregunta(
            "P4. ¿Cuál es el resultado de 5 + 3?",
            "a) 53", "b) 8", "c) 15", "d) 7",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "5 + 3 = 8", "Aritmética", 1
        ));

        preguntas.add(new Pregunta(
            "P5. ¿Cuál es el operador para resto de división?",
            "a) /", "b) //", "c) %", "d) **",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "% calcula el módulo (resto)", "Operadores", 1
        ));

        preguntas.add(new Pregunta(
            "P6. ¿Qué operador se usa para comparación de igualdad?",
            "a) =", "b) ==", "c) !=", "d) ===",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "== compara valores", "Operadores", 1
        ));

        preguntas.add(new Pregunta(
            "P7. ¿Qué hace if?",
            "a) Repetir código", "b) Ejecutar código condicionalmente", "c) Declarar variables", "d) Crear objetos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "if ejecuta código si condición es true", "Control de flujo", 1
        ));

        preguntas.add(new Pregunta(
            "P8. ¿Cuál es la estructura correcta de un bucle for?",
            "a) for(;;)", "b) for(inicio; condición; incremento)", "c) for(variable in lista)", "d) for(){}",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "for(init; condición; incremento)", "Bucles", 1
        ));

        preguntas.add(new Pregunta(
            "P9. ¿Qué retorna 10 % 3?",
            "a) 3", "b) 1", "c) 10", "d) 0",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "10 % 3 = 1 (resto de 10/3)", "Aritmética", 1
        ));

        preguntas.add(new Pregunta(
            "P10. {NOMBRE}, ¿cuál es el tipo boolean?",
            "a) Texto", "b) Número", "c) Verdadero o Falso", "d) Ninguno",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "boolean solo tiene true o false", "Tipos de datos", 1
        ));

        // ========== NIVEL 2: DIFICULTAD MEDIA (10 preguntas) ==========
        preguntas.add(new Pregunta(
            "P11. ¿Cuál es el resultado de 5 + 3 * 2?",
            "a) 16", "b) 11", "c) 6", "d) 13",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "* tiene mayor precedencia que +", "Precedencia", 2
        ));

        preguntas.add(new Pregunta(
            "P12. ¿Qué diferencia hay entre = y ==?",
            "a) No hay diferencia", "b) = asigna, == compara", "c) == asigna, = compara", "d) Depende del contexto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "= es asignación, == es comparación", "Operadores", 2
        ));

        preguntas.add(new Pregunta(
            "P13. ¿Cuántas veces se ejecuta for(int i=0; i<5; i++)?",
            "a) 6 veces", "b) 5 veces", "c) 4 veces", "d) 0 veces",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "i va de 0 a 4, total 5 iteraciones", "Bucles", 2
        ));

        preguntas.add(new Pregunta(
            "P14. ¿Qué retorna 15 / 3?",
            "a) 5", "b) 0.5", "c) 5.0", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "15 / 3 = 5 (divisiones de enteros dan enteros)", "Aritmética", 2
        ));

        preguntas.add(new Pregunta(
            "P15. ¿Cuál es el resultado de true && false?",
            "a) true", "b) false", "c) null", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "&& (AND) devuelve true si AMBOS son true", "Operadores lógicos", 2
        ));

        preguntas.add(new Pregunta(
            "P16. ¿Qué hace continue en un bucle?",
            "a) Termina el bucle", "b) Salta a la siguiente iteración", "c) Pausa el bucle", "d) Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "continue salta el resto del bucle", "Control de flujo", 2
        ));

        preguntas.add(new Pregunta(
            "P17. {NOMBRE}, ¿qué es una variable?",
            "a) Una constante", "b) Un contenedor de datos que puede cambiar", "c) Una función", "d) Una clase",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Las variables almacenan valores", "Variables", 2
        ));

        preguntas.add(new Pregunta(
            "P18. ¿Cuál es el resultado de 10 > 5?",
            "a) 10", "b) 5", "c) true", "d) false",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "> compara y devuelve boolean", "Comparación", 2
        ));

        preguntas.add(new Pregunta(
            "P19. ¿Qué retorna false || true?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "|| (OR) devuelve true si al menos uno es true", "Operadores lógicos", 2
        ));

        preguntas.add(new Pregunta(
            "P20. ¿Cuál es el resultado de !true?",
            "a) true", "b) false", "c) null", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "! (NOT) invierte el valor", "Operadores lógicos", 2
        ));

        // ========== NIVEL 3: ALTA DIFICULTAD (10 preguntas) ==========
        preguntas.add(new Pregunta(
            "P21. ¿Cuál es el resultado de (5 + 3) * 2 - 1?",
            "a) 15", "b) 17", "c) 11", "d) 19",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "(5+3)=8, 8*2=16, 16-1=15", "Precedencia compleja", 3
        ));

        preguntas.add(new Pregunta(
            "P22. Si int x = 5; int y = x++; ¿Cuál es el valor de y?",
            "a) 5", "b) 6", "c) 4", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "x++ es post-incremento, devuelve valor actual", "Incremento", 3
        ));

        preguntas.add(new Pregunta(
            "P23. ¿Qué retorna (10 > 5) && (3 < 8)?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Ambas condiciones son true", "Lógica booleana", 3
        ));

        preguntas.add(new Pregunta(
            "P24. {NOMBRE}, ¿cuál es el tipo de dato para 3.14?",
            "a) int", "b) float", "c) double", "d) String",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "Los decimales sin sufijo son double", "Tipos de datos", 3
        ));

        preguntas.add(new Pregunta(
            "P25. ¿Qué retorna (5 == 5) || (3 > 10)?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "OR: al menos una es true", "Lógica booleana", 3
        ));

        preguntas.add(new Pregunta(
            "P26. Si int x = 0; while(x < 3) { x++; } ¿cuál es x?",
            "a) 0", "b) 2", "c) 3", "d) 4",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "x se incrementa hasta 3", "Bucles", 3
        ));

        preguntas.add(new Pregunta(
            "P27. ¿Cuál es el resultado de 5 / 2.0?",
            "a) 2", "b) 2.0", "c) 2.5", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "Dividir por double devuelve double", "Conversión de tipos", 3
        ));

        preguntas.add(new Pregunta(
            "P28. ¿Qué retorna !(true && false)?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "true && false = false, !false = true", "Lógica booleana", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Si int x = 5; ++x; ¿cuál es x?",
            "a) 5", "b) 6", "c) 4", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "++x es pre-incremento, incrementa inmediatamente", "Incremento", 3
        ));

        preguntas.add(new Pregunta(
            "P30. {NOMBRE}, ¿cuál es el resultado de (10 + 5) / 3?",
            "a) 5", "b) 5.0", "c) 6", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "15 / 3 = 5 (enteros)", "Aritmética", 3
        ));

        return preguntas;
    }

    public static void main(String[] args) {
        Test_Basicos_Adaptativo test = new Basicos();
        test.iniciar();
    }
}

import java.util.ArrayList;

/**
 * TEST ADAPTATIVO: CONCEPTOS BÁSICOS DE JAVA
 * 30 preguntas distribuidas en 3 niveles de dificultad
 */
public class Basicos extends TestAdaptativo {

    public void iniciar() {
        // Flujo completo: saludo, nombre, ánimo, test
        urlRecurso = "https://www.w3schools.com/JAVA/";
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

        System.out.println("\n════════════════════════════════════════════════════");
        System.out.println(esCorrecta ? "✅ RESPUESTA CORRECTA" : "❌ RESPUESTA INCORRECTA");
        System.out.println("════════════════════════════════════════════════════");
        System.out.println(esCorrecta ? pregunta.getMensajeOK() : pregunta.getMensajeError());
        System.out.println();
        System.out.println("💡 EXPLICACIÓN:");
        System.out.println(pregunta.getSugerencia());
        System.out.println("════════════════════════════════════════════════════");
        if (!esCorrecta) {
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
            "int = para números ENTEROS (sin decimales). Ejemplos: int edad = 25; int cantidad = -50; double es para DECIMALES como 3.14", "Tipos de datos", 1
        ));

        preguntas.add(new Pregunta(
            "P2. ¿Cuál es el rango de int en Java?",
            "a) 0-100", "b) -128 a 127", "c) -2,147,483,648 a 2,147,483,647", "d) -32,768 a 32,767",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "RANGO = valores mínimo y máximo permitidos. int usa 32 bits = puede guardar desde -2,147,483,648 hasta 2,147,483,647. Ejemplo: int x = 2147483647; ✓ OK. int y = 3000000000; ✗ ERROR (demasiado grande, necesita long)", "Tipos de datos", 1
        ));

        preguntas.add(new Pregunta(
            "P3. ¿Qué tipo de dato almacena texto?",
            "a) int", "b) char", "c) String", "d) boolean",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "String = texto/cadenas de caracteres. Ejemplos: String nombre = \"Juan\"; String mensaje = \"Hola\"; char es solo 1 carácter", "Tipos de datos", 1
        ));

        preguntas.add(new Pregunta(
            "P4. ¿Cuál es el resultado de 5 + 3?",
            "a) 53", "b) 8", "c) 15", "d) 7",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Suma simple: 5 + 3 = 8. Nota: a) sería concatenación de strings \"5\" + \"3\" = \"53\". Aquí son números, así que es suma aritmética", "Aritmética", 1
        ));

        preguntas.add(new Pregunta(
            "P5. ¿Cuál es el operador para resto de división?",
            "a) /", "b) //", "c) %", "d) **",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "% = MÓDULO (resto). Ejemplo: 10 % 3 = 1 (porque 10/3 = 3 resto 1). / es división normal (10/3 = 3 en enteros)", "Operadores", 1
        ));

        preguntas.add(new Pregunta(
            "P6. ¿Qué operador se usa para comparación de igualdad?",
            "a) =", "b) ==", "c) !=", "d) ===",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "== COMPARA dos valores. Ejemplo: if(5 == 5) es TRUE. = es ASIGNACIÓN (x = 5). != es \"no igual\" (5 != 3 es TRUE)", "Operadores", 1
        ));

        preguntas.add(new Pregunta(
            "P7. ¿Qué hace if?",
            "a) Repetir código", "b) Ejecutar código condicionalmente", "c) Declarar variables", "d) Crear objetos",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "if = ejecución CONDICIONAL. Ejemplo: if(edad >= 18) { System.out.println(\"Eres mayor\"); } Solo se ejecuta si la condición es TRUE", "Control de flujo", 1
        ));

        preguntas.add(new Pregunta(
            "P8. ¿Cuál es la estructura correcta de un bucle for?",
            "a) for(;;)", "b) for(inicio; condición; incremento)", "c) for(variable in lista)", "d) for(){}",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "for(int i=0; i<5; i++) { ... } → Inicio: i=0, Condición: i<5, Incremento: i++. for(;;) es bucle infinito", "Bucles", 1
        ));

        preguntas.add(new Pregunta(
            "P9. ¿Qué retorna 10 % 3?",
            "a) 3", "b) 1", "c) 10", "d) 0",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "10 % 3 = 1 (módulo = resto). 10 ÷ 3 = 3 con resto 1. Otros ejemplos: 10 % 2 = 0, 7 % 3 = 1, 5 % 5 = 0", "Aritmética", 1
        ));

        preguntas.add(new Pregunta(
            "P10. {NOMBRE}, ¿cuál es el tipo boolean?",
            "a) Texto", "b) Número", "c) Verdadero o Falso", "d) Ninguno",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "boolean = solo 2 valores posibles: TRUE o FALSE. Ejemplos: boolean esActivo = true; boolean esMenor = (5 < 10); usado en if/while", "Tipos de datos", 1
        ));

        // ========== NIVEL 2: DIFICULTAD MEDIA (10 preguntas) ==========
        preguntas.add(new Pregunta(
            "P11. ¿Cuál es el resultado de 5 + 3 * 2?",
            "a) 16", "b) 11", "c) 6", "d) 13",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "PRECEDENCIA: * antes que +. Orden: 3*2=6, luego 5+6=11. Es como matemáticas: multiplicación/división se hacen primero", "Precedencia", 2
        ));

        preguntas.add(new Pregunta(
            "P12. ¿Qué diferencia hay entre = y ==?",
            "a) No hay diferencia", "b) = asigna, == compara", "c) == asigna, = compara", "d) Depende del contexto",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "= ASIGNA valor: int x = 5; (x ahora vale 5). == COMPARA: if(x == 5) { } (pregunta: ¿x es igual a 5?). Error común: usar = en if", "Operadores", 2
        ));

        preguntas.add(new Pregunta(
            "P13. ¿Cuántas veces se ejecuta for(int i=0; i<5; i++)?",
            "a) 6 veces", "b) 5 veces", "c) 4 veces", "d) 0 veces",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "i COMIENZA en 0, TERMINA cuando i < 5 (i=5 no entra). Iteraciones: i=0,1,2,3,4 = 5 veces. Regla: for(init; i<N) ejecuta N veces", "Bucles", 2
        ));

        preguntas.add(new Pregunta(
            "P14. ¿Qué retorna 15 / 3?",
            "a) 5", "b) 0.5", "c) 5.0", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "entero ÷ entero = entero. 15 / 3 = 5. Si fuera 15.0 / 3 = 5.0 (double). En Java: int/int descarta decimales", "Aritmética", 2
        ));

        preguntas.add(new Pregunta(
            "P15. ¿Cuál es el resultado de true && false?",
            "a) true", "b) false", "c) null", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "&& (AND) lógico: REQUIERE que AMBOS sean TRUE. true && false = FALSE. Tabla: T&&T=T, T&&F=F, F&&T=F, F&&F=F", "Operadores lógicos", 2
        ));

        preguntas.add(new Pregunta(
            "P16. ¿Qué hace continue en un bucle?",
            "a) Termina el bucle", "b) Salta a la siguiente iteración", "c) Pausa el bucle", "d) Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "continue = SALTA resto iteración y va a la siguiente. Ejemplo: for(i=0;i<5;i++){if(i==2)continue; print(i);} → imprime: 0,1,3,4 (no 2)", "Control de flujo", 2
        ));

        preguntas.add(new Pregunta(
            "P17. {NOMBRE}, ¿qué es una variable?",
            "a) Una constante", "b) Un contenedor de datos que puede cambiar", "c) Una función", "d) Una clase",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "Variable = contenedor que CAMBIA de valor. int x = 5; x = 10; (x cambió). Constante = NO cambia (final int X = 5;)", "Variables", 2
        ));

        preguntas.add(new Pregunta(
            "P18. ¿Cuál es el resultado de 10 > 5?",
            "a) 10", "b) 5", "c) true", "d) false",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "> = mayor que. Devuelve BOOLEAN. 10 > 5 = TRUE. Otros: >= (mayor o igual), < (menor), <= (menor o igual), == (igual), != (no igual)", "Comparación", 2
        ));

        preguntas.add(new Pregunta(
            "P19. ¿Qué retorna false || true?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "|| (OR) = AL MENOS UNO debe ser TRUE. false || true = TRUE. Tabla: T||T=T, T||F=T, F||T=T, F||F=F", "Operadores lógicos", 2
        ));

        preguntas.add(new Pregunta(
            "P20. ¿Cuál es el resultado de !true?",
            "a) true", "b) false", "c) null", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "! (NOT) = INVIERTE el boolean. !true = false, !false = true. Ejemplo: if(!x) { } (si x es FALSE)", "Operadores lógicos", 2
        ));

        // ========== NIVEL 3: ALTA DIFICULTAD (10 preguntas) ==========
        preguntas.add(new Pregunta(
            "P21. ¿Cuál es el resultado de (5 + 3) * 2 - 1?",
            "a) 15", "b) 17", "c) 11", "d) 19",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Orden: 1) Paréntesis: (5+3)=8. 2) *: 8*2=16. 3) -: 16-1=15. Regla: () > * / > + -", "Precedencia compleja", 3
        ));

        preguntas.add(new Pregunta(
            "P22. Si int x = 5; int y = x++; ¿Cuál es el valor de y?",
            "a) 5", "b) 6", "c) 4", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "x++ (POST): devuelve 5 a y, LUEGO incrementa. y=5, x=6. ++x (PRE): incrementa primero, luego devuelve. ++x daría y=6, x=6", "Incremento", 3
        ));

        preguntas.add(new Pregunta(
            "P23. ¿Qué retorna (10 > 5) && (3 < 8)?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "(10>5)=TRUE, (3<8)=TRUE, TRUE && TRUE = TRUE. Si una fuera FALSE, resultado sería FALSE", "Lógica booleana", 3
        ));

        preguntas.add(new Pregunta(
            "P24. {NOMBRE}, ¿cuál es el tipo de dato para 3.14?",
            "a) int", "b) float", "c) double", "d) String",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "Decimales SIN sufijo = double. 3.14 es double. Para float: 3.14f. double ocupa 64 bits, float 32 bits", "Tipos de datos", 3
        ));

        preguntas.add(new Pregunta(
            "P25. ¿Qué retorna (5 == 5) || (3 > 10)?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "(5==5)=TRUE, (3>10)=FALSE, TRUE || FALSE = TRUE. || requiere AL MENOS UNA verdadera", "Lógica booleana", 3
        ));

        preguntas.add(new Pregunta(
            "P26. Si int x = 0; while(x < 3) { x++; } ¿cuál es x?",
            "a) 0", "b) 2", "c) 3", "d) 4",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "while continúa MIENTRAS x < 3: x=0,1,2. Cuando x=3, condición es FALSE, sale. Final: x=3", "Bucles", 3
        ));

        preguntas.add(new Pregunta(
            "P27. ¿Cuál es el resultado de 5 / 2.0?",
            "a) 2", "b) 2.0", "c) 2.5", "d) Error",
            "c", "✅ Correcto.", "❌ Incorrecto.",
            "5/2 (int/int)=2. 5/2.0 (int/double)=2.5. Si UNO es double, resultado es double con decimales", "Conversión de tipos", 3
        ));

        preguntas.add(new Pregunta(
            "P28. ¿Qué retorna !(true && false)?",
            "a) true", "b) false", "c) null", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "Orden: 1) true && false = FALSE. 2) !FALSE = TRUE. El ! invierte todo resultado", "Lógica booleana", 3
        ));

        preguntas.add(new Pregunta(
            "P29. Si int x = 5; ++x; ¿cuál es x?",
            "a) 5", "b) 6", "c) 4", "d) Error",
            "b", "✅ Correcto.", "❌ Incorrecto.",
            "++x (PRE): incrementa INMEDIATAMENTE. x pasa a 6. x++ (POST): también incrementa, pero devuelve valor anterior", "Incremento", 3
        ));

        preguntas.add(new Pregunta(
            "P30. {NOMBRE}, ¿cuál es el resultado de (10 + 5) / 3?",
            "a) 5", "b) 5.0", "c) 6", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.",
            "(10+5)=15. 15/3=5. Ambos son int, resultado int (sin decimales). Si fuera 15/3.0=5.0", "Aritmética", 3
        ));

        return preguntas;
    }

    public static void main(String[] args) {
        Basicos test = new Basicos();
        test.iniciar();
    }
}

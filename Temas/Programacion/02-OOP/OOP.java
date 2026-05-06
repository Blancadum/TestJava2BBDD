import java.util.ArrayList;

public class OOP extends TestAdaptativo {
    public void iniciar() {
        super.iniciarTest("TEST: PROGRAMACIÓN ORIENTADA A OBJETOS (OOP)");
    }

    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        System.out.println("Tienes " + filtradas.size() + " preguntas sobre OOP. ¡Vamos!\n");

        for (Pregunta p : filtradas) {
            pintarPregunta(p);
            String resp = obtenerRespuesta();
            puntuarPregunta(p, resp);
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
        String resp;
        do {
            System.out.print("\nTu respuesta (a/b/c/d): ");
            resp = scanner.nextLine().toLowerCase().trim();
        } while (!resp.matches("[a-d]"));
        return resp;
    }

    private void puntuarPregunta(Pregunta p, String resp) {
        boolean ok = p.esCorrecta(resp);
        respuestas.add(new Respuesta(p, resp, ok));
        System.out.println(ok ? "\n✅ " + p.getMensajeOK() : "\n❌ " + p.getMensajeError());
        if (!ok) conceptosDebiles.add(p.getConcepto());
    }

    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // NIVEL 1: BAJA (10)
        p.add(new Pregunta("P1. ¿Qué es una clase en Java?", "a) Una variable", "b) Un molde para crear objetos", "c) Un método", "d) Un error", "b", "✅", "❌", "Molde para objetos", "Clases", 1));
        p.add(new Pregunta("P2. ¿Qué es un objeto?", "a) Una clase", "b) Una instancia de una clase", "c) Un método", "d) Un dato", "b", "✅", "❌", "Instancia de clase", "Objetos", 1));
        p.add(new Pregunta("P3. ¿Qué es un atributo?", "a) Un método", "b) Una variable de la clase", "c) Un parámetro", "d) Un constructor", "b", "✅", "❌", "Variable de clase", "Atributos", 1));
        p.add(new Pregunta("P4. ¿Qué es un método?", "a) Una variable", "b) Una función dentro de una clase", "c) Un tipo de dato", "d) Un constructor", "b", "✅", "❌", "Función de clase", "Métodos", 1));
        p.add(new Pregunta("P5. ¿Cuál es la palabra clave para crear un objeto?", "a) class", "b) new", "c) object", "d) create", "b", "✅", "❌", "new crea instancia", "Instanciación", 1));
        p.add(new Pregunta("P6. ¿Qué es 'private'?", "a) Una variable", "b) Un modificador que protege acceso", "c) Un método", "d) Un tipo de dato", "b", "✅", "❌", "Modificador de acceso", "Encapsulación", 1));
        p.add(new Pregunta("P7. ¿Qué es 'public'?", "a) Un error", "b) Acceso restringido", "c) Acceso permitido desde cualquier lugar", "d) Un tipo de dato", "c", "✅", "❌", "Acceso público", "Encapsulación", 1));
        p.add(new Pregunta("P8. {NOMBRE}, ¿qué es un constructor?", "a) Un método normal", "b) Método especial que inicializa objetos", "c) Un atributo", "d) Una clase", "b", "✅", "❌", "Inicializa objetos", "Constructores", 1));
        p.add(new Pregunta("P9. ¿Qué hace 'this'?", "a) Nada especial", "b) Refiere al objeto actual", "c) Crea un nuevo objeto", "d) Define una clase", "b", "✅", "❌", "Referencia al objeto", "this", 1));
        p.add(new Pregunta("P10. ¿Cuándo se ejecuta el constructor?", "a) Al compilar", "b) Al crear un objeto", "c) Al terminar", "d) Nunca", "b", "✅", "❌", "Se ejecuta con new", "Constructores", 1));

        // NIVEL 2: MEDIA (10)
        p.add(new Pregunta("P11. ¿Cuál es la diferencia entre private y public?", "a) No hay", "b) private=interno, public=externo", "c) private=variable, public=método", "d) Depende", "b", "✅", "❌", "Niveles de acceso", "Encapsulación", 2));
        p.add(new Pregunta("P12. ¿Qué es un getter?", "a) Un constructor", "b) Un método que devuelve atributo", "c) Una variable", "d) Un tipo de dato", "b", "✅", "❌", "Método que retorna valor", "Getters", 2));
        p.add(new Pregunta("P13. ¿Qué es un setter?", "a) Un getter", "b) Un método que cambia atributo", "c) Un constructor", "d) Una clase", "b", "✅", "❌", "Método que modifica valor", "Setters", 2));
        p.add(new Pregunta("P14. ¿Qué es herencia?", "a) Pasar dinero", "b) Una clase extiende otra", "c) Crear múltiples objetos", "d) Nada importante", "b", "✅", "❌", "Extiende clase padre", "Herencia", 2));
        p.add(new Pregunta("P15. ¿Cuál es la palabra clave para herencia?", "a) implements", "b) extends", "c) inherits", "d) parent", "b", "✅", "❌", "extends para herencia", "Herencia", 2));
        p.add(new Pregunta("P16. ¿Qué es polimorfismo?", "a) Múltiples clases", "b) Método con múltiples formas", "c) Herencia", "d) Encapsulación", "b", "✅", "❌", "Método con varias formas", "Polimorfismo", 2));
        p.add(new Pregunta("P17. {NOMBRE}, ¿qué es 'super'?", "a) Una clase", "b) Refiere a clase padre", "c) Un modificador", "d) Un método", "b", "✅", "❌", "Accede a clase padre", "super", 2));
        p.add(new Pregunta("P18. ¿Qué es sobrecarga de métodos?", "a) Error de compilación", "b) Mismo método, diferente parámetros", "c) Múltiples constructores", "d) Herencia", "b", "✅", "❌", "Mismo nombre, distinto parámetros", "Sobrecarga", 2));
        p.add(new Pregunta("P19. ¿Qué es 'static'?", "a) Un error", "b) Atributo/método de clase, no instancia", "c) Un tipo de dato", "d) Un modificador", "b", "✅", "❌", "Pertenece a clase", "static", 2));
        p.add(new Pregunta("P20. ¿Qué es 'final'?", "a) Un error", "b) Evita que se modifique/sobrescriba", "c) Un tipo de dato", "d) Un constructor", "b", "✅", "❌", "No se puede cambiar", "final", 2));

        // NIVEL 3: ALTA (10)
        p.add(new Pregunta("P21. ¿Cuál es el orden de ejecución: constructor vs método?", "a) Método primero", "b) Constructor siempre primero", "c) Depende", "d) Simultáneamente", "b", "✅", "❌", "Constructor al crear objeto", "Orden", 3));
        p.add(new Pregunta("P22. Si una clase B extiende A, ¿hereda métodos privados?", "a) Sí", "b) No, privados no se heredan", "c) Solo algunos", "d) Depende", "b", "✅", "❌", "private no se hereda", "Herencia", 3));
        p.add(new Pregunta("P23. ¿Qué es un método abstracto?", "a) Sin cuerpo, debe ser implementado", "b) Un error", "c) Un constructor", "d) Un atributo", "a", "✅", "❌", "Sin implementación", "Métodos abstractos", 3));
        p.add(new Pregunta("P24. {NOMBRE}, ¿qué es una interfaz?", "a) Un contrato de métodos públicos", "b) Una clase especial", "c) Un tipo de dato", "d) Un objeto", "a", "✅", "❌", "Contrato de métodos", "Interfaces", 3));
        p.add(new Pregunta("P25. ¿Cuál es la diferencia entre clase abstracta e interfaz?", "a) No hay", "b) Abstracta=parcial, Interfaz=contrato total", "c) Interfaz es más rápida", "d) Depende", "b", "✅", "❌", "Abstracta vs Interfaz", "Diseño", 3));
        p.add(new Pregunta("P26. Si class B extends A implements I, ¿cuál es el orden?", "a) I primero", "b) A primero", "c) Depende", "d) Orden no importa", "b", "✅", "❌", "extends antes implements", "Herencia", 3));
        p.add(new Pregunta("P27. ¿Qué es 'instanceof'?", "a) Un error", "b) Verifica tipo de objeto", "c) Crea instancia", "d) Un método", "b", "✅", "❌", "Verifica instancia", "Tipos", 3));
        p.add(new Pregunta("P28. ¿Qué es casting de objetos?", "a) Un error", "b) Convertir tipo de objeto", "c) Crear objeto", "d) Heredar", "b", "✅", "❌", "Conversión de tipo", "Casting", 3));
        p.add(new Pregunta("P29. {NOMBRE}, si A extends B extends C, ¿heredará C?", "a) No", "b) Sí, indirectamente", "c) Solo métodos", "d) Error", "b", "✅", "❌", "Herencia transitiva", "Herencia", 3));
        p.add(new Pregunta("P30. ¿Cuál es el propósito de encapsulación?", "a) Acelerar código", "b) Proteger datos y controlar acceso", "c) Crear más objetos", "d) Simplificar código", "b", "✅", "❌", "Protección de datos", "Encapsulación", 3));

        return p;
    }

    public static void main(String[] args) {
        Test_OOP_Adaptativo test = new OOP();
        test.iniciar();
    }
}

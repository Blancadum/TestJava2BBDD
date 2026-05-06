import java.util.Scanner;
import java.util.ArrayList;
import java.time.LocalDateTime;

/**
 * CLASE BASE PARA TESTS ADAPTATIVOS
 *
 * Características:
 * - Saludo dinámico según hora (Buenos días/tardes/noches)
 * - Captura nombre del usuario
 * - Evalúa estado anímico/motivación
 * - Adapta dificultad (BAJA, MEDIA, ALTA)
 * - Incluye nombre en preguntas como variable
 */
public abstract class TestAdaptativo {

    protected Scanner scanner;
    protected String nombreUsuario;
    protected int nivelDificultad;  // 1=BAJA, 2=MEDIA, 3=ALTA
    protected ArrayList<Respuesta> respuestas;
    protected ArrayList<String> conceptosDebiles;
    protected String urlRecurso;  // URL de recursos para el tema

    // Variables estáticas para guardar datos en toda la sesión
    private static String nombreGlobal = null;
    private static int dificultadGlobal = 2;  // Por defecto nivel MEDIA (2)

    public TestAdaptativo() {
        this.scanner = new Scanner(System.in);
        this.respuestas = new ArrayList<>();
        this.conceptosDebiles = new ArrayList<>();
    }

    /**
     * FLUJO PRINCIPAL DEL TEST
     */
    public void iniciarTest(String tituloTest) {
        // 1. Saludo dinámico
        String saludo = obtenerSaludo();
        System.out.println("\n" + saludo);

        // 2. Banner del test
        System.out.println("\n╔════════════════════════════════════════════════════╗");
        System.out.println("║  🎓 " + tituloTest);
        System.out.println("╚════════════════════════════════════════════════════╝\n");

        // 3. Capturar nombre (solo si no existe)
        if (nombreGlobal == null) {
            nombreGlobal = obtenerNombre();
        }
        nombreUsuario = nombreGlobal;

        // 4. Preguntar estado anímico
        nivelDificultad = obtenerDificultad();

        // 5. Confirmación
        String[] dificultadNombres = {"", "BAJA", "MEDIA", "ALTA"};
        System.out.println("\n¡Perfecto, " + nombreUsuario + "! Vamos con preguntas de dificultad " +
                          dificultadNombres[nivelDificultad] + ".\n");

        System.out.print("¿Listo para comenzar? (s/n): ");
        if (!scanner.nextLine().toLowerCase().equals("s")) {
            System.out.println("Test cancelado. ¡Hasta pronto, " + nombreUsuario + "!");
            return;
        }

        // 6. Ejecutar test (método abstracto)
        ejecutarTest();

        // 7. Mostrar resultados
        mostrarResultados();
    }

    /**
     * SALUDO DINÁMICO SEGÚN HORA
     */
    private String obtenerSaludo() {
        LocalDateTime ahora = LocalDateTime.now();
        int hora = ahora.getHour();

        if (hora >= 5 && hora < 12) {
            return "☀️  ¡Buenos días!";
        } else if (hora >= 12 && hora < 18) {
            return "🌤️  ¡Buenas tardes!";
        } else {
            return "🌙 ¡Buenas noches!";
        }
    }

    /**
     * CAPTURAR NOMBRE DEL USUARIO
     */
    private String obtenerNombre() {
        System.out.print("¿Cuál es tu nombre? ");
        String nombre = scanner.nextLine().trim();
        if (nombre.isEmpty()) {
            nombre = "Estudiante";
        }
        return nombre;
    }

    /**
     * PREGUNTAR ESTADO ANÍMICO Y DEVOLVER DIFICULTAD
     */
    private int obtenerDificultad() {
        // Si ya existe dificultad global (no es la primera sesión), usarla
        if (dificultadGlobal != 2) {
            String[] dificultadNombres = {"", "BAJA", "MEDIA", "ALTA"};
            System.out.println("\n✅ Manteniendo nivel: " + dificultadNombres[dificultadGlobal]);
            return dificultadGlobal;
        }

        System.out.println("\n¿Cómo te encuentras hoy, " + nombreUsuario + "?");
        System.out.println("a) Necesito calentarme (preguntas fáciles)");
        System.out.println("b) Voy bien (preguntas normales)");
        System.out.println("c) Dame un reto (preguntas difíciles)");

        String respuesta;
        do {
            System.out.print("\nTu respuesta (a/b/c): ");
            respuesta = scanner.nextLine().toLowerCase().trim();
        } while (!respuesta.matches("[a-c]"));

        int dificultad;
        if (respuesta.equals("a")) {
            System.out.println("✅ Entendido. Empezaremos con lo básico para coger ritmo.");
            dificultad = 1;  // BAJA
        } else if (respuesta.equals("b")) {
            System.out.println("✅ Perfecto. Preguntas del nivel normal.");
            dificultad = 2;  // MEDIA
        } else {
            System.out.println("✅ ¡Me encanta tu actitud! Aquí vienen las difíciles.");
            dificultad = 3;  // ALTA
        }

        dificultadGlobal = dificultad;
        return dificultad;
    }

    /**
     * FILTRAR PREGUNTAS POR DIFICULTAD
     */
    protected ArrayList<Pregunta> filtrarPorDificultad(ArrayList<Pregunta> todasLasPreguntas) {
        ArrayList<Pregunta> filtradas = new ArrayList<>();

        for (Pregunta p : todasLasPreguntas) {
            if (p.getDificultad() == nivelDificultad) {
                filtradas.add(p);
            }
        }

        // Si no hay preguntas del nivel exacto, devolver todas (fallback)
        if (filtradas.isEmpty()) {
            return todasLasPreguntas;
        }

        return filtradas;
    }

    /**
     * INCLUIR NOMBRE EN LAS PREGUNTAS
     */
    protected String incluirNombre(String texto) {
        return texto.replace("{NOMBRE}", nombreUsuario);
    }

    /**
     * MOSTRAR RESULTADOS FINALES
     */
    protected void mostrarResultados() {
        System.out.println("\n╔════════════════════════════════════════════════════╗");
        System.out.println("║  📊 RESULTADOS FINALES                            ║");
        System.out.println("╚════════════════════════════════════════════════════╝\n");

        int puntuacion = 0;
        for (Respuesta r : respuestas) {
            if (r.esCorrecta()) {
                puntuacion++;
            }
        }

        int totalPreguntas = respuestas.size();
        int porcentaje = totalPreguntas > 0 ? (puntuacion * 100) / totalPreguntas : 0;

        System.out.println("Puntuación: " + puntuacion + "/" + totalPreguntas);
        System.out.println("Porcentaje: " + porcentaje + "%\n");

        // Evaluación cualitativa
        if (porcentaje >= 90) {
            System.out.println("🏆 ¡EXCELENTE, " + nombreUsuario + "! ¡Dominas este tema!");
        } else if (porcentaje >= 75) {
            System.out.println("👍 ¡BIEN, " + nombreUsuario + "! Buena comprensión.");
        } else if (porcentaje >= 60) {
            System.out.println("📚 ACEPTABLE, " + nombreUsuario + ". Refuerza lo pendiente.");
        } else {
            System.out.println("⚠️  " + nombreUsuario + ", necesitas repasar más.");
        }

        // Conceptos débiles
        if (!conceptosDebiles.isEmpty()) {
            System.out.println("\n📌 CONCEPTOS A REFORZAR:");
            for (String concepto : conceptosDebiles) {
                System.out.println("  ❌ " + concepto);
            }

            System.out.println("\n💡 RECOMENDACIONES:");
            System.out.println("  1. Repasa los temas marcados");
            System.out.println("  2. Intenta el test de nuevo en una hora");
            System.out.println("  3. Si aún tienes dudas, consulta la documentación");
        } else {
            System.out.println("\n🎉 ¡Perfecto, " + nombreUsuario + "! ¡Listo para el siguiente tema!\n");
        }

        // Mostrar recurso si porcentaje <= 70%
        if (porcentaje <= 70 && urlRecurso != null) {
            System.out.println("\n" + "═".repeat(54));
            System.out.println("📚 RECURSO DE APOYO");
            System.out.println("═".repeat(54));
            System.out.println("\nPara reforzar, consulta:");
            System.out.println("🔗 " + urlRecurso);
            System.out.println();
        }

        // Ofrecer subir de nivel si >= 80%
        boolean seOfrecioNivel = false;
        if (porcentaje >= 80 && nivelDificultad < 3) {
            ofrecerSubirNivel();
            seOfrecioNivel = true;
        }

        // Solo pedir ENTER si no se ofreció subir de nivel (ya se pidió entrada)
        if (!seOfrecioNivel) {
            System.out.print("\nPresiona ENTER para volver al menú...");
            scanner.nextLine();
        }
    }

    /**
     * OFRECER SUBIR DE NIVEL CUANDO DESEMPEÑO ES BUENO
     */
    private void ofrecerSubirNivel() {
        System.out.println("\n" + "═".repeat(54));
        System.out.println("🚀 ¡OPORTUNIDAD DE MEJORA!");
        System.out.println("═".repeat(54));
        System.out.println("\n" + nombreUsuario + ", porque parece que tienes");
        System.out.println("más nivel del que crees...\n");
        System.out.println("¿Quieres intentar el siguiente nivel de dificultad?");
        System.out.print("\nTu respuesta (s/n): ");

        String respuesta = scanner.nextLine().toLowerCase().trim();
        if (respuesta.equals("s")) {
            dificultadGlobal++;
            String[] dificultadNombres = {"", "BAJA", "MEDIA", "ALTA"};
            System.out.println("\n✅ ¡Perfecto! Siguiente sesión será con nivel " +
                             dificultadNombres[dificultadGlobal] + ".");
        } else {
            System.out.println("\n📌 No hay problema. Seguiremos en el nivel actual.");
        }
        System.out.println();
    }

    /**
     * MÉTODO AUXILIAR: Alinear texto en cajas
     */
    protected String alinearEnCaja(String texto) {
        int ancho = 52;  // Ancho disponible dentro de la caja

        // Contar caracteres visibles (ignorar códigos ANSI)
        String textoLimpio = texto.replaceAll("\033\\[[0-9;]*m", "");
        int longitudVisible = textoLimpio.length();

        if (longitudVisible > ancho) {
            return "║ " + textoLimpio.substring(0, ancho - 1) + " ║";
        }

        int espaciosNecesarios = ancho - longitudVisible;
        return "║ " + texto + " ".repeat(espaciosNecesarios) + " ║";
    }

    /**
     * MÉTODO ABSTRACTO: Cada test específico implementa su lógica
     */
    protected abstract void ejecutarTest();
}

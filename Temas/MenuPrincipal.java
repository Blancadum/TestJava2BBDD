import java.util.Scanner;

/**
 * MENÚ PRINCIPAL - TestJava2BBDD
 *
 * Punto de entrada único para acceder a todos los tests.
 * Selecciona un tema y ejecuta el test correspondiente.
 */
public class MenuPrincipal {

    private Scanner scanner;

    public MenuPrincipal() {
        this.scanner = new Scanner(System.in);
    }

    public void mostrarMenu() {
        boolean continuar = true;

        while (continuar) {
            limpiarPantalla();
            mostrarEncabezado();
            mostrarOpciones();

            int opcion = obtenerOpcion();

            if (opcion == 0) {
                continuar = false;
                System.out.println("\n¡Hasta pronto! 👋\n");
            } else if (opcion >= 1 && opcion <= 10) {
                ejecutarTest(opcion);
                esperarParaContinuar();
            } else {
                System.out.println("\n❌ Opción inválida. Intenta de nuevo.");
                esperarParaContinuar();
            }
        }

        scanner.close();
    }

    private void mostrarEncabezado() {
        System.out.println("╔════════════════════════════════════════════════════╗");
        System.out.println("║        🎓 TESTS JAVA - MENÚ PRINCIPAL              ║");
        System.out.println("║    Elige un tema y responde 30 preguntas           ║");
        System.out.println("╚════════════════════════════════════════════════════╝\n");
    }

    private void mostrarOpciones() {
        System.out.println("📚 BASES DE DATOS:");
        System.out.println("  1. Conceptos SQL");
        System.out.println("  2. PostgreSQL Básico");
        System.out.println("  3. Consultas Avanzadas");
        System.out.println("  4. Transacciones");
        System.out.println("  5. Hibernate ORM");

        System.out.println("\n💻 PROGRAMACIÓN:");
        System.out.println("  6. Básicos de Java");
        System.out.println("  7. OOP (Programación Orientada a Objetos)");
        System.out.println("  8. Excepciones");
        System.out.println("  9. Colecciones");
        System.out.println("  10. Hibernate en Programación");

        System.out.println("\n  0. Salir");
        System.out.print("\nSelecciona una opción (0-10): ");
    }

    private int obtenerOpcion() {
        try {
            return Integer.parseInt(scanner.nextLine().trim());
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    private void ejecutarTest(int opcion) {
        System.out.println("\n⏳ Iniciando test...\n");

        switch (opcion) {
            case 1:
                new ConceptosSQL().iniciar();
                break;
            case 2:
                new PostgreSQL().iniciar();
                break;
            case 3:
                new ConsultasAvanzadas().iniciar();
                break;
            case 4:
                new Transacciones().iniciar();
                break;
            case 5:
                new HibernateORM().iniciar();
                break;
            case 6:
                new Basicos().iniciar();
                break;
            case 7:
                new OOP().iniciar();
                break;
            case 8:
                new Excepciones().iniciar();
                break;
            case 9:
                new Colecciones().iniciar();
                break;
            case 10:
                new Hibernate().iniciar();
                break;
        }
    }

    private void esperarParaContinuar() {
        System.out.print("\nPresiona ENTER para volver al menú...");
        scanner.nextLine();
    }

    private void limpiarPantalla() {
        try {
            // Funciona en Linux/Mac
            new ProcessBuilder("clear").inheritIO().start().waitFor();
        } catch (Exception e) {
            // Si falla, imprime líneas en blanco para Windows
            System.out.print("\033[H\033[2J");
            System.out.flush();
        }
    }

    public static void main(String[] args) {
        MenuPrincipal menu = new MenuPrincipal();
        menu.mostrarMenu();
    }
}

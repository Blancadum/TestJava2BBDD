import java.util.ArrayList;

public class ConceptosSQL extends TestAdaptativo {

    public void iniciar() {
        urlRecurso = "https://www.w3schools.com/sql";
        super.iniciarTest("TEST: CONCEPTOS BÁSICOS SQL");
    }

    @Override
    protected void ejecutarTest() {
        ArrayList<Pregunta> todas = crearTodasLasPreguntas();
        ArrayList<Pregunta> filtradas = filtrarPorDificultad(todas);
        System.out.println("Tienes " + filtradas.size() + " preguntas. ¡Vamos!\n");
        for (Pregunta p : filtradas) {
            pintarPregunta(p);
            String resp = obtenerRespuesta();
            puntuarPregunta(p, resp);
        }
    }

    private void pintarPregunta(Pregunta p) {
        System.out.println("\n╔════════════════════════════════════════════════════╗");
        System.out.println("║ 📝 PREGUNTA                                        ║");
        System.out.println("╠════════════════════════════════════════════════════╣");
        System.out.println(alinearEnCaja("\033[1m" + incluirNombre(p.getTexto()) + "\033[0m"));
        System.out.println("║                                                    ║");
        System.out.println(alinearEnCaja("  a) " + p.getOpcionA()));
        System.out.println(alinearEnCaja("  b) " + p.getOpcionB()));
        System.out.println(alinearEnCaja("  c) " + p.getOpcionC()));
        System.out.println(alinearEnCaja("  d) " + p.getOpcionD()));
        System.out.println("╚════════════════════════════════════════════════════╝");
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
        System.out.println("\n╔════════════════════════════════════════════════════╗");
        System.out.println(alinearEnCaja(ok ? "✅ RESPUESTA CORRECTA" : "❌ RESPUESTA INCORRECTA"));
        System.out.println("╠════════════════════════════════════════════════════╣");
        System.out.println(alinearEnCaja(ok ? p.getMensajeOK() : p.getMensajeError()));
        System.out.println("║                                                    ║");
        System.out.println(alinearEnCaja("💡 EXPLICACIÓN:"));
        System.out.println(alinearEnCaja(p.getSugerencia()));
        System.out.println("╚════════════════════════════════════════════════════╝");
        if (!ok) conceptosDebiles.add(p.getConcepto());
    }

    private ArrayList<Pregunta> crearTodasLasPreguntas() {
        ArrayList<Pregunta> p = new ArrayList<>();

        // ===== NIVEL 1: BAJA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P1. {NOMBRE}, escribir SELECT * FROM usuarios devuelve:",
            "b) Todas las columnas de todas las filas", "b) Todas las columnas de todas las filas", "a) Solo la primera fila", "c) Una sola columna",
            "c", "✅ Correcto.", "❌ Incorrecto.", "SELECT * devuelve TODAS las columnas y TODAS las filas. Ejemplo: SELECT * FROM usuarios (tabla completa)", "SELECT básico", 1
        ));

        p.add(new Pregunta(
            "P2. ¿Cuál es la sintaxis correcta de INSERT?",
            "c) ADD tabla (...)", "a) INSERT INTO tabla VALUES(...)", "a) INSERT INTO tabla VALUES(...)", "d) CREATE tabla (...)",
            "b", "✅ Correcto.", "❌ Incorrecto.", "INSERT INTO tabla(col1,col2) VALUES(val1,val2). Inserta UNA fila nueva con valores", "INSERT", 1
        ));

        p.add(new Pregunta(
            "P3. UPDATE usuarios SET nombre='Juan' actualiza:",
            "b) Todos los usuarios (SIN WHERE!)", "b) Todos los usuarios (SIN WHERE!)", "c) Ninguno", "a) Solo el primer usuario",
            "b", "✅ Correcto.", "❌ Incorrecto.", "CRÍTICO: UPDATE sin WHERE modifica TODAS las filas. UPDATE usuarios SET nombre='Juan' (actualiza TODO)", "UPDATE", 1
        ));

        p.add(new Pregunta(
            "P4. DELETE FROM usuarios sin WHERE:",
            "b) Borra TODOS los usuarios", "b) Borra TODOS los usuarios", "c) Error", "a) Borra un usuario",
            "d", "✅ Correcto.", "❌ Incorrecto.", "PELIGRO: DELETE sin WHERE borra TODA la tabla. DELETE usuarios (borra TODO). DELETE usuarios WHERE id=5 (solo ese)", "DELETE", 1
        ));

        p.add(new Pregunta(
            "P5. VARCHAR(50) en SQL significa:",
            "b) Texto de máximo 50 caracteres", "b) Texto de máximo 50 caracteres", "b) Texto de máximo 50 caracteres", "c) 50 números",
            "c", "✅ Correcto.", "❌ Incorrecto.", "VARCHAR(n)=texto variable máximo n caracteres", "Tipos", 1
        ));

        p.add(new Pregunta(
            "P6. INT en SQL almacena:",
            "b) Números enteros", "b) Números enteros", "a) Texto", "c) Decimales",
            "a", "✅ Correcto.", "❌ Incorrecto.", "INT=números enteros sin decimales, rango: -2.1 a 2.1 billones", "Tipos", 1
        ));

        p.add(new Pregunta(
            "P7. PRIMARY KEY garantiza que:",
            "b) El valor sea único e identifique fila", "b) El valor sea único e identifique fila", "a) Todos los valores sean iguales", "c) No haya más datos",
            "a", "✅ Correcto.", "❌ Incorrecto.", "PRIMARY KEY=garantiza valores ÚNICOS, identifica cada fila", "PK", 1
        ));

        p.add(new Pregunta(
            "P8. {NOMBRE}, FOREIGN KEY sirve para:",
            "c) Referenciar clave de otra tabla", "c) Referenciar clave de otra tabla", "a) Borrar datos", "d) Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.", "FOREIGN KEY=referencia a PRIMARY KEY de otra tabla, integridad", "FK", 1
        ));

        p.add(new Pregunta(
            "P9. CREATE TABLE usuarios (...) crea:",
            "b) Una nueva tabla", "b) Una nueva tabla", "a) Un usuario", "c) Una consulta",
            "b", "✅ Correcto.", "❌ Incorrecto.", "CREATE TABLE nombre(columnas). Define estructura tabla NUEVA", "DDL", 1
        ));

        p.add(new Pregunta(
            "P10. DROP TABLE usuarios borra:",
            "c) LA TABLA ENTERA y sus datos", "c) LA TABLA ENTERA y sus datos", "a) Un usuario", "d) Nada",
            "b", "✅ Correcto.", "❌ Incorrecto.", "DROP TABLE borra tabla COMPLETAMENTE, NO recuperable sin backup", "DDL", 1
        ));

        // ===== NIVEL 2: MEDIA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P11. SELECT * FROM usuarios WHERE edad > 18 AND ciudad='Madrid':",
            "a) Usuarios > 18 ó Madrid", "b) Usuarios > 18 Y de Madrid", "b) Usuarios > 18 Y de Madrid", "c) Solo de Madrid",
            "b", "✅ Correcto.", "❌ Incorrecto.", "AND=AMBAS condiciones deben ser TRUE. WHERE edad>18 AND ciudad=Madrid", "WHERE", 2
        ));

        p.add(new Pregunta(
            "P12. SELECT * FROM usuarios ORDER BY edad DESC ordena:",
            "b) Descendente (mayor a menor)", "b) Descendente (mayor a menor)", "a) Ascendente", "b) Descendente (mayor a menor)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "DESC=DESCENDENTE (mayor a menor). ASC=ASCENDENTE. ORDER BY edad DESC", "ORDER BY", 2
        ));

        p.add(new Pregunta(
            "P13. SELECT COUNT(*) FROM usuarios cuenta:",
            "b) Todos los registros (filas)", "b) Todos los registros (filas)", "a) Columnas", "b) Todos los registros (filas)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "COUNT(*)=cuenta TODAS las filas. SELECT COUNT(*) FROM usuarios (total)", "COUNT", 2
        ));

        p.add(new Pregunta(
            "P14. SELECT SUM(salario) FROM empleados calcula:",
            "c) La suma total", "b) El máximo", "a) El promedio", "d) La cantidad",
            "c", "✅ Correcto.", "❌ Incorrecto.", "SUM(col)=suma todos valores. SELECT SUM(salario) FROM empleados", "SUM", 2
        ));

        p.add(new Pregunta(
            "P15. SELECT DISTINCT ciudad FROM usuarios devuelve:",
            "b) Ciudades SIN repetir", "b) Ciudades SIN repetir", "b) Ciudades SIN repetir", "a) Todas ciudades repetidas",
            "c", "✅ Correcto.", "❌ Incorrecto.", "DISTINCT=elimina duplicados. SELECT DISTINCT ciudad (cada ciudad UNA vez)", "DISTINCT", 2
        ));

        p.add(new Pregunta(
            "P16. SELECT * FROM usuarios GROUP BY ciudad agrupará:",
            "c) Por ciudad (un grupo/ciudad)", "b) Por nombre", "a) Por edad", "c) Por ciudad (un grupo/ciudad)",
            "d", "✅ Correcto.", "❌ Incorrecto.", "GROUP BY=agrupa filas por valor. SELECT ciudad, COUNT(*) GROUP BY ciudad", "GROUP BY", 2
        ));

        p.add(new Pregunta(
            "P17. {NOMBRE}, SELECT AVG(edad) FROM usuarios calcula:",
            "c) EDAD PROMEDIO", "c) EDAD PROMEDIO", "b) Edad mínima", "d) Cantidad",
            "a", "✅ Correcto.", "❌ Incorrecto.", "AVG(col)=promedio. SELECT AVG(edad) calcula edad promedio", "AVG", 2
        ));

        p.add(new Pregunta(
            "P18. SELECT * FROM usuarios WHERE nombre LIKE 'J%' busca:",
            "b) Nombres que EMPIEZAN con J", "b) Nombres que EMPIEZAN con J", "c) Nombres que terminan J", "a) Solo 'J'",
            "b", "✅ Correcto.", "❌ Incorrecto.", "LIKE J%=empieza con J. %n=termina con n. %an%=contiene an", "LIKE", 2
        ));

        p.add(new Pregunta(
            "P19. UPDATE usuarios SET edad=30 WHERE id=5 actualiza:",
            "b) Solo usuario id=5", "b) Solo usuario id=5", "a) Todos los usuarios", "c) El primero",
            "c", "✅ Correcto.", "❌ Incorrecto.", "UPDATE usuarios SET edad=30 WHERE id=5 (solo id 5). Sin WHERE actualiza TODO", "UPDATE", 2
        ));

        p.add(new Pregunta(
            "P20. SELECT * FROM usuarios LIMIT 10 devuelve:",
            "c) LOS PRIMEROS 10 REGISTROS", "c) LOS PRIMEROS 10 REGISTROS", "b) 10 tablas", "d) 10 tipos datos",
            "a", "✅ Correcto.", "❌ Incorrecto.", "LIMIT n=trae solo primeras n filas. LIMIT 10 (primeros 10 registros)", "LIMIT", 2
        ));

        // ===== NIVEL 3: ALTA (10 PREGUNTAS) =====
        p.add(new Pregunta(
            "P21. SELECT * FROM usuarios WHERE edad IN (18,25,30) devuelve:",
            "b) Edades exactamente 18, 25 o 30", "b) Edades exactamente 18, 25 o 30", "b) Edades exactamente 18, 25 o 30", "a) Edades mayores que 30",
            "c", "✅ Correcto.", "❌ Incorrecto.", "IN(val1,val2,val3)=coincide con cualquiera. WHERE edad IN (18,25,30)", "WHERE avanzado", 3
        ));

        p.add(new Pregunta(
            "P22. SELECT * FROM usuarios u INNER JOIN pedidos p ON u.id=p.usuario_id:",
            "b) Solo coincidencias exactas", "b) Solo coincidencias exactas", "a) Todas las filas de ambas", "b) Solo coincidencias exactas",
            "d", "✅ Correcto.", "❌ Incorrecto.", "INNER JOIN=solo filas que coinciden en ambas tablas", "JOIN", 3
        ));

        p.add(new Pregunta(
            "P23. SELECT * FROM (SELECT * FROM usuarios WHERE edad > 18) subconsulta:",
            "d) Ambas b y c", "d) Ambas b y c", "c) Tabla temporal", "b) Consulta dentro de consulta",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Subconsulta=SELECT dentro SELECT. SELECT * FROM (SELECT...WHERE...) subconsulta", "Subconsultas", 3
        ));

        p.add(new Pregunta(
            "P24. {NOMBRE}, HAVING COUNT(*) > 5 después GROUP BY filtra:",
            "b) GRUPOS que tienen > 5 elementos", "b) GRUPOS que tienen > 5 elementos", "a) Filas", "b) GRUPOS que tienen > 5 elementos",
            "d", "✅ Correcto.", "❌ Incorrecto.", "HAVING=filtra DESPUÉS GROUP BY. SELECT ciudad, COUNT(*) GROUP BY ciudad HAVING COUNT(*)>5", "HAVING", 3
        ));

        p.add(new Pregunta(
            "P25. SELECT * FROM usuarios UNION SELECT * FROM clientes combina:",
            "b) Duplicados EXCLUIDOS", "b) Duplicados EXCLUIDOS", "a) Duplicados incluidos", "c) Nada",
            "a", "✅ Correcto.", "❌ Incorrecto.", "UNION=combina resultados sin duplicados. UNION ALL=con duplicados", "UNION", 3
        ));

        p.add(new Pregunta(
            "P26. SELECT * FROM usuarios WHERE edad BETWEEN 18 AND 65:",
            "b) EDADES DE 18 A 65 (inclusivo)", "b) EDADES DE 18 A 65 (inclusivo)", "c) Solo 18 o 65", "a) Edades < 18 o > 65",
            "b", "✅ Correcto.", "❌ Incorrecto.", "BETWEEN=rango inclusivo (incluye extremos). WHERE edad BETWEEN 18 AND 65", "WHERE avanzado", 3
        ));

        p.add(new Pregunta(
            "P27. CREATE INDEX idx_email ON usuarios(email):",
            "b) Índice en columna email para búsquedas rápidas", "b) Índice en columna email para búsquedas rápidas", "c) Borra email", "a) Error de sintaxis",
            "d", "✅ Correcto.", "❌ Incorrecto.", "Índice=acelera búsquedas. CREATE INDEX idx_email ON usuarios(email)", "Índices", 3
        ));

        p.add(new Pregunta(
            "P28. CREATE VIEW usuarios_activos AS SELECT * FROM usuarios WHERE activo=true crea:",
            "b) VISTA (consulta guardada reutilizable)", "b) VISTA (consulta guardada reutilizable)", "c) Tabla temporal", "b) VISTA (consulta guardada reutilizable)",
            "a", "✅ Correcto.", "❌ Incorrecto.", "Vista=consulta guardada reutilizable. CREATE VIEW usuarios_activos AS SELECT...", "Vistas", 3
        ));

        p.add(new Pregunta(
            "P29. {NOMBRE}, ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(15):",
            "c) AGREGA nueva columna", "c) AGREGA nueva columna", "b) Elimina columna", "d) Error",
            "a", "✅ Correcto.", "❌ Incorrecto.", "ALTER TABLE=modifica estructura. ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(15)", "DDL", 3
        ));

        p.add(new Pregunta(
            "P30. SELECT * FROM usuarios WHERE NOT (edad < 18) es equivalente a:",
            "c) EDAD >= 18", "b) edad <= 18", "a) edad < 18", "d) edad = 18",
            "c", "✅ Correcto.", "❌ Incorrecto.", "NOT=invierte condición. WHERE NOT(edad<18) es igual a WHERE edad>=18", "Lógica", 3
        ));

        return p;
    }

    public static void main(String[] args) {
        ConceptosSQL test = new ConceptosSQL();
        test.iniciar();
    }
}

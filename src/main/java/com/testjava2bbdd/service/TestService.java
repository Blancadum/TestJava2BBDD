package com.testjava2bbdd.service;

import com.testjava2bbdd.model.Pregunta;
import com.testjava2bbdd.model.TestSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TestService {

    @Autowired
    private ConceptosSQLService conceptosSQLService;

    @Autowired
    private PostgreSQLBasicoService postgreSQLBasicoService;

    @Autowired
    private ConsultasAvanzadasService consultasAvanzadasService;

    @Autowired
    private TransaccionesService transaccionesService;

    @Autowired
    private HibernateORMService hibernateORMService;

    @Autowired
    private BasicosJavaService basicosJavaService;

    @Autowired
    private OOPService oopService;

    @Autowired
    private ExcepcionesService excepcionesService;

    @Autowired
    private ColeccionesService coleccionesService;

    @Autowired
    private HibernateJavaService hibernateJavaService;

    // Almacenar sesiones activas
    private Map<String, TestSession> sesiones = new HashMap<>();

    // Mapeo de temaId a servicio
    private Map<Integer, String> temasNombres = Map.ofEntries(
            Map.entry(1, "Conceptos SQL"),
            Map.entry(2, "PostgreSQL Básico"),
            Map.entry(3, "Consultas Avanzadas"),
            Map.entry(4, "Transacciones"),
            Map.entry(5, "Hibernate ORM"),
            Map.entry(6, "Básicos de Java"),
            Map.entry(7, "OOP"),
            Map.entry(8, "Excepciones"),
            Map.entry(9, "Colecciones"),
            Map.entry(10, "Hibernate en Java")
    );

    private Map<Integer, String> urlRecursos = Map.ofEntries(
            Map.entry(1, "https://www.w3schools.com/sql"),
            Map.entry(2, "https://www.w3schools.com/postgresql/index.php"),
            Map.entry(3, "https://josejuansanchez.org/bd/unidad-05-teoria/index.html"),
            Map.entry(4, "https://www.jscamp.dev/sql/transacciones-en-sql"),
            Map.entry(5, "https://hibernate.org/orm/"),
            Map.entry(6, "https://www.w3schools.com/JAVA/"),
            Map.entry(7, "https://www.w3schools.com/JAVA/"),
            Map.entry(8, "https://www.w3schools.com/JAVA/"),
            Map.entry(9, "https://www.w3schools.com/JAVA/"),
            Map.entry(10, "https://www.w3schools.com/JAVA/")
    );

    // Iniciar un test
    public TestSession iniciarTest(int temaId, String nombreUsuario, int nivelDificultad) {
        String testId = UUID.randomUUID().toString();
        String urlRecurso = urlRecursos.getOrDefault(temaId, "");

        TestSession sesion = new TestSession(testId, nombreUsuario, temaId, nivelDificultad, urlRecurso);

        // Cargar preguntas según el tema
        List<Pregunta> preguntas = cargarPreguntasPorTema(temaId);
        sesion.setPreguntas(preguntas);

        // Filtrar por dificultad y limitar a 10
        sesion.filtrarPreguntasPorDificultad();

        // Agregar IDs a las preguntas
        for (int i = 0; i < sesion.getPreguntas().size(); i++) {
            sesion.getPreguntas().get(i).setId(i + 1);
        }

        sesiones.put(testId, sesion);
        return sesion;
    }

    // Obtener preguntas del test
    public List<Map<String, Object>> obtenerPreguntasTest(String testId) {
        TestSession sesion = sesiones.get(testId);
        if (sesion == null) {
            return new ArrayList<>();
        }

        List<Map<String, Object>> resultado = new ArrayList<>();
        for (Pregunta p : sesion.getPreguntas()) {
            Map<String, Object> pregunta = new HashMap<>();
            pregunta.put("id", p.getId());
            pregunta.put("texto", p.getTexto());
            pregunta.put("opciones", p.getOpciones());
            pregunta.put("dificultad", p.getDificultad());
            resultado.add(pregunta);
        }

        return resultado;
    }

    // Enviar respuesta
    public Map<String, Object> enviarRespuesta(String testId, int preguntaId, String respuesta) {
        TestSession sesion = sesiones.get(testId);
        if (sesion == null) {
            return new HashMap<>();
        }

        Pregunta pregunta = sesion.getPreguntas().stream()
                .filter(p -> p.getId() == preguntaId)
                .findFirst()
                .orElse(null);

        if (pregunta == null) {
            return new HashMap<>();
        }

        boolean esCorrecta = pregunta.esCorrecta(respuesta);
        sesion.registrarRespuesta(preguntaId, esCorrecta, pregunta.getConcepto());

        Map<String, Object> resultado = new HashMap<>();
        resultado.put("preguntaId", preguntaId);
        resultado.put("respuesta", respuesta);
        resultado.put("esCorrecta", esCorrecta);
        resultado.put("explicacion", pregunta.getSugerencia());

        return resultado;
    }

    // Obtener resultados
    public Map<String, Object> obtenerResultados(String testId) {
        TestSession sesion = sesiones.get(testId);
        if (sesion == null) {
            return new HashMap<>();
        }

        return sesion.obtenerResultados();
    }

    // Cargar preguntas según el tema
    private List<Pregunta> cargarPreguntasPorTema(int temaId) {
        return switch (temaId) {
            case 1 -> conceptosSQLService.crearTodasLasPreguntas();
            case 2 -> postgreSQLBasicoService.crearTodasLasPreguntas();
            case 3 -> consultasAvanzadasService.crearTodasLasPreguntas();
            case 4 -> transaccionesService.crearTodasLasPreguntas();
            case 5 -> hibernateORMService.crearTodasLasPreguntas();
            case 6 -> basicosJavaService.crearTodasLasPreguntas();
            case 7 -> oopService.crearTodasLasPreguntas();
            case 8 -> excepcionesService.crearTodasLasPreguntas();
            case 9 -> coleccionesService.crearTodasLasPreguntas();
            case 10 -> hibernateJavaService.crearTodasLasPreguntas();
            default -> new ArrayList<>();
        };
    }

    // Obtener lista de temas
    public List<Map<String, Object>> obtenerTemas() {
        List<Map<String, Object>> temas = new ArrayList<>();

        String[][] temasData = {
                {"1", "Conceptos SQL", "Fundamentos de SQL", "📊"},
                {"2", "PostgreSQL Básico", "Introducción a PostgreSQL", "🗄️"},
                {"3", "Consultas Avanzadas", "JOINs, subconsultas, funciones", "🔍"},
                {"4", "Transacciones", "ACID, isolation levels", "🔄"},
                {"5", "Hibernate ORM", "Object-Relational Mapping", "🛢️"},
                {"6", "Básicos de Java", "Tipos, operadores, control de flujo", "☕"},
                {"7", "OOP", "Clases, herencia, polimorfismo", "🏗️"},
                {"8", "Excepciones", "Manejo de errores", "⚠️"},
                {"9", "Colecciones", "ArrayList, HashMap, etc.", "📦"},
                {"10", "Hibernate en Java", "ORM avanzado", "🚀"}
        };

        for (String[] data : temasData) {
            Map<String, Object> tema = new HashMap<>();
            tema.put("id", Integer.parseInt(data[0]));
            tema.put("nombre", data[1]);
            tema.put("descripcion", data[2]);
            tema.put("icono", data[3]);
            tema.put("urlRecurso", urlRecursos.get(Integer.parseInt(data[0])));
            temas.add(tema);
        }

        return temas;
    }

    // Limpiar sesiones antiguas (opcional)
    public void limpiarSesionesAntiguas() {
        long ahora = System.currentTimeMillis();
        long tiempoExpiracion = 30 * 60 * 1000; // 30 minutos

        sesiones.entrySet().removeIf(entry ->
                ahora - entry.getValue().getCreatedAt() > tiempoExpiracion
        );
    }
}

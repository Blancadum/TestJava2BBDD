package com.testjava2bbdd.model;

import java.util.*;

public class TestSession {
    private String id;
    private String nombreUsuario;
    private int temaId;
    private int nivelDificultad;
    private List<Pregunta> preguntas;
    private Map<Integer, Boolean> respuestas; // preguntaId -> esCorrecta
    private Set<String> conceptosDebiles;
    private String urlRecurso;
    private long createdAt;

    public TestSession(String id, String nombreUsuario, int temaId, int nivelDificultad, String urlRecurso) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.temaId = temaId;
        this.nivelDificultad = nivelDificultad;
        this.urlRecurso = urlRecurso;
        this.preguntas = new ArrayList<>();
        this.respuestas = new HashMap<>();
        this.conceptosDebiles = new HashSet<>();
        this.createdAt = System.currentTimeMillis();
    }

    public void filtrarPreguntasPorDificultad() {
        preguntas = preguntas.stream()
                .filter(p -> p.getDificultad() == nivelDificultad)
                .limit(10)
                .toList();
    }

    public void registrarRespuesta(int preguntaId, boolean esCorrecta, String concepto) {
        respuestas.put(preguntaId, esCorrecta);
        if (!esCorrecta) {
            conceptosDebiles.add(concepto);
        }
    }

    public Map<String, Object> obtenerResultados() {
        int correctas = (int) respuestas.values().stream().filter(b -> b).count();
        int total = respuestas.size();
        int porcentaje = total > 0 ? (correctas * 100) / total : 0;

        Map<String, Object> resultado = new HashMap<>();
        resultado.put("puntuacion", correctas);
        resultado.put("totalPreguntas", total);
        resultado.put("porcentaje", porcentaje);
        resultado.put("conceptosDebiles", new ArrayList<>(conceptosDebiles));
        resultado.put("urlRecurso", urlRecurso);
        resultado.put("puedSubirNivel", porcentaje >= 80 && nivelDificultad < 3);

        return resultado;
    }

    // Getters y Setters
    public String getId() { return id; }
    public String getNombreUsuario() { return nombreUsuario; }
    public int getTemaId() { return temaId; }
    public int getNivelDificultad() { return nivelDificultad; }
    public List<Pregunta> getPreguntas() { return preguntas; }
    public void setPreguntas(List<Pregunta> preguntas) { this.preguntas = preguntas; }
    public Map<Integer, Boolean> getRespuestas() { return respuestas; }
    public Set<String> getConceptosDebiles() { return conceptosDebiles; }
    public long getCreatedAt() { return createdAt; }
}

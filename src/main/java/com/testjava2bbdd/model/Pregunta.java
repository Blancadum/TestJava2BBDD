package com.testjava2bbdd.model;

import java.util.*;

public class Pregunta {
    private int id;
    private String texto;
    private String opcionA;
    private String opcionB;
    private String opcionC;
    private String opcionD;
    private String respuestaCorrecta;
    private String mensajeOK;
    private String mensajeError;
    private String sugerencia;
    private String concepto;
    private int dificultad;

    // Variables para opciones barajadas
    private String[] opcionesBarajadas;
    private String respuestaBarajada;

    public Pregunta(String texto, String opcionA, String opcionB, String opcionC, String opcionD,
                    String respuestaCorrecta, String mensajeOK, String mensajeError,
                    String sugerencia, String concepto, int dificultad) {
        this.texto = texto;
        this.opcionA = opcionA;
        this.opcionB = opcionB;
        this.opcionC = opcionC;
        this.opcionD = opcionD;
        this.respuestaCorrecta = respuestaCorrecta;
        this.mensajeOK = mensajeOK;
        this.mensajeError = mensajeError;
        this.sugerencia = sugerencia;
        this.concepto = concepto;
        this.dificultad = dificultad;

        barajarOpciones();
    }

    // Método para barajar las opciones
    private void barajarOpciones() {
        String opcionALimpia = limpiarOpcion(opcionA);
        String opcionBLimpia = limpiarOpcion(opcionB);
        String opcionCLimpia = limpiarOpcion(opcionC);
        String opcionDLimpia = limpiarOpcion(opcionD);

        Map<Character, String> original = new HashMap<>();
        original.put('a', opcionALimpia);
        original.put('b', opcionBLimpia);
        original.put('c', opcionCLimpia);
        original.put('d', opcionDLimpia);

        List<Character> letras = new ArrayList<>();
        letras.add('a');
        letras.add('b');
        letras.add('c');
        letras.add('d');
        Collections.shuffle(letras);

        opcionesBarajadas = new String[4];
        for (int i = 0; i < 4; i++) {
            char letraOriginal = letras.get(i);
            opcionesBarajadas[i] = original.get(letraOriginal);
        }

        char letraBarajada = ' ';
        for (int i = 0; i < 4; i++) {
            if (letras.get(i) == respuestaCorrecta.charAt(0)) {
                letraBarajada = (char)('a' + i);
                break;
            }
        }
        respuestaBarajada = String.valueOf(letraBarajada);
    }

    private String limpiarOpcion(String opcion) {
        if (opcion != null && opcion.length() > 3 && opcion.matches("[a-d]\\)\\s.*")) {
            return opcion.substring(3).trim();
        }
        return opcion;
    }

    public boolean esCorrecta(String respuesta) {
        return respuesta.equals(respuestaBarajada);
    }

    // Getters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTexto() { return texto; }
    public String getOpcionA() { return opcionesBarajadas[0]; }
    public String getOpcionB() { return opcionesBarajadas[1]; }
    public String getOpcionC() { return opcionesBarajadas[2]; }
    public String getOpcionD() { return opcionesBarajadas[3]; }
    public List<String> getOpciones() {
        return Arrays.asList(opcionesBarajadas);
    }

    public String getRespuestaCorrecta() { return respuestaBarajada; }
    public String getMensajeOK() { return mensajeOK; }
    public String getMensajeError() { return mensajeError; }
    public String getSugerencia() { return sugerencia; }
    public String getConcepto() { return concepto; }
    public int getDificultad() { return dificultad; }
}

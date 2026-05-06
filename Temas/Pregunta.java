import java.util.*;

/**
 * Clase que encapsula una pregunta con sus opciones y evaluación
 */
public class Pregunta {
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

    // Para almacenar opciones barajadas
    private String[] opcionesBarajadas;
    private String respuestaBarajada;

    // Constructor
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

        // Barajar opciones al crear la pregunta
        barajarOpciones();
    }

    // Método para barajar las opciones
    private void barajarOpciones() {
        // Limpiar letras prefijadas de las opciones
        String opcionALimpia = limpiarOpcion(opcionA);
        String opcionBLimpia = limpiarOpcion(opcionB);
        String opcionCLimpia = limpiarOpcion(opcionC);
        String opcionDLimpia = limpiarOpcion(opcionD);

        // Crear mapeo de letra original a texto
        Map<Character, String> original = new HashMap<>();
        original.put('a', opcionALimpia);
        original.put('b', opcionBLimpia);
        original.put('c', opcionCLimpia);
        original.put('d', opcionDLimpia);

        // Crear lista de letras y barajar
        List<Character> letras = new ArrayList<>();
        letras.add('a');
        letras.add('b');
        letras.add('c');
        letras.add('d');
        Collections.shuffle(letras);

        // Crear opciones barajadas
        opcionesBarajadas = new String[4];
        for (int i = 0; i < 4; i++) {
            char letraOriginal = letras.get(i);
            opcionesBarajadas[i] = original.get(letraOriginal);
        }

        // Actualizar respuesta correcta con las nuevas posiciones
        char letraBarajada = ' ';
        for (int i = 0; i < 4; i++) {
            if (letras.get(i) == respuestaCorrecta.charAt(0)) {
                letraBarajada = (char)('a' + i);
                break;
            }
        }
        respuestaBarajada = String.valueOf(letraBarajada);
    }

    // Método auxiliar para limpiar letras prefijadas
    private String limpiarOpcion(String opcion) {
        if (opcion != null && opcion.length() > 3 && opcion.matches("[a-d]\\)\\s.*")) {
            return opcion.substring(3).trim();
        }
        return opcion;
    }

    // Getters
    public String getTexto() {
        return texto;
    }

    public String getOpcionA() {
        return opcionesBarajadas[0];
    }

    public String getOpcionB() {
        return opcionesBarajadas[1];
    }

    public String getOpcionC() {
        return opcionesBarajadas[2];
    }

    public String getOpcionD() {
        return opcionesBarajadas[3];
    }

    public String getRespuestaCorrecta() {
        return respuestaCorrecta;
    }

    public String getMensajeOK() {
        return mensajeOK;
    }

    public String getMensajeError() {
        return mensajeError;
    }

    public String getSugerencia() {
        return sugerencia;
    }

    public String getConcepto() {
        return concepto;
    }

    public int getDificultad() {
        return dificultad;
    }

    // Método para validar respuesta
    public boolean esCorrecta(String respuesta) {
        return respuesta.equals(respuestaBarajada);
    }
}

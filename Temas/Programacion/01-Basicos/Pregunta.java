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

    // Constructor
    public Pregunta(String texto, String opcionA, String opcionB, String opcionC, String opcionD,
                    String respuestaCorrecta, String mensajeOK, String mensajeError,
                    String sugerencia, String concepto) {
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
    }

    // Getters
    public String getTexto() {
        return texto;
    }

    public String getOpcionA() {
        return opcionA;
    }

    public String getOpcionB() {
        return opcionB;
    }

    public String getOpcionC() {
        return opcionC;
    }

    public String getOpcionD() {
        return opcionD;
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

    // Método para validar respuesta
    public boolean esCorrecta(String respuesta) {
        return respuesta.equals(respuestaCorrecta);
    }
}

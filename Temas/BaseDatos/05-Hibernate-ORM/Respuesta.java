/**
 * Clase que encapsula la respuesta de un usuario a una pregunta
 */
public class Respuesta {
    private Pregunta pregunta;
    private String respuestaUsuario;
    private boolean esCorrecta;

    // Constructor
    public Respuesta(Pregunta pregunta, String respuestaUsuario, boolean esCorrecta) {
        this.pregunta = pregunta;
        this.respuestaUsuario = respuestaUsuario;
        this.esCorrecta = esCorrecta;
    }

    // Getters
    public Pregunta getPregunta() {
        return pregunta;
    }

    public String getRespuestaUsuario() {
        return respuestaUsuario;
    }

    public boolean esCorrecta() {
        return esCorrecta;
    }
}

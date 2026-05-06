package com.testjava2bbdd.controller;

import com.testjava2bbdd.model.TestSession;
import com.testjava2bbdd.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping("/temas")
    public List<Map<String, Object>> obtenerTemas() {
        return testService.obtenerTemas();
    }

    @PostMapping("/tests/iniciar")
    public Map<String, Object> iniciarTest(@RequestBody Map<String, Object> request) {
        Integer temaId = ((Number) request.get("temaId")).intValue();
        String nombreUsuario = (String) request.get("nombreUsuario");
        Integer nivelDificultad = ((Number) request.get("nivelDificultad")).intValue();

        TestSession sesion = testService.iniciarTest(temaId, nombreUsuario, nivelDificultad);

        Map<String, Object> response = new HashMap<>();
        response.put("id", sesion.getId());
        response.put("temaId", sesion.getTemaId());
        response.put("nombreUsuario", sesion.getNombreUsuario());
        response.put("nivelDificultad", sesion.getNivelDificultad());
        response.put("mensaje", "Test iniciado correctamente");

        return response;
    }

    @GetMapping("/tests/{testId}/preguntas")
    public List<Map<String, Object>> obtenerPreguntas(@PathVariable String testId) {
        return testService.obtenerPreguntasTest(testId);
    }

    @PostMapping("/tests/{testId}/respuesta")
    public Map<String, Object> enviarRespuesta(
            @PathVariable String testId,
            @RequestBody Map<String, Object> request) {
        Integer preguntaId = ((Number) request.get("preguntaId")).intValue();
        String respuesta = (String) request.get("respuesta");

        return testService.enviarRespuesta(testId, preguntaId, respuesta);
    }

    @GetMapping("/tests/{testId}/resultados")
    public Map<String, Object> obtenerResultados(@PathVariable String testId) {
        return testService.obtenerResultados(testId);
    }
}

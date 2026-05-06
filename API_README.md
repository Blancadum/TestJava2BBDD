# TestJava2BBDD API - REST Web Version

Versión web de la aplicación TestJava2BBDD con **Spring Boot REST API** y **Frontend HTML/JS**.

## 📋 Requisitos

- **Java 17** o superior
- **Maven 3.6** o superior
- **Git** (para deploy en Render)

## 🚀 Desarrollo Local

### 1. Compilar el proyecto
```bash
mvn clean package
```

### 2. Ejecutar la aplicación
```bash
mvn spring-boot:run
```

O usando el JAR compilado:
```bash
java -jar target/testjava2bbdd-api-1.0.0.jar
```

### 3. Acceder a la aplicación
Abre tu navegador en `http://localhost:8080`

## 🌐 Despliegue en Render.app

### Paso 1: Crear repositorio en GitHub
```bash
cd /path/to/TestJava2BBDD
git init
git add .
git commit -m "Initial commit: REST API version"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/testjava2bbdd.git
git push -u origin main
```

### Paso 2: Conectar a Render
1. Ve a https://render.com
2. Crea una cuenta (o inicia sesión)
3. Click en "New +" → "Web Service"
4. Conecta tu repositorio de GitHub
5. Configurar el servicio:
   - **Name:** testjava2bbdd-api
   - **Runtime:** Java
   - **Build Command:** `mvn clean package`
   - **Start Command:** `java -Dserver.port=${PORT} -jar target/testjava2bbdd-api-1.0.0.jar`
   - **Plan:** Free (o el que prefieras)

### Paso 3: Deploy
Render automáticamente desplegará cuando hagas push a main.

## 📁 Estructura del Proyecto

```
TestJava2BBDD/
├── pom.xml                           # Configuración Maven
├── Procfile                          # Configuración para Render
├── .gitignore                        # Archivos a ignorar en Git
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/testjava2bbdd/
│   │   │       ├── Application.java              # Punto de entrada Spring Boot
│   │   │       └── controller/
│   │   │           └── TestController.java       # Controladores REST
│   │   └── resources/
│   │       ├── application.properties            # Config Spring
│   │       └── static/
│   │           ├── index.html                    # Menú principal
│   │           ├── test.html                     # Página de test
│   │           ├── resultados.html               # Página de resultados
│   │           ├── css/
│   │           │   └── style.css                 # Estilos
│   │           └── js/
│   │               ├── api.js                    # Funciones de API
│   │               ├── app.js                    # Lógica del menú
│   │               ├── test.js                   # Lógica del test
│   │               └── resultados.js             # Lógica de resultados
│   └── test/
│       └── java/...                  # Tests unitarios
└── target/                           # Carpeta compilada (ignorar en Git)
```

## 🔌 Endpoints REST

### GET `/api/temas`
Obtiene lista de 10 temas disponibles.

**Respuesta:**
```json
[
  {
    "id": 1,
    "nombre": "Conceptos SQL",
    "descripcion": "Fundamentos de SQL",
    "icono": "📊",
    "urlRecurso": "https://www.w3schools.com/sql"
  },
  ...
]
```

### POST `/api/tests/iniciar`
Inicia un nuevo test.

**Body:**
```json
{
  "temaId": 1,
  "nombreUsuario": "Juan",
  "nivelDificultad": 2
}
```

**Respuesta:**
```json
{
  "id": "uuid-test-id",
  "temaId": 1,
  "nombreUsuario": "Juan",
  "nivelDificultad": 2,
  "mensaje": "Test iniciado correctamente"
}
```

### GET `/api/tests/{testId}/preguntas`
Obtiene las preguntas del test (barajadas).

**Respuesta:**
```json
[
  {
    "id": 1,
    "texto": "P1. ¿Qué es SQL?",
    "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
    "dificultad": 1
  },
  ...
]
```

### POST `/api/tests/{testId}/respuesta`
Envía una respuesta.

**Body:**
```json
{
  "preguntaId": 1,
  "respuesta": "b"
}
```

**Respuesta:**
```json
{
  "preguntaId": 1,
  "respuesta": "b",
  "esCorrecta": true,
  "explicacion": "Texto de la explicación..."
}
```

### GET `/api/tests/{testId}/resultados`
Obtiene los resultados finales.

**Respuesta:**
```json
{
  "puntuacion": 8,
  "totalPreguntas": 10,
  "porcentaje": 80,
  "conceptosDebiles": ["Concepto 1", "Concepto 2"],
  "urlRecurso": "https://...",
  "puedSubirNivel": true
}
```

## 🎯 Próximos Pasos

### Fase 2: Integración completa
- [ ] Convertir lógica antigua (Pregunta.java, TestAdaptativo.java) a servicios Spring
- [ ] Implementar persistencia en BD (PostgreSQL en Render)
- [ ] Crear autenticación de usuarios
- [ ] Agregar estadísticas por usuario
- [ ] Modo oscuro
- [ ] Soporte PWA (Progressive Web App)

### Fase 3: Testing
- [ ] Tests unitarios con JUnit
- [ ] Tests de integración
- [ ] Tests E2E con Selenium/Cypress

## 📦 Dependencias

- **Spring Boot 3.2.0** - Framework web
- **Maven** - Gestión de dependencias
- **Java 17** - Runtime

## 📝 Notas

- Las preguntas actualmente son mocks (preguntas de ejemplo)
- La lógica de barajado y filtrado aún debe implementarse
- Los datos no se persisten (en memoria solamente)
- CORS está habilitado para todas las rutas `/api/**`

## ❓ Soporte

Para reportar errores o sugerencias, abre un issue en GitHub.

---

**TestJava2BBDD © 2024** - Aprende practicando

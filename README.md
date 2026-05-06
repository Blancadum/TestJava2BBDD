# 🎓 TestJava2BBDD - Suite de Tests Adaptativos

Tests interactivos y adaptativos para aprender **Java**, **Programación Orientada a Objetos** y **Bases de Datos (PostgreSQL, SQL, Hibernate)**.

## 📋 Contenido

### BaseDatos (5 módulos)
- **01-Conceptos-SQL** - Fundamentos de SQL (SELECT, INSERT, UPDATE, DELETE, etc.)
- **02-PostgreSQL-Basico** - Introducción a PostgreSQL, usuarios, sesiones
- **03-Consultas-Avanzadas** - JOINs, subconsultas, window functions, CTEs
- **04-Transacciones** - ACID, isolation levels, locks, deadlocks
- **05-Hibernate-ORM** - Object-Relational Mapping, entidades, relaciones

### Programación (5 módulos)
- **01-Basicos** - Tipos de datos, operadores, control de flujo
- **02-OOP** - Clases, herencia, polimorfismo, encapsulación
- **03-Excepciones** - Manejo de errores, excepciones personalizadas
- **04-Colecciones** - Arrays, ArrayList, HashMap, etc.
- **05-Hibernate** - ORM avanzado en contexto de programación

## 🚀 Cómo Usar

### Requisitos
- **Java 8+** instalado
- Terminal/CMD

### 1. Compilar un Test

```bash
cd Temas/BaseDatos/01-Conceptos-SQL/
javac ConceptosSQL.java
```

### 2. Ejecutar el Test

```bash
java ConceptosSQL
```

### 3. Interactuar con el Test

El programa te guiará:
1. **Saludo dinámico** - Buenos días/tardes/noches según la hora
2. **Nombre** - Ingresa tu nombre para personalización
3. **Nivel de dificultad** - Elige: fácil (BAJA), normal (MEDIA), difícil (ALTA)
4. **Preguntas** - Responde a/b/c/d
5. **Retroalimentación** - Inmediata para cada respuesta
6. **Resultados** - Puntuación final y conceptos a reforzar

## 📚 Estructura de Archivos

Cada tema contiene **3 archivos**:

```
Tema/
├─ NombreTest.java     # Test consolidado (ejecutable)
│  ├─ Extiende TestAdaptativo
│  ├─ Contiene 30 preguntas (10 por nivel de dificultad)
│  ├─ Método main() para ejecución
│  └─ Completamente autónomo
├─ Pregunta.java       # Modelo de datos
│  └─ Almacena: texto, opciones, respuesta correcta, mensajes
└─ Respuesta.java      # Modelo de datos
   └─ Almacena: pregunta, respuesta del usuario, resultado
```

## 🎯 Características de los Tests

### Adaptatividad
- **Nivel de dificultad personalizado** - El test se ajusta a tu nivel
- **Saludo dinámico** - Buenos días/tardes/noches según la hora actual
- **Personalización** - Tu nombre aparece en algunas preguntas
- **Retroalimentación inmediata** - Feedback para cada pregunta

### Contenido
- **30 preguntas por tema** - 10 básicas, 10 intermedias, 10 avanzadas
- **Respuestas múltiples** - Formato a/b/c/d
- **Mensajes personalizados** - OK, error, sugerencias de estudio

### Salida
- **Puntuación final** - Total de aciertos
- **Porcentaje** - % de respuestas correctas
- **Evaluación cualitativa** - Excelente, Bien, Aceptable, Necesita mejora
- **Conceptos débiles** - Temas a reforzar

## 📖 Guía Rápida de Temas

### SQL Básico (01-Conceptos-SQL)
```
SELECT, INSERT, UPDATE, DELETE - Operaciones CRUD
Tipos de datos: VARCHAR, INT, BOOLEAN
Claves primarias y foráneas
CREATE TABLE, DROP TABLE, ALTER TABLE
```

### PostgreSQL (02-PostgreSQL-Basico)
```
Conexión: psql -d database -U usuario
Usuarios y roles: CREATE USER, GRANT
Backup y restauración: pg_dump, psql
Configuración: postgresql.conf
```

### Consultas Avanzadas (03-Consultas-Avanzadas)
```
INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN
Subconsultas y EXISTS
Window functions: ROW_NUMBER(), RANK()
CTEs recursivas: WITH RECURSIVE
UNION, INTERSECT, EXCEPT
```

### Transacciones (04-Transacciones)
```
ACID: Atomicity, Consistency, Isolation, Durability
COMMIT, ROLLBACK, SAVEPOINT
Isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE
Problemas: Dirty read, deadlock, phantom read
```

### Hibernate ORM (05-Hibernate-ORM)
```
@Entity, @Id, @Column
@OneToMany, @ManyToOne, @ManyToMany
SessionFactory, Session
CRUD: save(), update(), delete(), find()
HQL: Hibernate Query Language
Lazy vs Eager loading
```

### Java Básico (01-Basicos)
```
Tipos: int, float, double, String, boolean
Operadores: +, -, *, /, %, ==, !=, &&, ||
Control: if-else, for, while
Operadores lógicos y precedencia
```

### OOP (02-OOP)
```
Clases y objetos
Herencia: extends
Polimorfismo y sobrecarga
Encapsulación: public, private
Métodos abstractos e interfaces
Constructores y this
```

### Excepciones (03-Excepciones)
```
Jerarquía: Throwable → Exception → RuntimeException
try-catch-finally
Excepciones checked vs unchecked
Excepciones personalizadas
throw y throws
try-with-resources
```

### Colecciones (04-Colecciones)
```
Array, ArrayList, LinkedList
HashMap, TreeMap
HashSet, TreeSet
Iteradores
Stream API
```

### Hibernate en Programación (05-Hibernate)
```
Integración completa con Java
Relaciones entre entidades
Cascada de operaciones
N+1 problem y optimización
Proxy objects
```

## 🔧 Compilación Masiva (Opcional)

Para compilar todos los tests de una vez:

```bash
# Desde raíz del proyecto
find Temas -name "*.java" -type f | xargs javac
```

O crear un script:

```bash
#!/bin/bash
for dir in Temas/*/*; do
  if [ -d "$dir" ]; then
    cd "$dir"
    javac *.java
    cd ../../..
  fi
done
```

## 📊 Estadísticas del Proyecto

```
Temas:           10 (5 BaseDatos + 5 Programación)
Preguntas:       300 (30 × 10 temas)
Niveles:         3 (BAJA, MEDIA, ALTA)
Archivos Java:   30 (3 × 10 temas)
Tamaño:          ~6MB
Líneas de código: ~7,000+
```

## ✅ Requisitos

- **Java 8 o superior**
- **Terminal/CMD** con acceso a compilador javac
- **Entrada estándar** (teclado para responder preguntas)

## 🐛 Troubleshooting

### Error: "class not found"
```bash
# Asegúrate de estar en el directorio correcto
cd Temas/BaseDatos/01-Conceptos-SQL/
javac ConceptosSQL.java
java ConceptosSQL
```

### Error: "cannot find symbol"
```bash
# Verifica que todas las clases (.java) estén en el mismo directorio
ls -la
# Debe haber: ConceptosSQL.java, Pregunta.java, Respuesta.java
```

### El test no responde a tu entrada
```bash
# Asegúrate de presionar ENTER después de tu respuesta
Respuesta: a[ENTER]
```

## 📝 Estructura del Código

### TestAdaptativo (clase base)
- `iniciarTest(String titulo)` - Flujo principal
- `filtrarPorDificultad()` - Adapta según nivel
- `incluirNombre()` - Personalización
- `mostrarResultados()` - Evaluación final

### Pregunta
```java
new Pregunta(
    "¿Qué es SQL?",
    "a) Un error", "b) Lenguaje de consultas", "c) Una tabla", "d) Un tipo de dato",
    "b",                           // respuesta correcta
    "✅ Correcto",                 // mensaje OK
    "❌ Incorrecto",               // mensaje error
    "SQL = Structured Query Language",  // sugerencia
    "Conceptos básicos",           // concepto
    1                              // dificultad (1=BAJA)
);
```

## 🎓 Flujo de Aprendizaje Recomendado

### Fase 1: Conceptos Básicos
1. Java Básico (01-Basicos)
2. Conceptos SQL (01-Conceptos-SQL)

### Fase 2: OOP y Consultas
3. OOP (02-OOP)
4. Consultas Avanzadas (03-Consultas-Avanzadas)

### Fase 3: Manejo Avanzado
5. Excepciones (03-Excepciones)
6. Transacciones (04-Transacciones)

### Fase 4: Integración
7. Colecciones (04-Colecciones)
8. PostgreSQL Básico (02-PostgreSQL-Basico)
9. Hibernate ORM (05-Hibernate-ORM)
10. Hibernate en Programación (05-Hibernate)

## 💡 Consejos de Estudio

1. **Empieza con dificultad BAJA** para entender conceptos
2. **Repite el test varias veces** para mejorar
3. **Nota los conceptos débiles** y refuerza esos temas
4. **Aumenta dificultad gradualmente** conforme mejores
5. **Usa los mensajes de sugerencia** para aprender

## 📄 Licencia

Estos tests fueron creados para fines educativos.

## 👨‍💻 Información de Desarrollo

- **Estructura:** Modular y escalable
- **Tests:** Completamente autónomos
- **Cada tema:** Compilable e ejecutable independientemente
- **Fácil de extender:** Agregar nuevas preguntas es trivial

---

**¡Bienvenido a TestJava2BBDD! 🚀**

Presiona ENTER y comienza a aprender.

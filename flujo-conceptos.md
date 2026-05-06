 # BORRADOR: Test1.java - EXCEPCIONES PERSONALIZADAS

 ## FASE 1: ENTENDER EL PROBLEMA (✓ completada)
 Test interactivo que evalúa comprensión de excepciones personalizadas.
 - Hace preguntas en 3 secciones
 - Recibe respuesta usuario (a/b/c/d)
 - Evalúa y acumula puntuación
 - Muestra resultados + conceptos débiles

 ---

 ## FASE 2: CLASES Y RESPONSABILIDADES (✓ completada)
 | Clase | Responsabilidad |
 |-------|-----------------|
 | **Test1** | Orquestar flujo, gestionar preguntas y resultados |
 | **Respuesta** *(si usas array)* | Encapsular pregunta + respuesta usuario + evaluación |

 ---

 ## FASE 3: MÉTODOS POR CLASE (ACTUALIZADO)

 ### CLASE: Test1

 ```
 ATRIBUTOS:
 ├── private Scanner scanner
 ├── private int totalPreguntas = 0
 ├── private ArrayList<Respuesta> respuestas = new ArrayList<>()  ← ARRAY profesional
 └── private ArrayList<String> conceptosDebiles = new ArrayList<>()

 MÉTODOS:
 ├── Constructor: Test1()
 │   └── this.scanner = new Scanner(System.in)
 │
 ├── iniciar()
 │   ├── Mostrar banner
 │   ├── Pedir confirmación
 │   ├── Llamar: hacerpreguntas(seccionTeorias)
 │   ├── Llamar: hacerpreguntas(seccionProyecto)
 │   ├── Llamar: hacerpreguntas(seccionPractica)
 │   └── Llamar: mostrarResultados()
 │
 ├── hacerpreguntas(ArrayList<Pregunta> preguntas)  ← GENÉRICO
 │   ├── Para cada pregunta en preguntas:
 │   │   ├── pintarrespuestas(pregunta)
 │   │   ├── respuestaUsuario = validarrespuesta()
 │   │   ├── esCorrecta = pregunta.validar(respuestaUsuario)
 │   │   ├── puntuarrespuesta(pregunta, respuestaUsuario, esCorrecta)
 │   │   └── totalPreguntas++
 │
 ├── pintarrespuestas(Pregunta p)
 │   ├── System.out.println(p.getTexto())
 │   ├── System.out.println(p.getOpcionA())
 │   ├── System.out.println(p.getOpcionB())
 │   ├── System.out.println(p.getOpcionC())
 │   └── System.out.println(p.getOpcionD())
 │
 ├── validarrespuesta() → String
 │   ├── Mostrar prompt "Tu respuesta (a/b/c/d): "
 │   ├── respuesta = scanner.nextLine().toLowerCase().trim()
 │   ├── MIENTRAS respuesta NO sea a/b/c/d:
 │   │   └── Mostrar error y pedir de nuevo
 │   └── RETURN respuesta
 │
 ├── puntuarrespuesta(Pregunta p, String respuesta, boolean esCorrecta)
 │   ├── Crear objeto: Respuesta r = new Respuesta(p, respuesta, esCorrecta)
 │   ├── respuestas.add(r)
 │   ├── SI esCorrecta:
 │   │   └── System.out.println(p.getMensajeOK())
 │   ├── SINO:
 │   │   ├── System.out.println(p.getMensajeError())
 │   │   ├── System.out.println(p.getSugerencia())
 │   │   └── conceptosDebiles.add(p.getConcepto())
 │
 └── mostrarResultados()
     ├── int puntuacion = 0
     ├── PARA CADA Respuesta r EN respuestas:
     │   └── SI r.esCorrecta(): puntuacion++
     ├── int porcentaje = (puntuacion * 100) / totalPreguntas
     ├── Mostrar banner "RESULTADOS FINALES"
     ├── Mostrar: puntuacion/totalPreguntas
     ├── Mostrar: porcentaje%
     ├── SI porcentaje >= 90: "🏆 EXCELENTE"
     ├── SI porcentaje >= 75: "👍 BIEN"
     ├── SI porcentaje >= 60: "📚 ACEPTABLE"
     ├── SINO: "⚠️   NECESITA MEJORA"
     ├── SI !conceptosDebiles.isEmpty():
     │   ├── Mostrar lista conceptosDebiles
     │   └── Mostrar recomendaciones
     └── SINO: "🎉 ¡Perfecto! Listo para Fase 3"
 ```

 ---

 ## FASE 4: PSEUDOCÓDIGO - MÉTODOS CRÍTICOS

 ### `hacerpreguntas(ArrayList<Pregunta> preguntas)` ← CLAVE

 ```
 PROCEDIMIENTO hacerpreguntas(preguntas):

   MOSTRAR sección (teoría/proyecto/práctica)

   PARA CADA pregunta EN preguntas:

     // 1. MOSTRAR
     pintarrespuestas(pregunta)

     // 2. RECIBIR Y VALIDAR
     respuesta = validarrespuesta()  // loop hasta a/b/c/d

     // 3. EVALUAR
     esCorrecta = (respuesta == pregunta.respuestaCorrecta)

     // 4. PUNTUAR Y GUARDAR
     puntuarrespuesta(pregunta, respuesta, esCorrecta)

     // 5. CONTAR
     totalPreguntas++

 FIN PARA
 ```

 ### `mostrarResultados()` ← CÁLCULO

 ```
 PROCEDIMIENTO mostrarResultados():

   // Calcular puntuación (ITERANDO respuestas)
   puntuacion = 0
   PARA CADA r EN respuestas:
     SI r.esCorrecta():
       puntuacion++

   // Calcular porcentaje
   porcentaje = (puntuacion * 100) / totalPreguntas

   // Mostrar resultados
   MOSTRAR "Puntuación: " + puntuacion + "/" + totalPreguntas
   MOSTRAR "Porcentaje: " + porcentaje + "%"

   // Evaluación cualitativa
   SI porcentaje >= 90:
     MOSTRAR "🏆 EXCELENTE"
   SI NO porcentaje >= 75:
     MOSTRAR "👍 BIEN"
   SI NO porcentaje >= 60:
     MOSTRAR "📚 ACEPTABLE"
   SI NO:
     MOSTRAR "⚠️   NECESITA MEJORA"

   // Conceptos débiles
   SI conceptosDebiles NO ESTÁ VACÍO:
     MOSTRAR "CONCEPTOS A REFORZAR:"
     PARA CADA concepto EN conceptosDebiles:
       MOSTRAR "  ❌ " + concepto
   SI NO:
     MOSTRAR "🎉 ¡Perfecto! Listo para Fase 3"

 FIN PROCEDIMIENTO
 ```

 ---

 ## FASE 5: DECISIONES ARQUITECTÓNICAS

 | Decisión | Opción | Justificación |
 |----------|--------|---------------|
 | **Almacenar resultados** | ✅ ArrayList<Respuesta> | Permite análisis futuro, escalable |
 | **Validar respuesta** | ✅ Loop hasta válida | Robustez, usuario no pierde pregunta |
 | **Calcular puntuación** | ✅ En mostrarResultados() | Iterar respuestas, no acumulador (flexible) |
 | **Separar responsabilidades** | ✅ Método por responsabilidad | SRP: pintar ≠ validar ≠ puntuar |
 | **ArrayList<Pregunta>** | ✅ Parámetro en hacerpreguntas() | Reutilizable para las 3 secciones |

 ---

 ## FASE 6: ESTRUCTURA DE DATOS AUXILIARES

 ### Clase Respuesta (necesaria para array)

 ```java
 public class Respuesta {
   private Pregunta pregunta;
   private String respuestaUsuario;
   private boolean esCorrecta;

   // Constructor
   public Respuesta(Pregunta p, String respuesta, boolean correcta) {
     this.pregunta = p;
     this.respuestaUsuario = respuesta;
     this.esCorrecta = correcta;
   }

   // Getters
   public boolean esCorrecta() { return esCorrecta; }
   public String getRespuestaUsuario() { return respuestaUsuario; }
   public Pregunta getPregunta() { return pregunta; }
 }
 ```

 ### Clase Pregunta (recomendado refactorizar)

 ```java
 public class Pregunta {
   private String texto;
   private String opcionA, opcionB, opcionC, opcionD;
   private String respuestaCorrecta;
   private String mensajeOK, mensajeError, sugerencia;
   private String concepto;

   // Constructor + getters
   // ...

   // Validar respuesta
   public boolean validar(String respuesta) {
     return respuesta.equals(respuestaCorrecta);
   }
 }
 ```

 ---

 ## FLUJO COMPLETO DE EJECUCIÓN

 ```
 main()
   ↓
 Test1.iniciar()
   ├─ Mostrar banner
   ├─ Pedir confirmación
   ├─ hacerpreguntas(teorias)
   │   └─ Para cada pregunta:
   │       ├─ pintarrespuestas()
   │       ├─ validarrespuesta()
   │       ├─ evaluar
   │       └─ puntuarrespuesta() → guardar en respuestas
   ├─ hacerpreguntas(proyecto)
   │   └─ (idem)
   ├─ hacerpreguntas(practicas)
   │   └─ (idem)
   └─ mostrarResultados()
       ├─ Iterar respuestas
       ├─ Calcular puntuación
       ├─ Mostrar resultados
       └─ Mostrar conceptos débiles

 FIN
 ```

 ---

 ## CHECKLIST ANTES DE CODIFICAR

 - [ ] ¿Entiendo qué hace cada método?
 - [ ] ¿Cada método tiene UNA responsabilidad?
 - [ ] ¿Los métodos son reutilizables?
 - [ ] ¿Cómo manejo entrada inválida?
 - [ ] ¿Dónde acumulo datos (respuestas)?
 - [ ] ¿Cómo calculo resultados?
 - [ ] ¿Qué información guardo para análisis?

 ---

 ---

## FASE 7: ESTRUCTURAS DE DATOS POR MÉTODO

### Mapa de Estructuras Utilizadas

| Método | Estructura | Tipo | Propósito | Acciones |
|--------|-----------|------|----------|----------|
| **Constructor** | `scanner` | Scanner | Capturar entrada del usuario | Inicializar |
| **iniciar()** | `String respuesta` | Variable simple | Guardar confirmación s/n | Comparar |
| **hacerpreguntas()** | `ArrayList<Pregunta>` | Colección | Iterar preguntas de la sección | Recorrer (for-each) |
| **hacerpreguntas()** | `int totalPreguntas` | Acumulador | Contar preguntas hechas | Incrementar (++) |
| **pintarrespuestas()** | `Pregunta p` | Objeto | Acceder a texto + opciones | Getters |
| **validarrespuesta()** | `String respuesta` | Variable | Guardar entrada validada | Comparar, trim(), toLowerCase() |
| **puntuarrespuesta()** | `ArrayList<Respuesta>` | Colección | Guardar cada intento | add() |
| **puntuarrespuesta()** | `ArrayList<String>` | Colección | Guardar conceptos débiles | add() |
| **puntuarrespuesta()** | `Respuesta r` | Objeto | Encapsular resultado | Constructor |
| **mostrarResultados()** | `ArrayList<Respuesta>` | Colección | Iterar para calcular puntuación | for-each |
| **mostrarResultados()** | `int puntuacion` | Acumulador | Sumar respuestas correctas | Incrementar (++) |
| **mostrarResultados()** | `int porcentaje` | Variable | Calcular % | División, casting |
| **mostrarResultados()** | `ArrayList<String>` | Colección | Mostrar conceptos débiles | for-each, isEmpty() |

### Resumen por Tipo de Estructura

**Colecciones (ArrayList):**
- `respuestas` ← Almacena TODOS los intentos (ArrayList<Respuesta>)
- `conceptosDebiles` ← Almacena temas fallidos (ArrayList<String>)
- `preguntas` (parámetro) ← Recibe preguntas de la sección (ArrayList<Pregunta>)

**Acumuladores (int):**
- `totalPreguntas` ← Suma de preguntas hechas
- `puntuacion` ← Suma de respuestas correctas (en mostrarResultados())

**Objetos:**
- `Pregunta` ← Encapsula texto, opciones, respuesta correcta
- `Respuesta` ← Encapsula pregunta + respuesta usuario + evaluación
- `Scanner` ← Lee entrada del usuario

**Variables Simples (String):**
- `respuesta` ← Entrada actual del usuario (a/b/c/d)
- `concepto` ← Texto del tema que se falló

---

## FASE 8: GLOSARIO

### Términos Técnicos Utilizados en Test1.java

#### **Acumulador**
Variable numérica que suma o incrementa valores en cada iteración. En este código:
- `totalPreguntas++` ← cuenta preguntas
- `puntuacion++` ← cuenta respuestas correctas

*Analogía:* Es como un contador de votos que incrementas cada vez que algo ocurre.

---

#### **ArrayList**
Colección dinámica que crece o se reduce según necesites. A diferencia de arrays fijos, puedes agregar elementos con `.add()`.

*Uso en Test1:*
```java
ArrayList<Respuesta> respuestas = new ArrayList<>();  // Colección vacía
respuestas.add(new Respuesta(...));                    // Agregar elementos
```

*Analogía:* Es como una lista de compras que puedes ampliar sin límite.

---

#### **Iteración / Iterar**
Recorrer uno a uno los elementos de una colección.

*Estructura típica (for-each):*
```java
PARA CADA Respuesta r EN respuestas:
  SI r.esCorrecta(): puntuacion++
```

*Analogía:* Como contar uno por uno los votos en una urna.

---

#### **Getter**
Método que devuelve el valor de un atributo privado. Permite leer información sin modificarla.

*¿Qué es realmente?*
Un **señalador + extractor de valor**. Dices "dame esto específicamente" y te devuelve el contenido/valor.

*Estructura:*
```java
public String getTexto() {
  return texto;  // Siempre devuelve (return) el VALOR del atributo
}
```

**Por qué SIEMPRE hay `return` en un getter:**
1. Se llama para **OBTENER** un valor
2. Si no devolviera nada → no serviría de nada ❌
3. El `return` = el contenido/valor que extraes

*Analogía con JavaScript:*
```javascript
document.getElementById("usuario")
// ↓ Señala y devuelve
// el elemento con ID "usuario"
```

```java
pregunta.getTexto()
// ↓ Señala y devuelve
// el texto de esta pregunta
```

**Ambos son:** "Dame la cosa específica que se llama así" + devolver su valor

*Analogía cotidiana:* Es como preguntar "¿Cuál es tu nombre?" y la persona responde (return) "Mi nombre es Juan". Si no respondiera, la pregunta no serviría de nada.

*Patrón:*
```java
// 1. ESPECIFICAS qué tipo devolverás
public String getConcepto() {
  // 2. DEVUELVES el valor de ese atributo
  return concepto;
}

// Cuando lo usas:
String concepto = pregunta.getConcepto();  // Guardas lo que return devolvió
```

*¿Por qué getter y no acceso directo?*
Porque protege los datos. Si declaras `public String concepto`, cualquiera puede cambiarlo. Con getter, solo permites LEER, no modificar.

```java
// ❌ Malo: datos expuestos
public class Pregunta {
  public String concepto;  // Cualquiera puede cambiar
}

// ✅ Bien: datos protegidos
public class Pregunta {
  private String concepto;  // Solo se puede leer con getter
  public String getConcepto() {
    return concepto;
  }
}
```

---

#### **ArrayList.isEmpty()**
Método que pregunta: "¿Está la colección vacía?"
- Devuelve `true` si no hay elementos
- Devuelve `false` si hay elementos

*Uso en Test1:*
```java
if (!conceptosDebiles.isEmpty()) {  // Si NO está vacía
  // Mostrar conceptos débiles
}
```

---

#### **ArrayList.add()**
Método que agrega un elemento al final de la colección.

*Ejemplo:*
```java
respuestas.add(new Respuesta(p, respuesta, esCorrecta));
```

---

#### **Constructor**
Método especial que se ejecuta automáticamente cuando creas un objeto. Inicializa los valores.

*Ejemplo en Test1:*
```java
public Test1() {
  this.scanner = new Scanner(System.in);  // Se ejecuta al hacer: new Test1()
}
```

*Analogía:* Como encender la máquina antes de usarla.

---

#### **Encapsulación**
Guardar información en objetos con atributos privados. Se accede solo a través de métodos públicos (getters/setters).

*Ejemplo:*
```java
public class Respuesta {
  private boolean esCorrecta;  // ← Privado, no se modifica desde fuera
  public boolean esCorrecta() {  // ← Getter público, solo lectura
    return esCorrecta;
  }
}
```

---

#### **toString().toLowerCase().trim()**
Métodos encadenados para limpiar entrada:
- `.toLowerCase()` ← convierte a minúsculas (A → a)
- `.trim()` ← elimina espacios al inicio/final (" a " → "a")

*Analogía:* Normalizar la entrada para evitar errores por formato.

---

#### **Responsabilidad (SRP - Single Responsibility Principle)**
Cada método debe hacer UNA cosa y hacerla bien.

*Ejemplos en Test1:*
- `pintarrespuestas()` → responsabilidad: mostrar ✅
- `validarrespuesta()` → responsabilidad: validar ✅
- `puntuarrespuesta()` → responsabilidad: puntuar ✅

**No es buena práctica:** un método que valide, puntúe y muestre al mismo tiempo ❌

---

#### **for-each (Para cada)**
Forma simplificada de recorrer colecciones sin índices.

*Sintaxis:*
```java
PARA CADA Respuesta r EN respuestas:
  hacer algo con r
```

*Equivalente en Java:*
```java
for (Respuesta r : respuestas) {
  // hacer algo con r
}
```

*Analogía:* Como repartir uno a uno los bolígrafos de una caja, sin contar.

---

#### **Casting (Conversión de tipos)**
Convertir un valor de un tipo a otro.

*Ejemplo en mostrarResultados():*
```java
int porcentaje = (puntuacion * 100) / totalPreguntas;
// int → resultado entero (sin decimales)
```

---

#### **Parámetro**
Valor que le pasas a un método para que lo use.

*Ejemplo:*
```java
hacerpreguntas(ArrayList<Pregunta> preguntas)
  // ↑ 'preguntas' es el parámetro
```

---

#### **Flujo de Control**
Orden en que se ejecutan las instrucciones. Controlado con `if/else`, `for`, `while`, etc.

*Flujo de Test1:*
1. Mostrar banner
2. Preguntar confirmación
3. Hacer preguntas (iteración)
4. Mostrar resultados

---

#### **Método void vs. Método con return**

| Tipo | Devuelve | Ejemplo |
|------|----------|---------|
| **void** | Nada | `void pintarrespuestas()` → solo ejecuta, no devuelve |
| **Con return** | Un valor | `String validarrespuesta()` → devuelve la respuesta |

---

#### **this**
Referencia al objeto actual. Útil en constructores para diferenciar parámetros de atributos.

*Ejemplo:*
```java
public Test1() {
  this.scanner = new Scanner(System.in);
  // 'this.scanner' = atributo de la clase
  // 'scanner' = no existe, necesitas 'this'
}
```

---

#### **Excepción (Exception)**
Evento anormal o situación inesperada que interrumpe el flujo normal del programa. Las excepciones pueden ser capturadas y manejadas para evitar que el programa se bloquee.

*Tipos:*
- **Checked Exception:** Se verifica en tiempo de compilación. Debes declararla con `throws` o capturarla con `try-catch`.
- **Unchecked Exception (RuntimeException):** Se ejecuta en tiempo de ejecución, no es obligatorio declararla.

*Ejemplo:*
```java
if (respuesta.equals(respuestaCorrecta)) {
  // Caso normal
} else {
  // Situación anormal: respuesta incorrecta
  conceptosDebiles.add(concepto);  // Manejar excepción
}
```

*Analogía:* Como un accidente de tráfico: es una situación inesperada que debes manejar sin que el coche se bloquee.

---

#### **Excepciones Personalizadas**
Clases que creas extendiendo `Exception` para representar errores específicos de tu dominio/problema. Permiten manejar situaciones de error de forma detallada.

*Estructura básica:*
```java
public class PlatoOcupadoException extends Exception {
  public PlatoOcupadoException(String mensaje) {
    super(mensaje);
  }
}
```

*Por qué son útiles:*
- Especificidad: sabes exactamente qué error ocurrió
- Control: puedes manejar cada tipo de error diferente
- Documentación: el código es más claro

---

#### **throws**
Palabra clave que declara en la firma del método que puede lanzar una excepción. El que llamé al método debe capturarla o declararla a su vez.

*Ejemplo:*
```java
public void comprarPedido(int id) throws PlatoOcupadoException {
  if (!disponible) {
    throw new PlatoOcupadoException("Ese plato ya está vendido");
  }
}
```

*Diferencia:*
- `throws` = declara que PUEDE lanzar
- `throw` = LANZA la excepción ahora

---

#### **try-catch**
Estructura para capturar y manejar excepciones. El código en `try` se intenta ejecutar; si falla, se ejecuta el `catch`.

*Sintaxis:*
```java
try {
  comprarPedido(id);
} catch (PlatoOcupadoException e) {
  System.out.println("El plato está ocupado: " + e.getMessage());
}
```

*Analogía:* Como intentar algo peligroso (try) y tener un plan B si falla (catch).

---

#### **Clase**
Molde o plantilla para crear objetos. Define qué atributos (datos) y métodos (comportamientos) tendrá cada objeto.

*Ejemplo en Test1:*
```java
public class Test1 {
  // Atributos: qué datos tiene
  private Scanner scanner;

  // Métodos: qué puede hacer
  public void iniciar() { ... }
}
```

*Analogía:* Como un plano de un edificio (clase) que se usa para construir muchos edificios (objetos).

---

#### **Objeto / Instancia**
Copia específica de una clase con sus propios valores. Cada objeto es independiente.

*Ejemplo:*
```java
Test1 test = new Test1();  // 'test' es un objeto/instancia de Test1
Test1 test2 = new Test1(); // 'test2' es OTRO objeto, diferente de 'test'
```

*Analogía:* La clase es el plano; cada objeto es un edificio construido con ese plano.

---

#### **Atributo (Campo)**
Variable que pertenece a la clase. Almacena datos del objeto.

*Ejemplo en Test1:*
```java
private Scanner scanner;        // Atributo
private int totalPreguntas = 0; // Atributo con valor inicial
```

*Diferencia con variable local:*
- **Atributo:** existe durante toda la vida del objeto
- **Variable local:** existe solo dentro del método

---

#### **new (Operador new)**
Crea una nueva instancia (copia) de una clase, ejecutando el constructor.

*Ejemplo:*
```java
Test1 test = new Test1();
// ↑ new crea la instancia y llama al constructor
```

---

#### **String**
Tipo de dato que almacena texto. En Java es un objeto.

*Ejemplos en Test1:*
```java
String respuesta = "a";           // Una letra
String pregunta = "¿Qué es...?";  // Pregunta completa
```

*Métodos útiles:*
- `.toLowerCase()` ← convierte a minúsculas
- `.trim()` ← elimina espacios
- `.equals(otra)` ← compara strings
- `.length()` ← longitud del texto

---

#### **int (Integer)**
Tipo de dato para números enteros (sin decimales).

*Ejemplos en Test1:*
```java
int puntuacion = 0;          // Comienza en 0
int totalPreguntas = 13;     // Total fijo
int porcentaje = 85;         // Resultado de cálculo
```

*Operaciones:*
- `++` ← incrementa 1
- `+=` ← suma (x += 5 es x = x + 5)
- `*`, `/`, `%` ← multiplicar, dividir, módulo

---

#### **boolean**
Tipo de dato que solo tiene dos valores: `true` (verdadero) o `false` (falso).

*Ejemplos en Test1:*
```java
boolean esCorrecta = respuesta.equals(respuestaCorrecta);
if (esCorrecta) { ... }  // Si es true
```

---

#### **private / public**
Modificadores de acceso que controlan quién puede acceder a atributos y métodos.

*Tipos:*
- **private:** solo la clase misma puede acceder
- **public:** cualquiera puede acceder

*Ejemplo:*
```java
public class Test1 {
  private Scanner scanner;  // Solo Test1 puede acceder
  public void iniciar() { } // Cualquiera puede llamar
}
```

*Por qué importa:* **Encapsulación.** Proteges los datos internos.

---

#### **Parámetro vs Argumento**

| Término | Qué es |
|---------|--------|
| **Parámetro** | Variable en la firma del método |
| **Argumento** | Valor que pasas al llamar el método |

*Ejemplo:*
```java
// DEFINICIÓN: ArrayList<Pregunta> es el PARÁMETRO
public void hacerpreguntas(ArrayList<Pregunta> preguntas) { }

// LLAMADA: seccionTeorias es el ARGUMENTO
hacerpreguntas(seccionTeorias);
```

---

#### **Tipo Genérico <T>**
Sintaxis que permite crear colecciones tipadas: `ArrayList<Respuesta>` es un ArrayList que solo contiene objetos `Respuesta`.

*Ejemplos:*
```java
ArrayList<Respuesta> respuestas;      // ArrayList de Respuesta
ArrayList<String> conceptosDebiles;   // ArrayList de String
ArrayList<Pregunta> preguntas;        // ArrayList de Pregunta
```

*Ventaja:* El compilador verifica que solo agregues el tipo correcto.

---

#### **Referencia**
Variable que "apunta" a un objeto en memoria. No es el objeto en sí, sino una dirección hacia él.

*Ejemplo:*
```java
Test1 test = new Test1();
// 'test' es una REFERENCIA al objeto Test1
// No es el objeto, sino una "flecha" hacia él
```

*Analogía:* Como tener la dirección de una casa (referencia) vs. estar dentro de la casa (el objeto).

---

#### **Scanner**
Clase de Java que lee entrada del usuario desde el teclado.

*Uso en Test1:*
```java
Scanner scanner = new Scanner(System.in);
String respuesta = scanner.nextLine();  // Lee una línea de texto
```

*Métodos principales:*
- `.nextLine()` ← lee todo hasta Enter
- `.next()` ← lee una palabra
- `.nextInt()` ← lee un número

---

#### **System.out.println()**
Método que imprime texto en la consola y salta de línea.

*Ejemplo:*
```java
System.out.println("Hola");      // Imprime "Hola" + salto de línea
System.out.print("Sin salto");   // Imprime sin salto de línea
```

*En Test1:* Se usa para mostrar preguntas, opciones y resultados.

---

#### **equals()**
Método para comparar strings (y otros objetos). Compara el contenido, no la referencia.

*Diferencia:*
```java
"a" == "a"             // Comparar referencias (no siempre funciona)
"a".equals("a")        // Comparar contenido (✅ correcto)
"A".equalsIgnoreCase("a")  // Comparar sin importar mayúsculas
```

*Uso en Test1:*
```java
if (respuesta.equals(respuestaCorrecta)) {
  // La respuesta es correcta
}
```

---

#### **Condicional (if/else)**
Estructura que ejecuta código diferente según una condición sea `true` o `false`.

*Sintaxis:*
```java
if (puntuacion >= 90) {
  System.out.println("🏆 EXCELENTE");
} else if (puntuacion >= 75) {
  System.out.println("👍 BIEN");
} else {
  System.out.println("Necesita mejora");
}
```

*En Test1:* Se usa para validar respuestas y mostrar diferentes resultados.

---

#### **Bucle / Loop**
Estructura que repite un bloque de código múltiples veces.

*Tipos principales:*

**for-each (el más usado en Test1):**
```java
for (Respuesta r : respuestas) {
  if (r.esCorrecta()) puntuacion++;
}
```

**while (repetir hasta condición):**
```java
while (!respuestaValida) {
  respuesta = scanner.nextLine();
  respuestaValida = validarRespuesta(respuesta);
}
```

**for tradicional:**
```java
for (int i = 0; i < 5; i++) {
  // Repetir 5 veces
}
```

---

#### **return**
Palabra clave que devuelve un valor desde un método y termina su ejecución.

*Ejemplo:*
```java
public String validarrespuesta() {
  String respuesta = scanner.nextLine();
  return respuesta;  // Devuelve el valor y termina el método
}
```

*Diferencia:*
- **void:** método no devuelve nada
- **String/int/boolean:** método devuelve ese tipo

---

#### **Entrada/Salida (I/O - Input/Output)**
Comunicación del programa con el usuario.

*Entrada (Input):*
```java
Scanner scanner = new Scanner(System.in);
String entrada = scanner.nextLine();  // Leer del usuario
```

*Salida (Output):*
```java
System.out.println("Resultado: " + puntuacion);  // Mostrar al usuario
```

*En Test1:* Scanner = entrada; System.out = salida.

---

#### **main()**
Método especial que Java ejecuta automáticamente al iniciar el programa. Es el punto de entrada.

*Sintaxis:*
```java
public static void main(String[] args) {
  Test1 test = new Test1();
  test.iniciar();
  // ↑ Aquí comienza el programa
}
```

---

#### **Instanciar**
Crear un nuevo objeto a partir de una clase.

*Ejemplo:*
```java
Test1 test = new Test1();  // Instanciar Test1
// 'new' instancia (crea un nuevo objeto)
```

---

#### **Inicializar**
Asignar un valor inicial a una variable o atributo.

*Ejemplos:*
```java
int puntuacion = 0;                    // Inicializar a 0
ArrayList<String> conceptos = new ArrayList<>();  // Inicializar colección vacía
```

---

#### **Expresión**
Combinación de variables, valores y operadores que calcula un resultado.

*Ejemplos en Test1:*
```java
puntuacion * 100 / totalPreguntas  // Expresión que calcula porcentaje
respuesta.equals(correcta)         // Expresión que devuelve boolean
```

---

#### **Sentencia / Statement**
Instrucción única que hace algo. Termina con `;` (punto y coma).

*Ejemplos:*
```java
int puntuacion = 0;                // Una sentencia
System.out.println("Hola");        // Una sentencia
if (correcto) { ... }              // Una sentencia (que contiene otras)
```

---

#### **Bloque de Código**
Grupo de sentencias entre llaves `{ }`.

*Ejemplo:*
```java
if (esCorrecta) {
  // BLOQUE: varias sentencias
  puntuacion++;
  System.out.println("✅ Correcto");
}
```

---

#### **Flujo Secuencial**
Ejecución del código línea por línea, de arriba a abajo.

*Ejemplo en iniciar():*
```java
System.out.println("Banner");           // 1. Mostrar banner
System.out.println("¿Listo?");          // 2. Preguntar
String respuesta = scanner.nextLine();  // 3. Leer respuesta
if (respuesta.equals("s")) { ... }     // 4. Decidir
hacerPreguntasTeorias();                // 5. Hacer preguntas
```

Se ejecuta en orden (1 → 2 → 3 → 4 → 5).

---

#### **Validación**
Proceso de verificar que los datos cumplen ciertos requisitos antes de usarlos.

*Ejemplo en validarrespuesta():*
```java
MIENTRAS respuesta NO sea a/b/c/d:
  mostrar error
  pedir de nuevo
// Solo sale del loop cuando es válido
```

*Por qué importa:* Evita que datos incorrectos causen errores.

---

#### **Lógica de Negocio**
La parte del código que resuelve el problema específico (en este caso, evaluar excepciones).

*En Test1:*
- Mostrar preguntas ✓
- Recibir respuesta ✓
- Evaluar si es correcta ✓
- Calcular puntuación ✓
- Mostrar resultados ✓

Toda esta es la "lógica de negocio" del test.

---

#### **Estado del Objeto**
Los valores actuales de los atributos de un objeto en un momento dado.

*Ejemplo:*
```java
Test1 test = new Test1();
// Estado inicial: puntuacion=0, totalPreguntas=0

// Después de 3 preguntas:
// Estado: puntuacion=2, totalPreguntas=3
```

El estado cambia conforme el programa se ejecuta.

---

#### **Separación de Responsabilidades (SRP)**
Principio de diseño: cada método debe tener UNA sola responsabilidad, hacer UNA cosa bien.

*Violación:*
```java
// ❌ MALO: método hace 3 cosas
void procesarRespuesta() {
  mostrarPregunta();        // Responsabilidad 1
  String respuesta = validar();  // Responsabilidad 2
  puntuar(respuesta);       // Responsabilidad 3
}
```

*Correcto:*
```java
// ✅ BIEN: cada método hace una cosa
void pintarrespuestas(Pregunta p) { ... }    // Mostrar
String validarrespuesta() { ... }            // Validar
void puntuarrespuesta(...) { ... }           // Puntuar
```

---

#### **Genérico / Reutilizable**
Código que funciona con diferentes tipos sin cambiar la lógica.

*Ejemplo en Test1:*
```java
// GENÉRICO: funciona con cualquier ArrayList<Pregunta>
public void hacerpreguntas(ArrayList<Pregunta> preguntas) {
  for (Pregunta p : preguntas) {
    // Mismo código para teoría, proyecto, práctica
  }
}
```

*Sin genérico:*
```java
// ❌ MALO: código repetido
void hacerPreguntasTeorias() { for (...) { } }
void hacerPreguntasProyecto() { for (...) { } }
void hacerPreguntasPracticas() { for (...) { } }
```

---

#### **Comparación**
Operadores que devuelven `true` o `false`.

*Principales en Java:*

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `==` | Igualdad (para primitivos) | `5 == 5` → true |
| `.equals()` | Igualdad (para objetos/strings) | `"a".equals("a")` → true |
| `!=` | No igual | `5 != 3` → true |
| `>` | Mayor que | `10 > 5` → true |
| `>=` | Mayor o igual | `5 >= 5` → true |
| `<` | Menor que | `3 < 10` → true |
| `<=` | Menor o igual | `5 <= 5` → true |

*En Test1:*
```java
if (porcentaje >= 90) { ... }
if (respuesta.equals(respuestaCorrecta)) { ... }
```

---

## CHECKLIST ANTES DE CODIFICAR

- [ ] ¿Entiendo qué hace cada método?
- [ ] ¿Cada método tiene UNA responsabilidad?
- [ ] ¿Los métodos son reutilizables?
- [ ] ¿Cómo manejo entrada inválida?
- [ ] ¿Dónde acumulo datos (respuestas)?
- [ ] ¿Cómo calculo resultados?
- [ ] ¿Qué información guardo para análisis?

---

**PRÓXIMO PASO:** Codificar método por método, empezando por `iniciar()` y `pintarrespuestas()` (más simples).
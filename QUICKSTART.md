# 🚀 Guía Rápida - 5 Minutos

## 1️⃣ Compilar TODO (Recomendado primero)

```bash
chmod +x compile.sh
./compile.sh
```

O compilar manualmente:

```bash
cd Temas/BaseDatos/01-Conceptos-SQL/
javac *.java
```

## 2️⃣ Ejecutar un Test

```bash
cd Temas/BaseDatos/01-Conceptos-SQL/
java ConceptosSQL
```

## 3️⃣ Responder el Test

```
¿Cuál es tu nombre? → Juan
¿Cómo te encuentras? → b (normal, nivel medio)
¿Listo? → s (sí)

P1. ¿Qué es SQL?
a) Error
b) Lenguaje de consultas
c) Una tabla
d) Un tipo de dato

Tu respuesta (a/b/c/d): b

✅ Correcto!

[Siguiente pregunta...]

📊 RESULTADOS
Puntuación: 25/30
Porcentaje: 83%
👍 ¡BIEN! Buena comprensión.
```

## 📚 Estructura de Carpetas

```
Temas/
├─ BaseDatos/
│  ├─ 01-Conceptos-SQL/           ← Empieza aquí
│  ├─ 02-PostgreSQL-Basico/
│  ├─ 03-Consultas-Avanzadas/
│  ├─ 04-Transacciones/
│  └─ 05-Hibernate-ORM/
└─ Programacion/
   ├─ 01-Basicos/                 ← O aquí
   ├─ 02-OOP/
   ├─ 03-Excepciones/
   ├─ 04-Colecciones/
   └─ 05-Hibernate/
```

## 🎯 Tests Disponibles

### BaseDatos (SQL + PostgreSQL + Hibernate)
| Test | Comando | Temas |
|------|---------|-------|
| Conceptos SQL | `java ConceptosSQL` | SELECT, INSERT, UPDATE, DELETE, JOINs |
| PostgreSQL | `java PostgreSQL` | Conexión, usuarios, backup, VACUUM |
| Consultas Avanzadas | `java ConsultasAvanzadas` | JOINs avanzados, subconsultas, CTEs |
| Transacciones | `java Transacciones` | ACID, COMMIT, ROLLBACK, isolation |
| Hibernate ORM | `java HibernateORM` | Entidades, relaciones, sesiones |

### Programación (Java + OOP + Excepciones)
| Test | Comando | Temas |
|------|---------|-------|
| Básicos | `java Basicos` | Tipos, operadores, control de flujo |
| OOP | `java OOP` | Clases, herencia, polimorfismo |
| Excepciones | `java Excepciones` | try-catch, throws, custom exceptions |
| Colecciones | `java Colecciones` | Arrays, ArrayList, HashMap, Sets |
| Hibernate | `java Hibernate` | ORM avanzado en Java |

## 💡 Consejos

✅ **Empieza con BAJA dificultad** para entender conceptos
✅ **Repite tests** para mejorar tu puntuación
✅ **Lee las sugerencias** cuando falles
✅ **Aumenta dificultad** conforme mejores

## ⚠️ Problemas Comunes

| Problema | Solución |
|----------|----------|
| `javac: command not found` | Instala Java JDK |
| `class not found` | Asegúrate de estar en el directorio correcto |
| `cannot find symbol` | Verifica que todos los `.java` estén en la carpeta |

## 📖 Más Información

Lee `README.md` para documentación completa.

---

**¡Listo para empezar! 🎓**

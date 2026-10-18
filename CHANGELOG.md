
> Registro de cada uso de IA. Formato: **Fecha · Herramienta · Qué le pedí · Qué me devolvió · Conservé · Cambié**
> Fechas en formato día-mes-año.

---

## Entradas

Esta tabla amplía las entradas anteriores. Permite reconstruir qué propuso la IA y cómo se transformó la propuesta a partir de la investigación, las entrevistas y el enunciado.

| Fecha | Herramienta | Qué se pidió a la IA | Qué propuso la IA | Qué se conservó | Qué se cambió y por qué |
|---|---|---|---|---|---|
| 27-09-2026 | OpenCode | Darle la vuelta a la idea inicial de un gestor de dinero parecido a un Excel, después de la crítica del profesor | Partir del problema del registro constante y convertirlo en una app que calcula un número semanal con ingresos, gastos fijos y objetivo de ahorro | El objetivo de controlar el dinero, la pregunta «¿cuánto puedo gastar esta semana?» y el registro opcional | Se abandonó el enfoque de tabla donde había que introducir ingresos, gastos fijos, variables y cada movimiento. La crítica del profesor y la entrevista a P3 mostraron que registrar todo era demasiado pesado; por eso se añadieron los kubos, el ritmo semanal y el colchón. |
| 27-09-2026 | OpenCode | Analizar los problemas de la idea | Añadir colchón, sobres y un modo Pro | El colchón y el registro rápido | El Modo Pro quedó apartado porque no es la tarea principal de P1 y todavía no está definido. |
| 27-09-2026 | OpenCode | Crear personas | Proponer perfiles genéricos | El formato de necesidades, frustraciones y objetivos | Se sustituyeron por P1, P2 y P3 reales, basadas en entrevistas y anonimizadas. |
| 27-09-2026 | OpenCode | Interpretar las entrevistas | Relacionar P1 con el número semanal, P2 con imprevistos y P3 con detalle | Esa relación entre personas y funcionalidades | Se corrigieron suposiciones que no aparecían en las entrevistas; cada afirmación se vinculó a una cita o dato. |
| 10-10-2026 | OpenCode | Revisar la competencia | Ampliar el análisis a varias aplicaciones | Los seis competidores y sus diferencias | Se descartaron citas de artículos o foros cuando no cumplían el requisito de reseñas de una estrella; se buscaron reseñas en las tiendas. |
| 10-10-2026 | OpenCode | Decidir cómo funcionaría la cuenta | Registro con email y contraseña, JWT y datos sincronizados | Registro, inicio de sesión y sincronización como Must have | Se descartó la sesión solo local: si P1 entra desde el ordenador, no debería volver a introducir sus datos. |
| 10-10-2026 | OpenCode | Resolver los gastos fijos variables | Detectarlos automáticamente o al editar los datos | Gastos fijos desglosados de forma opcional | Sin conexión bancaria la app no puede adivinar una factura; por eso el usuario actualiza el importe y la pregunta aparece en Revisión. |
| 10-10-2026 | OpenCode | Diseñar la pantalla de Revisión | Preguntar inmediatamente en Mi mes | La pregunta, las tres opciones y la simulación | Se movió la pregunta a Revisión para no interrumpir al usuario mientras edita Mi mes. |
| 10-10-2026 | OpenCode | Diseñar el inicio de un mes nuevo | Preguntar al abrir la aplicación | Pantalla completa con «No, todo igual» y «Sí, he cambiado algo» | Se dejó la pregunta antes del menú principal porque el cambio afecta al presupuesto mensual completo. |
| 10-10-2026 | OpenCode | Definir el ranking futuro | Comparar el porcentaje de mejora mensual | La privacidad y la comparación por porcentaje | Se cambió a porcentaje del objetivo cumplido, con tope del 100 %, porque la mejora podía dividir por cero y premiar a quien tenía más margen. |
| 17-10-2026 | OpenCode | Adaptar el proyecto a la Órbita 1 | Organizar hipótesis, referentes, encuesta, personas y MVP | La carpeta `KUBO/` y el flujo de ocho pasos | Se añadió el requisito pendiente de una persona con diversidad funcional en vez de inventar sus necesidades. |


### Cómo se justifican las decisiones

- **P1** revisa el banco a diario y va «de cabeza»: de ahí salen el número semanal y la consulta en cinco segundos.
- **P2** evita mirar, se quedó sin dinero y tiene gastos variables de sus gatos: de ahí salen el tono sin culpa y el colchón.
- **P3** usa un Excel y le da pereza introducir gastos: de ahí sale el registro opcional y el Modo Pro como fase futura.

---

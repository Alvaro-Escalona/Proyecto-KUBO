# KUBO — Brief del proyecto

## 1. Problema

Las personas con ingresos ajustados que quieren ahorrar no saben cuánto pueden gastar cada semana sin poner en peligro su objetivo. Para comprobarlo, revisan la aplicación del banco y hacen cuentas mentales, o intentan llevar un Excel y terminan abandonándolo porque introducir todos los gastos resulta pesado.

La investigación lo confirma:

- **P1** revisa la aplicación del banco diariamente, pero reconoce que lleva las cuentas «de cabeza» y sin números exactos.
- **P2** dejó de llevar un control porque los gastos variables de sus gatos y del veterinario le desorganizaban el presupuesto. El mes anterior se quedó sin dinero antes de cobrar.
- **P3** mantiene un Excel cada dos días, pero dice que lo que más pereza le da es introducir los gastos. El día 27 solo le quedaban 40 €.

Además, el análisis de seis aplicaciones muestra dos fricciones repetidas: unas dependen de la conexión con el banco y otras exigen registrar o revisar demasiados movimientos. KUBO responde a la pregunta concreta: **«¿cuánto puedo gastar esta semana sin dejar de ahorrar?»**

## 2. Alcance del MVP

### Entra

- Crear una cuenta e iniciar sesión.
- Mostrar una bienvenida breve que explique KUBO.
- Pedir el nombre del usuario.
- Introducir ingresos mensuales.
- Introducir gastos fijos mensuales.
- Desglosar los gastos fijos de forma opcional para localizar cambios.
- Introducir el objetivo de ahorro mensual.
- Calcular y mostrar el número semanal.
- Registrar un gasto rápidamente, en dos toques.
- Crear kubos con fecha para apartar gastos previstos.
- Revisar un desvío y decidir si se descuenta del colchón, del gasto flexible o de un kubo.
- Editar la aportación del colchón en euros o porcentaje.
- Editar los tres datos del mes desde «Mi mes».
- Sincronizar los datos entre dispositivos.
- Cerrar sesión.

### Se queda fuera

- Modo Pro: tabla detallada, importación CSV y gráficas.
- Ajustes de la aplicación, como tema oscuro o colores personalizados.
- Ajustes avanzados del perfil de usuario.
- Compartir presupuesto con grupos.
- Ranking entre amigos.
- Conexión automática con el banco.
- Notificaciones push.

## 3. Personas

- **P1 — Persona primaria**: consulta el banco a diario y necesita saber en cinco segundos cuánto puede gastar esta semana.
- **P2 — Persona secundaria**: vive al día, evita mirar sus números y necesita gestionar imprevistos sin quedarse sin dinero.
- **P3 — Persona secundaria**: lleva un Excel y quiere reducir el esfuerzo de registrar y revisar sus gastos. Su parte de detalle queda fuera del MVP.

## 4. Criterios de éxito

Estos criterios se comprobarán mediante tareas con las personas durante las pruebas del prototipo:

- **P1** puede registrarse, introducir sus tres datos y ver cuánto puede gastar esta semana sin ayuda y en menos de cinco minutos.
- **P1** puede abrir la pantalla principal y decir cuánto le queda esta semana en menos de cinco segundos.
- **P2** puede consultar si puede permitirse una compra sin tener que hacer cálculos fuera de la aplicación.
- **P2** puede registrar un gasto en dos toques sin rellenar fecha, nota ni campos innecesarios.
- **P1 o P2** pueden resolver un desvío de 23 € desde Revisión y entender qué ocurre con la semana, el colchón y el ahorro antes de confirmar.
- **P1 o P2** pueden apartar un gasto con fecha, como un cumpleaños, sin que el ritmo semanal deje de mostrar una cifra coherente.
- **P3** puede editar los gastos fijos desde «Mi mes» y entender qué ha cambiado cuando la aplicación le muestra una diferencia.
- El usuario puede iniciar sesión en el móvil y en el ordenador y encontrar los mismos ingresos, gastos fijos, kubos y objetivo de ahorro.
- La persona con diversidad funcional que se incorpore podrá completar el recorrido principal con sus ajustes y tecnología de apoyo, sin que el contenido se salga de la pantalla ni desaparezcan los estados de foco.

## 5. Restricciones

### Técnicas

- El proyecto se construirá con React en el frontend, Node.js y Express en el backend, y MongoDB como base de datos.
- No se conectará automáticamente con bancos ni se almacenarán credenciales bancarias.
- El registro y la sincronización requieren cuenta de usuario, autenticación y persistencia de los datos.
- El diseño será móvil primero, aunque habrá una versión web adaptada.
- El Modo Pro no condiciona el MVP y no debe aumentar su alcance.

### De tiempo y equipo

- Si una funcionalidad no es necesaria para el recorrido principal de P1, se queda fuera.
- Las decisiones se validarán con pruebas de usuarios y no solo por preferencias del equipo.

### De las personas

- P1 utiliza un iPhone por la noche y necesita una consulta rápida.
- P2 consulta la aplicación justo antes de comprar y puede evitar mirar sus números si la interfaz resulta intimidante.
- P3 usa un portátil a mediodía y necesita que la interfaz no dependa de formularios largos.

### Ambiental

- La pantalla principal móvil no superará **500 KB** de recursos propios, sin contar la primera descarga de la aplicación.
- Se evitarán imágenes pesadas y animaciones innecesarias; los iconos se optimizarán y la interfaz priorizará texto y componentes ligeros.

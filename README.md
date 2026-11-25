Aplicación publicada: https://alvaro-escalona.github.io/Proyecto-KUBO/

# Proyecto-KUBO

KUBO es una aplicación móvil de ahorro que responde a una pregunta concreta:

> **¿Cuánto puedo gastar esta semana sin dejar de ahorrar?**

La persona introduce sus ingresos, sus gastos fijos y su objetivo de ahorro. KUBO calcula un límite semanal y permite registrar gastos rápidamente, sin conectarse al banco ni obligar a apuntarlo todo.

## Objetivo del proyecto

El proyecto pertenece al módulo de Interfaces de 2.º DAW. Se diseña a partir de una investigación con personas reales y busca resolver la falta de control sobre el gasto variable y los imprevistos.

## Entrega

| Documento | Qué contiene |
|---|---|
| [**ORBITA2.md**](ORBITA2.md) | Resumen de la entrega de la Órbita 2: enlaces, dónde está cada cosa en Figma, lista de comprobación, decisiones, uso de IA y pendientes |
| [CHANGELOG.md](CHANGELOG.md) | Registro de cada uso de IA |
| [Brief.md](Brief.md) | Enunciado del proyecto |

**Archivo de Figma:** https://www.figma.com/design/t62XaGPAkY53erL4yUVV4G/Interfaz-web-del-proyecto

---

# Desarrollo Web en Entorno Cliente

Código de esta asignatura: https://github.com/Alvaro-Escalona/Proyecto-KUBO/tree/main/entorno-cliente

## Hito 1

### Backlog

Lista de funcionalidades de la aplicación:

| # | Funcionalidad | Qué permite | Estado |
|---|---|---|---|
| 1 | Cuenta | Poder crear una cuenta y entrar con el login | **Hito 2**: crear cuenta (falta el login) |
| 2 | Preguntas iniciales | Explicar cómo funciona KUBO y preguntar los ingresos, los gastos fijos y el objetivo de ahorro para sacar el límite semanal | Pendiente |
| 3 | Listado de kubos | Ver todos los kubos con su presupuesto, lo gastado y lo que queda, tanto en la portada como en la página de Kubos | **Hito 1** |
| 4 | Alta de un gasto | Apuntar un gasto y elegir a qué kubo va | Pendiente |
| 5 | Detalle del kubo | La ficha de un kubo con todos sus gastos | **Hito 1** |
| 6 | Alta de un kubo | Crear un kubo nuevo con su presupuesto semanal | Pendiente |
| 7 | Apartar dinero con fecha | Reservar un dinero para algo concreto  hasta una fecha, eligiendo de dónde sale | Pendiente |
| 8 | Mi mes: editar los importes | Cambiar lo que gano al mes, el gasto fijo aproximado y el objetivo de ahorro | Pendiente |
| 9 | Desglose de ingresos y gastos fijos | Apuntar cada ingreso y cada gasto fijo por separado (nómina, extras, alquiler, luz…) y que el total sea la suma de todo | Pendiente |
| 10 | Editar un registro | Corregir el concepto, el importe o el kubo de un gasto que ya apunté | Pendiente |
| 11 | Borrar un registro | Quitar un gasto que ya no toca | Pendiente |
| 12 | Revisión | Comparar lo que pensaba gastar con lo que gasté de verdad, tanto en los kubos (me pasé o me sobró) como en los gastos fijos, y decidir qué hago con la diferencia | Pendiente |

### Mapa de pantallas

Las pantallas que tiene la app y lo que sale en cada una:

| Pantalla | Archivo | Qué muestra | Datos que usa |
|---|---|---|---|
| **Inicio** | `index.html` | Lo que me queda esta semana y en qué semana voy, la caja de «Tus kubos» (con scroll y un «Ver todo»), el ahorro del colchón, el ahorro del mes con su porcentaje y un botón para apuntar un gasto rápido | Lo disponible de la semana y la semana actual; de cada kubo el nombre, el presupuesto, lo gastado y lo que queda; el colchón; el ahorro del mes con su objetivo y el porcentaje |
| **Kubos** | `kubos.html` | Lo que me queda en total este mes, los kubos con un botón de «Nuevo Kubo» y los kubos con fecha con su importe y su día, con su botón de «Apartar Kubo» | Lo disponible y lo gastado del mes; de cada kubo el nombre, el presupuesto, lo gastado y lo que queda; de cada kubo con fecha el nombre, el importe y la fecha |
| **Detalle del kubo** | `kubo.html?id=…` | La ficha de un kubo con todos sus gastos. Es la misma página para todos los kubos, solo cambia lo de dentro según el kubo que pulses (le pasas el id por la URL), y si no tiene gastos sale un aviso de que está vacío | Del kubo: nombre, presupuesto, gastado y disponible. De sus gastos: concepto, importe y fecha |
| **Registro** | `registro.html` | Para apuntar un gasto rápido: eliges a qué kubo va, metes el importe con un teclado numérico y el concepto (si quieres) y le das a guardar | El kubo elegido y lo que le queda libre, el importe y el concepto |
| **Revisión** | `revision.html` | Comparar lo que pensaba gastar con lo que gasté de verdad: me dice si me pasé o me sobró y de dónde quitar o meter la diferencia, y me da un consejo para el mes siguiente | Lo previsto y lo real de cada kubo y de los gastos fijos, la diferencia y las opciones para ajustarla |
| **Mi mes** | `mi-mes.html` | Los datos del mes: lo que me entró, los gastos fijos, el objetivo de ahorro y el colchón; también el ritmo semanal (lo que me toca gastar cada semana) y los kubos con fecha | Ingresos, gastos fijos, objetivo de ahorro, colchón, ritmo semanal y los kubos con fecha |

El menú está abajo del todo, es una barra fija con iconos y tiene Inicio, Kubos, Registro, Revisión y Mi mes. Sale en todas las páginas y la sección en la que estás se marca con `aria-current="page"`. En Kubos, en el detalle, en Revisión y en Mi mes el botón de Registro va dentro de un cuadrado amarillo que sobresale un poco por encima de la barra (en Inicio y en el propio Registro no sale). El avatar de la cabecera (arriba a la izquierda) lleva a la página de Registrarse, tu cuenta.

## Hito 2

Formularios con validación y persistencia en `localStorage` (sin `import`/`export` ni librerías, con variables globales y `<script src>` en orden).

### Qué hay nuevo

| Pantalla | Archivo | Qué hace |
|---|---|---|
| **Registrarse** | `registrarse.html` | Alta, edición y borrado de cuentas con su listado «Usuarios registrados». Se accede desde el avatar de la cabecera |
| **Contacto** | `contacto.html` | Formulario de contacto con «Mensajes enviados» y recordatorio del último nombre y correo. Se accede desde Registrarse |

| Fichero | Responsabilidad |
|---|---|
| `js/almacen.js` | CRUD genérico sobre `localStorage` (prefijo `kubo:`): `obtenerTodos`, `obtenerPorId`, `crear`, `actualizar`, `borrar` |
| `js/validacion.js` | Funciones puras que devuelven un mensaje de error o `null` |
| `js/usuarios.js` | Lógica del registro de cuentas (colección `kubo:usuarios`) |
| `js/contacto.js` | Lógica del contacto (colección `kubo:mensajes` y recordatorio `kubo:ultimo-envio`) |

### Mapa de validación

| Campo | Función | Reglas |
|---|---|---|
| Nombre | `validarNombre` | Obligatorio · 2–40 caracteres · solo letras |
| Nombre de usuario | `validarUsuario` | Obligatorio · 3–20 · letras/números/`.` `_` `-` · único |
| Correo electrónico | `validarEmail` | Obligatorio · formato válido · único |
| Fecha de nacimiento | `validarFechaNacimiento` | Obligatoria · no futura · mínimo 18 años |
| Contraseña | `validarPassword` | Mínimo 8 · una mayúscula · un número |
| Repetir contraseña | `validarRepetirPassword` | Igual que la contraseña |
| Condiciones | `validarCondiciones` | Casilla marcada |
| Teléfono | `validarTelefono` | Opcional · 9 dígitos o `+34` · obligatorio si pide «que me llaméis» |
| Motivo | `validarMotivo` | Obligatorio |
| Mensaje | `validarMensaje` | 10–500 caracteres |
| — | `calcularEdad` | Edad que sale en el listado de cuentas |

### Cómo se cumple el enunciado

- Los formularios llevan `novalidate` y la validación se dispara en `blur` e `input`.
- Cada campo con error usa `aria-invalid="true"` y un mensaje enlazado con `aria-describedby` (`aria-live="polite"`).
- Al enviar, el foco salta al primer campo con error.
- El borrado pide confirmación con `confirm()`.
- Los botones de editar y borrar se resuelven por **delegación de eventos** (un solo `addEventListener` por lista), sin `onclick` en el HTML.
- Conversión de tipos: el `id` se guarda como número y las casillas como booleano.
- Todo persiste tras recargar la página (F5).
- La contraseña no se guarda: solo se comprueba que sea segura.
- El recordatorio de nombre y correo del último envío se guarda en `localStorage` (`kubo:ultimo-envio`), no en cookies.

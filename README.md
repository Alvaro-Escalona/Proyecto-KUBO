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

| # | Funcionalidad | Qué permite |
|---|---|---|
| 1 | Cuenta | Poder crear una cuenta y entrar con el login |
| 2 | Preguntas iniciales | Explicar cómo funciona KUBO y preguntar los ingresos, los gastos fijos y el objetivo de ahorro para sacar el límite semanal |
| 3 | Listado de kubos | Ver todos los kubos con su presupuesto, lo gastado y lo que queda, tanto en la portada como en la página de Kubos |
| 4 | Alta de un gasto | Apuntar un gasto y elegir a qué kubo va |
| 5 | Detalle del kubo | La ficha de un kubo con todos sus gastos |
| 6 | Alta de un kubo | Crear un kubo nuevo con su presupuesto semanal |
| 7 | Apartar dinero con fecha | Reservar un dinero para algo concreto  hasta una fecha, eligiendo de dónde sale |
| 8 | Mi mes: editar los importes | Cambiar lo que gano al mes, el gasto fijo aproximado y el objetivo de ahorro |
| 9 | Desglose de ingresos y gastos fijos | Apuntar cada ingreso y cada gasto fijo por separado (nómina, extras, alquiler, luz…) y que el total sea la suma de todo |
| 10 | Editar un registro | Corregir el concepto, el importe o el kubo de un gasto que ya apunté |
| 11 | Borrar un registro | Quitar un gasto que ya no toca |
| 12 | Revisión | Comparar lo que pensaba gastar con lo que gasté de verdad, tanto en los kubos (me pasé o me sobró) como en los gastos fijos, y decidir qué hago con la diferencia |

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

El menú está abajo del todo, es una barra fija con iconos y tiene Inicio, Kubos, Registro, Revisión y Mi mes. Sale en todas las páginas y la sección en la que estás se marca con `aria-current="page"`. En Kubos, en el detalle, en Revisión y en Mi mes el botón de Registro va dentro de un cuadrado amarillo que sobresale un poco por encima de la barra (en Inicio y en el propio Registro no sale).

# Órbita 2: sistema visual de KUBO

Resumen de la entrega de la Órbita 2. La corrección empieza por aquí: dónde está cada cosa en Figma, qué se ha decidido y por qué, y qué ha quedado pendiente.

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | https://www.figma.com/design/t62XaGPAkY53erL4yUVV4G/Interfaz-web-del-proyecto |
| Prototipo (empieza por `figma.com/proto/`) | https://www.figma.com/proto/t62XaGPAkY53erL4yUVV4G/Interfaz-web-del-proyecto?node-id=347-1275&viewport=3313%2C1856%2C0.65&t=n6M9HuC3rScHQinB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=347%3A1275&show-proto-sidebar=1&page-id=347%3A274 |
| Proyecto de Google Stitch | No se ha usado |

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | Página *Wireframes* → sección `Section 2`: tablas **Tipografía**, **Color** y **Espaciado, forma y tamaño** (columnas *Elemento · Decisión/función · Token propuesto*) |
| Wireframes rediseñados con sus notas | **Pendiente**. En *Wireframes* están los de la Órbita 1 sin modificar: secciones `Aplicación` e `Inicio de sesion movil` |
| Variables | Colecciones `Primitivos` (196 variables, sin modos) y `Semánticos` (20 variables, modos **Claro/Oscuro**) |
| Estilos | 7 estilos de texto `KUBO / …` (panel *Estilos de texto*). **Faltan** los estilos de efecto y de retícula |
| Componentes | Página *Componentes*: secciones `Atomos`, `Moleculas` y `Organismos`, cada una con sus tarjetas rotuladas |
| Mockups del happy path | Página *Mockups* — **parcial**: hay copias de la pantalla `Principal` con el color aplicado; falta el happy path con Auto layout |
| Pantalla principal en el segundo ancho | **Pendiente** |
| Pantallas en modo oscuro | **Pendiente** (los modos Claro/Oscuro ya están creados en `Semánticos`) |
| Guía de estilo | Página *Guía de estilo*: color, prueba en escala de grises, tipografía y mapa de tokens |

## Lista de comprobación de Figma

- [ ] Variables en dos colecciones, con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
  *Parcial*: dos colecciones ✓, alias ✓, modos ✓, pero solo 17/20 con descripción y 13/20 con sintaxis de código en `Semánticos`.
- [ ] Estilos de texto, efecto y retícula vinculados a las variables.
  *Parcial*: 7 estilos de texto ✓; **0 estilos de efecto y 0 de retícula**.
- [ ] Componentes con Auto layout, variables, propiedades y variantes de estado.
  *Parcial*: Auto layout, variables y variantes de estado ✓; faltan las propiedades de texto/icono (mostrar-ocultar, cambiar icono).
- [ ] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [ ] Pantalla principal en un segundo ancho, con los mismos componentes.
- [ ] Modo oscuro aplicado con el selector de modo.
- [ ] Prototipo que recorre el happy path completo.
- [ ] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [ ] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes

Todavía no se ha rediseñado ninguna pantalla. Lo hecho es el **inventario real**: las 19 pantallas móviles y las 10 de login medidas nodo a nodo (tamaños, radios, fuentes y contenidos), recogido en `Gestor de dinero/KUBO/figma.md`. Es la base sobre la que se hace el rediseño, porque así cada cambio se apoya en una medida concreta y no en una estimación.

### Color

**Primario = navy, secundario = gold.** El ancla es `navy/800 #0F1B4D` y `navy/900 #071027`; el acento es `gold/500 #F2B325`. Se eligió navy porque KUBO habla de dinero sin culpabilizar: da seriedad y calma, y no compite con el oro, que se reserva para lo que es ahorro o cifra destacada. Nueve escalas de 18 tonos (`navy`, `gold`, `gray`, `success`, `success-bg`, `error`, `error-bg`, `warning`, `warning-bg`) y 20 roles semánticos.

Pareja de texto y fondo con el contraste más bajo del sistema:

| Modo | Pareja | Valor |
|---|---|---|
| Claro | `color/on-warning` `#FD9617` sobre `color/warning` `#9A5F23` | **2,37 : 1** |
| Oscuro | `color/on-surface-variant` `#E2E7F7` sobre `color/surface` `#FFFFFF` | **1,23 : 1** ← fallo corregible |

La de modo oscuro es un fallo conocido: la superficie se queda blanca y el texto secundario se vuelve claro. Está anotado en pendientes.

### Tipografía

**Abhaya Libre** (400 y 700) para la interfaz y **Young Serif** (400) para las cifras. Abhaya se eligió por sus personas: da calidez y se lee bien en pantalla pequeña, que es donde Elisa mira el contador; Young Serif se reserva para el número, que tiene que leerse «de un vistazo» en cinco segundos, el criterio del producto. Escala: `meta` 10 · `label` 12 · `body-sm` 14 · `body` 16 · `title-2` 20 · `title-1` 28 · `number` 32 · `number-lg` 96, cada uno con su `font/line` y `font/weight`. Hay 7 estilos de texto `KUBO /`.

### Espaciado y retícula

Escala de espacio en **base 4** (`space/1`…`space/16` = 4 a 64 px), radios `none/sm/md/lg/full` (0/4/8/16/9999) y radio de tarjeta 28. Casi todas las medidas del wireframe ya vienen en múltiplos de 4 (379 → se mantiene, 90 px de cifra → 96, radio 29 → 28). **Pendiente**: las columnas, el medianil y el margen de la retícula del dispositivo (412 px).

### Componentes

Todos en la página *Componentes*, con Auto layout, variables y variantes de estado:

- **Átomos** — `Ítem de navegación` ×5 (`Icono=Contorno|Relleno`), `Icono · categoría` (`Categoría=Comida|Cine|Transporte`), `Barra de progreso` (`Avance=0…100 %`), `Mensaje de ritmo semanal` (éxito/aviso/error, con sus tres variables).
- **Moléculas** — `Barra de navegación` (`Página activa=Inicio|Kubos|Registro|Revisión|Mi mes`), `Etiqueta de kubo`, `Cabecera de tarjeta`, `Tarjeta de Kubo` (± importe y contenedor), `Tarjeta de número semanal`, `Botón de colchón y ahorro` (`Tipo=Colchón|Ahorro`).
- **Organismos** — `Lista de Kubos`, `Rejilla de Kubos`.

### Responsive y modo oscuro

**Pendiente**: no se ha pasado ninguna pantalla al segundo ancho ni se han aplicado los mockups en modo oscuro. Lo que sí está hecho es la base para hacerlo sin duplicar nada: los dos modos viven en la colección `Semánticos`, con alias hacia `Primitivos`, así que cambiar el selector de modo actualiza todo lo que esté atado a variables.

## Uso de IA

He usado una herramienta de IA con navegador (OpenCode) durante toda la órbita: para leer el brief, extraer las medidas del wireframe nodo a nodo directamente del archivo de Figma, crear y verificar variables y estilos, construir y reorganizar los componentes por niveles de Atomic Design y calcular los contrastes con valores reales en lugar de estimarlos. El detalle de cada uso queda en el [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente

1. **Rediseño de los wireframes** con la nota de qué cambia y por qué, y el inventario de decisiones en su página.
2. **Mockups del happy path** con Auto layout y espacios de variables, **prototipo** enlazado, **segundo ancho** y **modo oscuro** en pantalla principal y otra más.
3. **Guía de estilo completa**: secciones de componentes, decisiones que afectan al peso, tabla de contraste en los dos modos y correspondencia niveles tipográficos ↔ etiquetas HTML.
4. **Estilos de efecto** (elevación) y **de retícula**, y vincularlos a variables.
5. **Descripciones y sintaxis de código** en las variables que faltan (17/20 y 13/20 en `Semánticos`).
6. **Corregir el contraste en modo oscuro** de `on-surface-variant` sobre `surface` (1,23 : 1).
7. **Elegir una sola librería de iconos**: el wireframe mezcla noto, streamline, emojione, iconamoon, fluent, akar, mingcute y bitcoin-icons.
8. **CHANGELOG.md**: registrar cada uso de IA de la órbita. Está congelado por decisión y hay que abrirlo antes de entregar.
9. **Guardar la versión «Entrega Órbita 2»** en el historial de versiones de Figma y añadir aquí el enlace del prototipo.

/* exported limpiarHTML, crearTarjetaKubo, crearTarjetaFecha, crearRegistro */

// pasar un número a euros
function formatearEuros(numero) {
    return `${numero.toLocaleString('es-ES', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    })} €`;
}

// pasar una fecha a "16 nov"
function formatearFecha(fechaISO) {
    const fecha = new Date(`${fechaISO}T00:00:00`);
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('es-ES', { month: 'short' });
    return `${dia} ${mes}`;
}

// sumar lo gastado de un kubo
function gastadoDelKubo(kuboId, registros) {
    let total = 0;
    registros.forEach(registro => {
        if (registro.kuboId === kuboId) {
            total += registro.importe;
        }
    });
    return total;
}

// sacar el número de semana del mes (noviembre: la 1 es del 2 al 8)
function numeroSemana(fechaISO) {
    const dia = new Date(`${fechaISO}T00:00:00`).getDate();
    return Math.ceil((dia - 1) / 7);
}

// sumar lo gastado de un kubo en una semana concreta
function gastadoDeLaSemana(kuboId, registros, semana) {
    let total = 0;
    registros.forEach(registro => {
        if (registro.kuboId === kuboId && numeroSemana(registro.fecha) === semana) {
            total += registro.importe;
        }
    });
    return total;
}

// vaciar un contenedor
function limpiarHTML(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

// crear la tarjeta de un kubo
function crearTarjetaKubo(kubo, registros, enlace, semanal) {
    let gastado;
    let tope;
    if (semanal) {
        gastado = gastadoDeLaSemana(kubo.id, registros, resumen.semana.actual);
        tope = kubo.presupuesto / resumen.semana.total;
    } else {
        gastado = gastadoDelKubo(kubo.id, registros);
        tope = kubo.presupuesto;
    }

    const porcentaje = Math.min(100, (gastado / tope) * 100);

    const tarjeta = document.createElement(enlace ? 'a' : 'article');
    tarjeta.className = 'kubo';
    if (enlace) {
        tarjeta.href = `kubo.html?id=${kubo.id}`;
    }

    const fila = document.createElement('div');
    fila.className = 'kubo__fila';

    const icono = document.createElement('span');
    icono.className = 'kubo__icono';
    icono.textContent = kubo.icono;

    const texto = document.createElement('div');
    texto.className = 'kubo__texto';

    const nombre = document.createElement('h3');
    nombre.className = 'kubo__nombre';
    nombre.textContent = kubo.nombre;

    texto.appendChild(nombre);

    const importe = document.createElement('p');
    importe.className = 'kubo__importe';

    const cantidad = document.createElement('span');
    cantidad.className = 'kubo__cantidad';
    cantidad.textContent = formatearEuros(gastado);

    const objetivo = document.createElement('span');
    objetivo.className = 'kubo__objetivo';
    objetivo.textContent = `de ${formatearEuros(tope)}`;

    importe.appendChild(cantidad);
    importe.appendChild(document.createTextNode(' '));
    importe.appendChild(objetivo);

    fila.appendChild(icono);
    fila.appendChild(texto);
    fila.appendChild(importe);

    const barra = document.createElement('div');
    barra.className = 'barra';

    const relleno = document.createElement('span');
    relleno.className = 'barra__relleno';
    relleno.style.width = `${porcentaje}%`;

    barra.appendChild(relleno);

    tarjeta.appendChild(fila);
    tarjeta.appendChild(barra);

    return tarjeta;
}

// crear la tarjeta de un kubo con fecha
function crearTarjetaFecha(kuboFecha) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'kubo';

    const fila = document.createElement('div');
    fila.className = 'kubo__fila';

    const icono = document.createElement('span');
    icono.className = 'kubo__icono';
    icono.textContent = kuboFecha.icono;

    const texto = document.createElement('div');
    texto.className = 'kubo__texto';

    const nombre = document.createElement('h3');
    nombre.className = 'kubo__nombre';
    nombre.textContent = `${kuboFecha.nombre} · ${formatearEuros(kuboFecha.importe)}`;

    texto.appendChild(nombre);

    const dia = document.createElement('span');
    dia.className = 'kubo__dia';
    dia.textContent = `día ${kuboFecha.dia}`;

    fila.appendChild(icono);
    fila.appendChild(texto);
    fila.appendChild(dia);

    tarjeta.appendChild(fila);

    return tarjeta;
}

// crear una fila de gasto del detalle
function crearRegistro(registro) {
    const fila = document.createElement('li');
    fila.className = 'registro';

    const texto = document.createElement('div');
    texto.className = 'registro__texto';

    const concepto = document.createElement('p');
    concepto.className = 'registro__concepto';
    concepto.textContent = registro.concepto;

    const fecha = document.createElement('p');
    fecha.className = 'registro__fecha';
    fecha.textContent = formatearFecha(registro.fecha);

    texto.appendChild(concepto);
    texto.appendChild(fecha);

    const importe = document.createElement('p');
    importe.className = 'registro__importe';
    importe.textContent = `-${formatearEuros(registro.importe)}`;

    fila.appendChild(texto);
    fila.appendChild(importe);

    return fila;
}

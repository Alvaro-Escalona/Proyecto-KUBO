// pintar la portada
function pintarPortada() {
    document.querySelector('#resumen-cantidad').textContent = formatearEuros(resumen.disponibleSemana);
    document.querySelector('#resumen-detalle').textContent = `del ${resumen.semana.desde} al ${resumen.semana.hasta}`;

    // la píldora verde: si llevas buen ritmo o no
    const ritmo = document.querySelector('#resumen-ritmo');
    if (resumen.buenRitmo) {
        ritmo.textContent = 'Buen ritmo semanal';
    } else {
        ritmo.textContent = 'Mal ritmo semanal';
        ritmo.classList.add('resumen__ritmo--malo');
    }

    const porcentaje = Math.round((resumen.ahorroMesActual / resumen.objetivoAhorro) * 100);

    document.querySelector('#ahorro-colchon').textContent = formatearEuros(resumen.colchon);
    document.querySelector('#ahorro-mes').textContent = formatearEuros(resumen.ahorroMesActual);
    document.querySelector('#ahorro-mes-meta').textContent = `de ${formatearEuros(resumen.objetivoAhorro)} · ${porcentaje}%`;

    const caja = document.querySelector('#kubos-portada');
    limpiarHTML(caja);
    kubos.forEach(kubo => {
        caja.appendChild(crearTarjetaKubo(kubo, registros, true, true));
    });
}

// pintar la página de kubos
function pintarKubos() {
    let presupuestoTotal = 0;
    kubos.forEach(kubo => {
        presupuestoTotal += kubo.presupuesto;
    });

    let gastadoTotal = 0;
    registros.forEach(registro => {
        gastadoTotal += registro.importe;
    });

    const disponibleTotal = presupuestoTotal - gastadoTotal;

    document.querySelector('#total-mes').textContent = formatearEuros(disponibleTotal);
    document.querySelector('#gastado-mes').textContent =
        `de ${formatearEuros(presupuestoTotal)} · ${formatearEuros(gastadoTotal)} gastados este mes`;

    const lista = document.querySelector('#lista-kubos');
    limpiarHTML(lista);
    kubos.forEach(kubo => {
        lista.appendChild(crearTarjetaKubo(kubo, registros, true));
    });

    const listaFecha = document.querySelector('#lista-fecha');
    limpiarHTML(listaFecha);
    kubosConFecha.forEach(kuboFecha => {
        listaFecha.appendChild(crearTarjetaFecha(kuboFecha));
    });
}

// pintar el detalle de un kubo
function pintarDetalle() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get('id');

    let kubo = null;
    kubos.forEach(k => {
        if (k.id === id) {
            kubo = k;
        }
    });

    const dato = document.querySelector('#cabecera-dato');
    const contenedor = document.querySelector('#detalle-kubo');

    if (!kubo) {
        dato.remove();
        const aviso = document.createElement('p');
        aviso.className = 'aviso';
        aviso.textContent = 'No he encontrado ese kubo.';
        contenedor.appendChild(aviso);
        return;
    }

    dato.textContent = kubo.nombre;

    limpiarHTML(contenedor);

    contenedor.appendChild(crearTarjetaKubo(kubo, registros, false));

    // guardamos los gastos del kubo agrupados por semana
    const porSemana = {};
    registros.forEach(registro => {
        if (registro.kuboId === kubo.id) {
            const semana = numeroSemana(registro.fecha);
            if (!porSemana[semana]) {
                porSemana[semana] = [];
            }
            porSemana[semana].push(registro);
        }
    });

    // de la semana más nueva a la más vieja
    const semanas = Object.keys(porSemana).sort((a, b) => b - a);

    semanas.forEach(semana => {
        // cabecera de la semana con su total
        const grupo = document.createElement('div');
        grupo.className = 'grupo__cabecera';

        const titulo = document.createElement('p');
        titulo.className = 'grupo__titulo';
        titulo.textContent = `Semana ${semana} · ${rangoSemana(semana)}`;

        let total = 0;
        porSemana[semana].forEach(registro => {
            total += registro.importe;
        });

        const importe = document.createElement('p');
        importe.className = 'grupo__total';
        importe.textContent = formatearEuros(total);

        grupo.appendChild(titulo);
        grupo.appendChild(importe);
        contenedor.appendChild(grupo);

        // gastos de esa semana
        const lista = document.createElement('ul');
        lista.className = 'registros';
        porSemana[semana].forEach(registro => {
            lista.appendChild(crearRegistro(registro));
        });
        contenedor.appendChild(lista);
    });
}

// el rango de días de una semana: "del 9 al 15 nov"
function rangoSemana(semana) {
    const num = Number(semana);
    const primero = 2 + (num - 1) * 7;
    return `del ${primero} al ${primero + 6} nov`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#kubos-portada')) {
        pintarPortada();
    } else if (document.querySelector('#lista-kubos')) {
        pintarKubos();
    } else if (document.querySelector('#detalle-kubo')) {
        pintarDetalle();
    }
});

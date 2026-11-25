/* exported iniciarContacto */

// colección de localStorage donde viven los mensajes
const COLECCION_MENSAJES = 'mensajes';

// clave de localStorage donde se guarda el último envío (el "recuérdame")
const CLAVE_RECORDATORIO = 'kubo:ultimo-envio';

// campos del formulario que se validan
const CAMPOS_CONTACTO = ['nombre', 'email', 'telefono', 'motivo', 'mensaje'];

// devuelve el campo del formulario por su id
function campoContacto(id) {
    return document.querySelector(`#${id}`);
}

// devuelve la caja de error asociada a un campo
function cajaErrorContacto(id) {
    return document.querySelector(`#error-${id}`);
}

// pintar el error de un campo
function marcarErrorContacto(campo, mensaje) {
    campo.setAttribute('aria-invalid', 'true');
    cajaErrorContacto(campo.id).textContent = mensaje;
}

// quitar el error de un campo
function quitarErrorContacto(campo) {
    campo.removeAttribute('aria-invalid');
    cajaErrorContacto(campo.id).textContent = '';
}

// mensaje de error de un campo, o null si está bien
function motivoErrorContacto(campo) {
    const valor = campo.value;

    if (campo.id === 'nombre') {
        return validarNombre(valor, campo.minLength, campo.maxLength);
    }

    if (campo.id === 'email') {
        return validarEmail(valor);
    }

    if (campo.id === 'telefono') {
        // si pide que le llamemos, el teléfono pasa a ser obligatorio
        return validarTelefono(valor, campoContacto('llamada').checked);
    }

    if (campo.id === 'motivo') {
        return validarMotivo(valor);
    }

    if (campo.id === 'mensaje') {
        return validarMensaje(valor, campo.minLength, campo.maxLength);
    }

    return null;
}

// valida todos los campos y devuelve el primero con error
function validarFormularioContacto() {
    let primero = null;

    CAMPOS_CONTACTO.forEach(id => {
        const campo = campoContacto(id);
        const mensaje = motivoErrorContacto(campo);

        if (mensaje) {
            marcarErrorContacto(campo, mensaje);
            if (primero === null) {
                primero = campo;
            }
        } else {
            quitarErrorContacto(campo);
        }
    });

    return primero;
}

// valores del formulario ya limpios y convertidos
function datosFormularioContacto() {
    const motivo = campoContacto('motivo');

    return {
        nombre: campoContacto('nombre').value.trim(),
        email: campoContacto('email').value.trim().toLowerCase(),
        telefono: campoContacto('telefono').value.trim(),
        llamada: campoContacto('llamada').checked,
        motivo: motivo.options[motivo.selectedIndex].text,
        mensaje: campoContacto('mensaje').value.trim(),
        fecha: new Date().toISOString()
    };
}

// mensaje de estado debajo del formulario
function anunciarContacto(mensaje) {
    const aviso = document.querySelector('#estado-mensajes');
    aviso.textContent = mensaje;
    aviso.hidden = false;
}

// contador de caracteres del mensaje (lee el máximo del maxlength del HTML)
function actualizarContadorMensaje() {
    const campo = campoContacto('mensaje');
    const contador = document.querySelector('#contador-mensaje');

    contador.textContent = `${campo.value.length} / ${campo.maxLength}`;
}

// ----------------------------------------------------------------
// RECUÉRDAME (el "último envío" del enunciado, hecho con localStorage)
// Guardamos el nombre y el correo del último envío para que, al
// volver a abrir el formulario, se rellenen solos (como cuando una
// web te recuerda tu correo). localStorage solo guarda texto, por
// eso convertimos con JSON.stringify / JSON.parse.
// ----------------------------------------------------------------

// leer el recuerdo del último envío
function leerRecordatorio() {
    try {
        const texto = localStorage.getItem(CLAVE_RECORDATORIO);
        return texto ? JSON.parse(texto) : null;
    } catch (error) {
        console.error('No se pudo leer el recordatorio.', error);
        return null;
    }
}

// guardar el nombre y el correo del último envío
function guardarRecordatorio(nombre, email) {
    try {
        localStorage.setItem(CLAVE_RECORDATORIO, JSON.stringify({ nombre: nombre, email: email }));
    } catch (error) {
        console.error('No se pudo guardar el recordatorio.', error);
    }
}

// rellenar el formulario con lo que recordamos del último envío
function recordarUltimoEnvio() {
    const ultimo = leerRecordatorio();
    if (!ultimo) {
        return;
    }

    // solo rellenamos si el campo está vacío (no pisamos lo que escriba)
    if (campoContacto('nombre').value === '' && ultimo.nombre) {
        campoContacto('nombre').value = ultimo.nombre;
    }
    if (campoContacto('email').value === '' && ultimo.email) {
        campoContacto('email').value = ultimo.email;
    }

    document.querySelector('#recordatorio-nombre').textContent = ultimo.nombre || 'de nuevo';
    document.querySelector('#recordatorio').hidden = false;
}

// olvidar los datos guardados del último envío
function olvidarRecordatorio() {
    try {
        localStorage.removeItem(CLAVE_RECORDATORIO);
    } catch (error) {
        console.error('No se pudo borrar el recordatorio.', error);
    }

    document.querySelector('#recordatorio').hidden = true;
    campoContacto('nombre').value = '';
    campoContacto('email').value = '';
    quitarErrorContacto(campoContacto('nombre'));
    quitarErrorContacto(campoContacto('email'));
    anunciarContacto('Hemos borrado tus datos guardados.');
    campoContacto('nombre').focus();
}

// una fecha ISO en formato corto: 25 nov 2026, 18:30
function formatearFechaMensaje(fechaISO) {
    const fecha = new Date(fechaISO);
    if (Number.isNaN(fecha.getTime())) {
        return '';
    }
    return fecha.toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
}

// una tarjeta de la lista de mensajes
function crearTarjetaMensaje(mensaje) {
    const tarjeta = document.createElement('li');
    tarjeta.className = 'tarjeta-dato';

    const cabecera = document.createElement('div');
    cabecera.className = 'tarjeta-dato__cabecera';

    const titulo = document.createElement('p');
    titulo.className = 'tarjeta-dato__titulo';
    titulo.textContent = mensaje.motivo;

    const fecha = document.createElement('p');
    fecha.className = 'tarjeta-dato__fecha';
    fecha.textContent = formatearFechaMensaje(mensaje.fecha);

    cabecera.appendChild(titulo);
    cabecera.appendChild(fecha);

    const contacto = document.createElement('p');
    contacto.className = 'tarjeta-dato__texto';
    contacto.textContent = `${mensaje.nombre} · ${mensaje.email}`;

    tarjeta.appendChild(cabecera);
    tarjeta.appendChild(contacto);

    if (mensaje.telefono) {
        const telefono = document.createElement('p');
        telefono.className = 'tarjeta-dato__texto';
        telefono.textContent = mensaje.llamada
            ? `Teléfono: ${mensaje.telefono} (prefiere que le llamemos)`
            : `Teléfono: ${mensaje.telefono}`;
        tarjeta.appendChild(telefono);
    }

    const texto = document.createElement('p');
    texto.className = 'tarjeta-dato__texto';
    texto.textContent = mensaje.mensaje;

    const acciones = document.createElement('div');
    acciones.className = 'acciones';

    const eliminar = document.createElement('button');
    eliminar.className = 'boton boton--peligro boton--formulario';
    eliminar.type = 'button';
    eliminar.textContent = 'Borrar';
    eliminar.dataset.accion = 'borrar';
    eliminar.dataset.id = mensaje.id;

    acciones.appendChild(eliminar);

    tarjeta.appendChild(texto);
    tarjeta.appendChild(acciones);

    return tarjeta;
}

// pintar la lista completa de mensajes, del más nuevo al más viejo
function pintarMensajes() {
    const lista = document.querySelector('#lista-mensajes');
    lista.textContent = '';

    const mensajes = obtenerTodos(COLECCION_MENSAJES);
    mensajes.sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)));

    mensajes.forEach(mensaje => {
        lista.appendChild(crearTarjetaMensaje(mensaje));
    });

    document.querySelector('#sin-mensajes').hidden = mensajes.length > 0;
    document.querySelector('#contador-mensajes').textContent =
        mensajes.length === 1 ? '1 mensaje' : `${mensajes.length} mensajes`;
}

// borrar un mensaje, preguntando antes
function borrarMensaje(id) {
    const mensaje = obtenerPorId(COLECCION_MENSAJES, id);
    if (!mensaje) {
        return;
    }

    if (!confirm(`¿Borrar el mensaje "${mensaje.motivo}"?`)) {
        return;
    }

    borrar(COLECCION_MENSAJES, id);
    pintarMensajes();
    anunciarContacto('Mensaje borrado.');
}

// un solo listener para los botones de la lista
function accionListaMensajes(evento) {
    const boton = evento.target.closest('[data-accion]');
    if (!boton) {
        return;
    }

    if (boton.dataset.accion === 'borrar') {
        borrarMensaje(boton.dataset.id);
    }
}

// guardar el mensaje del formulario
function enviarFormularioContacto(evento) {
    evento.preventDefault();

    const primeroConError = validarFormularioContacto();
    if (primeroConError) {
        primeroConError.focus();
        return;
    }

    const datos = datosFormularioContacto();
    crear(COLECCION_MENSAJES, datos);
    guardarRecordatorio(datos.nombre, datos.email);

    // vaciamos el formulario entero (la próxima vez lo rellena el localStorage)
    campoContacto('nombre').value = '';
    campoContacto('email').value = '';
    campoContacto('telefono').value = '';
    campoContacto('llamada').checked = false;
    campoContacto('motivo').value = '';
    campoContacto('mensaje').value = '';
    CAMPOS_CONTACTO.forEach(id => quitarErrorContacto(campoContacto(id)));
    actualizarContadorMensaje();

    pintarMensajes();
    anunciarContacto(`Mensaje enviado. Te responderemos a ${datos.email}.`);
}

// comprobar un campo al salir de él y corregir el error al escribir
function vigilarCampoContacto(campo) {
    campo.addEventListener('blur', () => {
        const mensaje = motivoErrorContacto(campo);
        if (mensaje) {
            marcarErrorContacto(campo, mensaje);
        } else {
            quitarErrorContacto(campo);
        }
    });

    campo.addEventListener('input', () => {
        if (campo.getAttribute('aria-invalid') === 'true' && !motivoErrorContacto(campo)) {
            quitarErrorContacto(campo);
        }
    });
}

// arranque de la página
function iniciarContacto() {
    CAMPOS_CONTACTO.forEach(id => vigilarCampoContacto(campoContacto(id)));

    campoContacto('mensaje').addEventListener('input', actualizarContadorMensaje);

    // al marcar o desmarcar la llamada, el teléfono cambia de obligatorio a opcional
    campoContacto('llamada').addEventListener('change', () => {
        const telefono = campoContacto('telefono');
        const mensaje = motivoErrorContacto(telefono);

        if (mensaje) {
            marcarErrorContacto(telefono, mensaje);
        } else {
            quitarErrorContacto(telefono);
        }
    });

    document.querySelector('#form-contacto').addEventListener('submit', enviarFormularioContacto);
    document.querySelector('#lista-mensajes').addEventListener('click', accionListaMensajes);
    document.querySelector('#olvidar-recordatorio').addEventListener('click', olvidarRecordatorio);

    recordarUltimoEnvio();
    actualizarContadorMensaje();
    pintarMensajes();
}

document.addEventListener('DOMContentLoaded', iniciarContacto);

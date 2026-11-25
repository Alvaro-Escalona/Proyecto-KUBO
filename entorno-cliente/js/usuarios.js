/* exported iniciarUsuarios */

// colección de localStorage donde viven las cuentas
const COLECCION_USUARIOS = 'usuarios';
const EDAD_MINIMA_USUARIO = 18;

// cuenta que se está editando (null cuando el formulario crea una nueva)
let usuarioEnEdicion = null;

// campos del formulario que se validan
const CAMPOS_USUARIO = ['nombre', 'usuario', 'email', 'nacimiento', 'password', 'repetir', 'condiciones'];

// devuelve el campo del formulario por su id
function campoUsuario(id) {
    return document.querySelector(`#${id}`);
}

// devuelve la caja de error asociada a un campo
function cajaErrorUsuario(id) {
    return document.querySelector(`#error-${id}`);
}

// pintar el error de un campo
function marcarErrorUsuario(campo, mensaje) {
    campo.setAttribute('aria-invalid', 'true');
    cajaErrorUsuario(campo.id).textContent = mensaje;
}

// quitar el error de un campo
function quitarErrorUsuario(campo) {
    campo.removeAttribute('aria-invalid');
    cajaErrorUsuario(campo.id).textContent = '';
}

// ¿hay otra cuenta con ese usuario o ese correo?
function usuarioRepetido(propiedad, valor, mensaje) {
    const buscado = String(valor).trim().toLowerCase();
    const repetido = obtenerTodos(COLECCION_USUARIOS).some(usuario => {
        if (usuarioEnEdicion !== null && String(usuario.id) === String(usuarioEnEdicion)) {
            return false;
        }
        return String(usuario[propiedad]).trim().toLowerCase() === buscado;
    });
    return repetido ? mensaje : null;
}

// mensaje de error de un campo, o null si está bien
function motivoErrorUsuario(campo) {
    const valor = campo.type === 'checkbox' ? campo.checked : campo.value;
    const editando = usuarioEnEdicion !== null;

    if (campo.id === 'nombre') {
        return validarNombre(valor, campo.minLength, campo.maxLength);
    }

    if (campo.id === 'usuario') {
        const error = validarUsuario(valor, campo.minLength, campo.maxLength);
        if (error) {
            return error;
        }
        return usuarioRepetido('usuario', valor, 'Ese nombre de usuario ya está cogido.');
    }

    if (campo.id === 'email') {
        const error = validarEmail(valor);
        if (error) {
            return error;
        }
        return usuarioRepetido('email', valor, 'Ya hay una cuenta con ese correo.');
    }

    if (campo.id === 'nacimiento') {
        return validarFechaNacimiento(valor, EDAD_MINIMA_USUARIO);
    }

    if (campo.id === 'password' || campo.id === 'repetir') {
        const password = campoUsuario('password').value;
        const repetir = campoUsuario('repetir').value;

        // al editar, la contraseña es opcional: se deja vacía para no cambiarla
        if (editando && password === '' && repetir === '') {
            return null;
        }
        if (campo.id === 'password') {
            return validarPassword(password, campo.minLength);
        }
        return validarRepetirPassword(repetir, password);
    }

    if (campo.id === 'condiciones') {
        return validarCondiciones(valor);
    }

    return null;
}

// valida todos los campos y devuelve el primero con error
function validarFormularioUsuario() {
    let primero = null;

    CAMPOS_USUARIO.forEach(id => {
        const campo = campoUsuario(id);
        const mensaje = motivoErrorUsuario(campo);

        if (mensaje) {
            marcarErrorUsuario(campo, mensaje);
            if (primero === null) {
                primero = campo;
            }
        } else {
            quitarErrorUsuario(campo);
        }
    });

    return primero;
}

// valores del formulario ya limpios y convertidos
function datosFormularioUsuario() {
    return {
        nombre: campoUsuario('nombre').value.trim(),
        usuario: campoUsuario('usuario').value.trim(),
        email: campoUsuario('email').value.trim().toLowerCase(),
        nacimiento: campoUsuario('nacimiento').value,
        notificaciones: campoUsuario('notificaciones').checked
    };
}

// mensaje de estado debajo del formulario
function anunciarUsuario(mensaje) {
    const aviso = document.querySelector('#estado-usuarios');
    aviso.textContent = mensaje;
    aviso.hidden = false;
}

// una tarjeta de la lista de usuarios
function crearTarjetaUsuario(usuario) {
    const tarjeta = document.createElement('li');
    tarjeta.className = 'tarjeta-dato';

    const cabecera = document.createElement('div');
    cabecera.className = 'tarjeta-dato__cabecera';

    const titulo = document.createElement('p');
    titulo.className = 'tarjeta-dato__titulo';
    titulo.textContent = usuario.nombre;

    const edad = document.createElement('p');
    edad.className = 'tarjeta-dato__fecha';
    edad.textContent = usuario.nacimiento ? `${calcularEdad(usuario.nacimiento)} años` : '';

    cabecera.appendChild(titulo);
    cabecera.appendChild(edad);

    const texto = document.createElement('p');
    texto.className = 'tarjeta-dato__texto';
    texto.textContent = `@${usuario.usuario} · ${usuario.email}`;

    const acciones = document.createElement('div');
    acciones.className = 'acciones';

    const editar = document.createElement('button');
    editar.className = 'boton boton--secundario boton--formulario';
    editar.type = 'button';
    editar.textContent = 'Editar';
    editar.dataset.accion = 'editar';
    editar.dataset.id = usuario.id;

    const eliminar = document.createElement('button');
    eliminar.className = 'boton boton--peligro boton--formulario';
    eliminar.type = 'button';
    eliminar.textContent = 'Borrar';
    eliminar.dataset.accion = 'borrar';
    eliminar.dataset.id = usuario.id;

    acciones.appendChild(editar);
    acciones.appendChild(eliminar);

    tarjeta.appendChild(cabecera);
    tarjeta.appendChild(texto);
    tarjeta.appendChild(acciones);

    return tarjeta;
}

// pintar la lista completa de usuarios
function pintarUsuarios() {
    const lista = document.querySelector('#lista-usuarios');
    lista.textContent = '';

    const usuarios = obtenerTodos(COLECCION_USUARIOS);
    usuarios.forEach(usuario => {
        lista.appendChild(crearTarjetaUsuario(usuario));
    });

    document.querySelector('#sin-usuarios').hidden = usuarios.length > 0;
    document.querySelector('#contador-usuarios').textContent =
        usuarios.length === 1 ? '1 cuenta' : `${usuarios.length} cuentas`;
}

// dejar el formulario listo para una cuenta nueva
function terminarEdicionUsuario() {
    usuarioEnEdicion = null;
    document.querySelector('#form-usuario').reset();
    document.querySelector('#boton-guardar').textContent = 'Crear cuenta';
    document.querySelector('#boton-cancelar').hidden = true;
    document.querySelector('#modo-formulario').textContent = 'Nueva cuenta';
    document.querySelector('#estado-usuarios').hidden = true;

    CAMPOS_USUARIO.forEach(id => quitarErrorUsuario(campoUsuario(id)));
}

// cargar una cuenta en el formulario para editarla
function editarUsuario(id) {
    const usuario = obtenerPorId(COLECCION_USUARIOS, id);
    if (!usuario) {
        return;
    }

    usuarioEnEdicion = usuario.id;

    campoUsuario('nombre').value = usuario.nombre;
    campoUsuario('usuario').value = usuario.usuario;
    campoUsuario('email').value = usuario.email;
    campoUsuario('nacimiento').value = usuario.nacimiento;
    campoUsuario('password').value = '';
    campoUsuario('repetir').value = '';
    campoUsuario('condiciones').checked = true;
    campoUsuario('notificaciones').checked = Boolean(usuario.notificaciones);

    document.querySelector('#boton-guardar').textContent = 'Guardar cambios';
    document.querySelector('#boton-cancelar').hidden = false;
    document.querySelector('#modo-formulario').textContent = `Editando @${usuario.usuario}`;
    document.querySelector('#estado-usuarios').hidden = true;

    CAMPOS_USUARIO.forEach(idCampo => quitarErrorUsuario(campoUsuario(idCampo)));

    document.querySelector('#form-usuario').scrollIntoView({ behavior: 'smooth', block: 'start' });
    campoUsuario('nombre').focus({ preventScroll: true });
}

// borrar una cuenta, preguntando antes
function borrarUsuario(id) {
    const usuario = obtenerPorId(COLECCION_USUARIOS, id);
    if (!usuario) {
        return;
    }

    if (!confirm(`¿Borrar la cuenta de ${usuario.nombre}?`)) {
        return;
    }

    borrar(COLECCION_USUARIOS, id);

    if (usuarioEnEdicion !== null && String(usuarioEnEdicion) === String(id)) {
        terminarEdicionUsuario();
    }

    pintarUsuarios();
    anunciarUsuario('Cuenta borrada.');
}

// un solo listener para todos los botones de la lista
function accionListaUsuarios(evento) {
    const boton = evento.target.closest('[data-accion]');
    if (!boton) {
        return;
    }

    if (boton.dataset.accion === 'editar') {
        editarUsuario(boton.dataset.id);
    } else if (boton.dataset.accion === 'borrar') {
        borrarUsuario(boton.dataset.id);
    }
}

// guardar el formulario (crear o actualizar)
function enviarFormularioUsuario(evento) {
    evento.preventDefault();

    const primeroConError = validarFormularioUsuario();
    if (primeroConError) {
        primeroConError.focus();
        return;
    }

    const datos = datosFormularioUsuario();

    if (usuarioEnEdicion === null) {
        const nuevo = crear(COLECCION_USUARIOS, datos);
        terminarEdicionUsuario();
        pintarUsuarios();
        anunciarUsuario(`Cuenta creada: @${nuevo.usuario}.`);
    } else {
        actualizar(COLECCION_USUARIOS, usuarioEnEdicion, datos);
        terminarEdicionUsuario();
        pintarUsuarios();
        anunciarUsuario('Cambios guardados.');
    }
}

// comprobar un campo al salir de él y corregir el error al escribir
function vigilarCampoUsuario(campo) {
    campo.addEventListener('blur', () => {
        const mensaje = motivoErrorUsuario(campo);
        if (mensaje) {
            marcarErrorUsuario(campo, mensaje);
        } else {
            quitarErrorUsuario(campo);
        }
    });

    campo.addEventListener('input', () => {
        if (campo.getAttribute('aria-invalid') === 'true' && !motivoErrorUsuario(campo)) {
            quitarErrorUsuario(campo);
        }

        // si cambia la contraseña, "repetir" tiene que volver a coincidir
        if (campo.id === 'password') {
            const repetir = campoUsuario('repetir');
            if (repetir.value !== '') {
                const mensaje = motivoErrorUsuario(repetir);
                if (mensaje) {
                    marcarErrorUsuario(repetir, mensaje);
                } else {
                    quitarErrorUsuario(repetir);
                }
            }
        }
    });
}

// arranque de la página
function iniciarUsuarios() {
    CAMPOS_USUARIO.forEach(id => vigilarCampoUsuario(campoUsuario(id)));

    document.querySelector('#form-usuario').addEventListener('submit', enviarFormularioUsuario);
    document.querySelector('#boton-cancelar').addEventListener('click', terminarEdicionUsuario);
    document.querySelector('#lista-usuarios').addEventListener('click', accionListaUsuarios);

    pintarUsuarios();
}

document.addEventListener('DOMContentLoaded', iniciarUsuarios);

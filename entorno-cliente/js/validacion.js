/* exported validarRequerido, validarNombre, validarUsuario, validarEmail, validarPassword, validarRepetirPassword, validarFechaNacimiento, validarCondiciones, validarTelefono, validarMotivo, validarMensaje, calcularEdad */

// obligatorio
function validarRequerido(valor) {
    if (String(valor).trim() === '') {
        return 'Este campo es obligatorio.';
    }
    return null;
}

// nombre de la persona
function validarNombre(valor, minimo, maximo) {
    const texto = String(valor).trim();
    if (texto === '') {
        return 'Escribe tu nombre.';
    }
    if (texto.length < minimo) {
        return `El nombre debe tener al menos ${minimo} caracteres.`;
    }
    if (texto.length > maximo) {
        return `El nombre no puede pasar de ${maximo} caracteres.`;
    }
    if (!/^[a-záéíóúüñç\s'-]+$/i.test(texto)) {
        return 'El nombre solo puede tener letras.';
    }
    return null;
}

// nombre de usuario
function validarUsuario(valor, minimo, maximo) {
    const texto = String(valor).trim();
    if (texto === '') {
        return 'Elige un nombre de usuario.';
    }
    if (texto.length < minimo) {
        return `El usuario debe tener al menos ${minimo} caracteres.`;
    }
    if (texto.length > maximo) {
        return `El usuario no puede pasar de ${maximo} caracteres.`;
    }
    if (!/^[a-z0-9._-]+$/i.test(texto)) {
        return 'El usuario solo puede tener letras, números, punto, guion o guion bajo.';
    }
    return null;
}

// correo
function validarEmail(valor) {
    const texto = String(valor).trim();
    if (texto === '') {
        return 'Escribe tu correo.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(texto)) {
        return 'Escribe un correo válido, por ejemplo nombre@correo.com.';
    }
    return null;
}

// contraseña
function validarPassword(valor, minimo) {
    const texto = String(valor);
    if (texto === '') {
        return 'Escribe una contraseña.';
    }
    if (texto.length < minimo) {
        return `La contraseña debe tener al menos ${minimo} caracteres.`;
    }
    if (!/[A-Z]/.test(texto)) {
        return 'La contraseña debe tener al menos una mayúscula.';
    }
    if (!/[0-9]/.test(texto)) {
        return 'La contraseña debe tener al menos un número.';
    }
    return null;
}

// repetir contraseña
function validarRepetirPassword(valor, password) {
    if (String(valor) === '') {
        return 'Repite la contraseña.';
    }
    if (String(valor) !== String(password)) {
        return 'Las contraseñas no coinciden.';
    }
    return null;
}

// fecha de nacimiento y edad mínima
function validarFechaNacimiento(valor, edadMinima) {
    if (String(valor).trim() === '') {
        return 'Escribe tu fecha de nacimiento.';
    }
    const fecha = new Date(`${valor}T00:00:00`);
    if (Number.isNaN(fecha.getTime())) {
        return 'La fecha no es válida.';
    }
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fecha > hoy) {
        return 'La fecha de nacimiento no puede ser futura.';
    }
    const limite = new Date();
    limite.setFullYear(limite.getFullYear() - edadMinima);
    limite.setHours(0, 0, 0, 0);
    if (fecha > limite) {
        return `Tienes que tener al menos ${edadMinima} años para usar KUBO.`;
    }
    return null;
}

// casilla de condiciones
function validarCondiciones(aceptado) {
    if (aceptado !== true) {
        return 'Tienes que aceptar las condiciones para continuar.';
    }
    return null;
}

// teléfono (opcional, salvo que se marque "prefiero que me llaméis")
function validarTelefono(valor, obligatorio) {
    const texto = String(valor).trim();
    if (texto === '') {
        if (obligatorio) {
            return 'Escribe tu teléfono para que podamos llamarte.';
        }
        return null;
    }
    const limpio = texto.replace(/[\s.-]/g, '');
    if (!/^(\+34)?[6-9][0-9]{8}$/.test(limpio)) {
        return 'Escribe un teléfono válido de 9 dígitos (o con +34 delante).';
    }
    return null;
}

// motivo del contacto
function validarMotivo(valor) {
    if (String(valor).trim() === '') {
        return 'Elige un motivo.';
    }
    return null;
}

// mensaje del contacto
function validarMensaje(valor, minimo, maximo) {
    const texto = String(valor).trim();
    if (texto === '') {
        return 'Escribe tu mensaje.';
    }
    if (texto.length < minimo) {
        return `El mensaje debe tener al menos ${minimo} caracteres.`;
    }
    if (texto.length > maximo) {
        return `El mensaje no puede pasar de ${maximo} caracteres.`;
    }
    return null;
}

// años cumplidos a partir de una fecha ISO
function calcularEdad(fechaISO) {
    const nacimiento = new Date(`${fechaISO}T00:00:00`);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad = edad - 1;
    }
    return edad;
}

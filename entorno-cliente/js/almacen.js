/* exported obtenerTodos, obtenerPorId, crear, actualizar, borrar */

// nombre interno de cada colección en localStorage
const PREFIJO = 'kubo:';

// leer una colección
function leerColeccion(coleccion) {
    const texto = localStorage.getItem(PREFIJO + coleccion);
    if (!texto) {
        return [];
    }
    try {
        const datos = JSON.parse(texto);
        return Array.isArray(datos) ? datos : [];
    } catch (error) {
        console.error(`No se pudo leer "${coleccion}".`, error);
        return [];
    }
}

// guardar una colección
function guardarColeccion(coleccion, lista) {
    localStorage.setItem(PREFIJO + coleccion, JSON.stringify(lista));
}

// todos los elementos de una colección
function obtenerTodos(coleccion) {
    return leerColeccion(coleccion);
}

// un elemento por su id
function obtenerPorId(coleccion, id) {
    const lista = leerColeccion(coleccion);
    const encontrado = lista.find(dato => String(dato.id) === String(id));
    return encontrado || null;
}

// crear un elemento nuevo
function crear(coleccion, dato) {
    const lista = leerColeccion(coleccion);
    const ids = lista.map(elemento => Number(elemento.id) || 0);
    const nuevoId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
    const nuevo = { ...dato, id: nuevoId };
    lista.push(nuevo);
    guardarColeccion(coleccion, lista);
    return nuevo;
}

// actualizar un elemento
function actualizar(coleccion, id, dato) {
    const lista = leerColeccion(coleccion);
    const indice = lista.findIndex(elemento => String(elemento.id) === String(id));
    if (indice === -1) {
        return null;
    }
    const actualizado = { ...lista[indice], ...dato, id: lista[indice].id };
    lista[indice] = actualizado;
    guardarColeccion(coleccion, lista);
    return actualizado;
}

// borrar un elemento
function borrar(coleccion, id) {
    const lista = leerColeccion(coleccion);
    const quedan = lista.filter(elemento => String(elemento.id) !== String(id));
    if (quedan.length === lista.length) {
        return false;
    }
    guardarColeccion(coleccion, quedan);
    return true;
}

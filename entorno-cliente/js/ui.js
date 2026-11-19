export function crearContenedor(id) {
  return document.getElementById(id);
}

export function limpiar(contenedor) {
  contenedor.replaceChildren();
}

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        URLSearchParams: "readonly",
        localStorage: "readonly",
        console: "readonly",
        confirm: "readonly",
        // Variables y funciones que se comparten entre archivos
        // (se cargan unos .js antes que otros en el HTML).
        kubos: "readonly",
        registros: "readonly",
        resumen: "readonly",
        kubosConFecha: "readonly",
        formatearEuros: "readonly",
        limpiarHTML: "readonly",
        numeroSemana: "readonly",
        crearTarjetaKubo: "readonly",
        crearTarjetaFecha: "readonly",
        crearRegistro: "readonly",
        // Almacén (js/almacen.js)
        obtenerTodos: "readonly",
        obtenerPorId: "readonly",
        crear: "readonly",
        actualizar: "readonly",
        borrar: "readonly",
        // Validación (js/validacion.js)
        validarRequerido: "readonly",
        validarNombre: "readonly",
        validarUsuario: "readonly",
        validarEmail: "readonly",
        validarPassword: "readonly",
        validarRepetirPassword: "readonly",
        validarFechaNacimiento: "readonly",
        validarCondiciones: "readonly",
        validarTelefono: "readonly",
        validarMotivo: "readonly",
        validarMensaje: "readonly",
        calcularEdad: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error"
    }
  }
];

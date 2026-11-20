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
        crearRegistro: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error"
    }
  }
];

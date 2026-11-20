/* exported kubos, registros, resumen, kubosConFecha */

// Kubos
const kubos = [
    { id: 'comida', nombre: 'Comida', icono: '🍖', presupuesto: 140 },
    { id: 'ocio', nombre: 'Ocio', icono: '🎬', presupuesto: 50 },
    { id: 'transporte', nombre: 'Transporte', icono: '🚌', presupuesto: 55 },
    { id: 'hogar', nombre: 'Hogar', icono: '🏠', presupuesto: 30 },
    { id: 'salud', nombre: 'Salud', icono: '🩺', presupuesto: 65 },
    { id: 'ropa', nombre: 'Ropa', icono: '👕', presupuesto: 65 },
    { id: 'restaurantes', nombre: 'Restaurantes', icono: '🍕', presupuesto: 40 },
    { id: 'mascotas', nombre: 'Mascotas', icono: '🐶', presupuesto: 35 },
    { id: 'suscripciones', nombre: 'Suscripciones', icono: '📺', presupuesto: 35 },
    { id: 'imprevistos', nombre: 'Imprevistos', icono: '⚡', presupuesto: 40 }
];

// Registros
const registros = [
    // Comida
    { id: 1, kuboId: 'comida', concepto: 'Mercadona', importe: 12, fecha: '2026-11-16' },
    { id: 2, kuboId: 'comida', concepto: 'Frutería del barrio', importe: 4.5, fecha: '2026-11-17' },
    { id: 3, kuboId: 'comida', concepto: 'Carnicería', importe: 7.5, fecha: '2026-11-18' },
    { id: 4, kuboId: 'comida', concepto: 'Panadería', importe: 1.5, fecha: '2026-11-19' },
    { id: 5, kuboId: 'comida', concepto: 'Mercadona', importe: 9.5, fecha: '2026-11-13' },
    { id: 51, kuboId: 'comida', concepto: 'Mercadona', importe: 3, fecha: '2026-11-04' },
    { id: 52, kuboId: 'comida', concepto: 'Frutería del barrio', importe: 2.2, fecha: '2026-11-06' },
    { id: 53, kuboId: 'comida', concepto: 'Carnicería', importe: 6.3, fecha: '2026-11-09' },
    { id: 54, kuboId: 'comida', concepto: 'Panadería', importe: 1.3, fecha: '2026-11-11' },
    { id: 55, kuboId: 'comida', concepto: 'Mercadona', importe: 8, fecha: '2026-11-02' },
    // Ocio
    { id: 6, kuboId: 'ocio', concepto: 'Cine', importe: 3.2, fecha: '2026-11-17' },
    { id: 7, kuboId: 'ocio', concepto: 'Concierto', importe: 8, fecha: '2026-11-15' },
    { id: 8, kuboId: 'ocio', concepto: 'Bolera', importe: 4, fecha: '2026-11-09' },
    { id: 9, kuboId: 'ocio', concepto: 'Museo', importe: 2.5, fecha: '2026-11-04' },
    { id: 10, kuboId: 'ocio', concepto: 'Escape room', importe: 6, fecha: '2026-11-08' },
    { id: 56, kuboId: 'ocio', concepto: 'Café', importe: 1.2, fecha: '2026-11-03' },
    { id: 57, kuboId: 'ocio', concepto: 'Bolos', importe: 3, fecha: '2026-11-05' },
    { id: 58, kuboId: 'ocio', concepto: 'Teatro', importe: 5, fecha: '2026-11-13' },
    { id: 59, kuboId: 'ocio', concepto: 'Videojuego', importe: 6, fecha: '2026-11-19' },
    { id: 60, kuboId: 'ocio', concepto: 'Museo', importe: 2, fecha: '2026-11-21' },
    // Transporte
    { id: 11, kuboId: 'transporte', concepto: 'Gasolina', importe: 10, fecha: '2026-11-16' },
    { id: 12, kuboId: 'transporte', concepto: 'Billete de bus', importe: 1.5, fecha: '2026-11-18' },
    { id: 13, kuboId: 'transporte', concepto: 'Taxi', importe: 4, fecha: '2026-11-12' },
    { id: 14, kuboId: 'transporte', concepto: 'Renfe', importe: 6, fecha: '2026-11-06' },
    { id: 15, kuboId: 'transporte', concepto: 'Gasolina', importe: 9, fecha: '2026-11-08' },
    { id: 61, kuboId: 'transporte', concepto: 'Gasolina', importe: 9, fecha: '2026-11-03' },
    { id: 62, kuboId: 'transporte', concepto: 'Billete de metro', importe: 1.2, fecha: '2026-11-05' },
    { id: 63, kuboId: 'transporte', concepto: 'Parking', importe: 2, fecha: '2026-11-10' },
    { id: 64, kuboId: 'transporte', concepto: 'Taxi', importe: 3, fecha: '2026-11-14' },
    { id: 65, kuboId: 'transporte', concepto: 'Renfe', importe: 5, fecha: '2026-11-19' },
    // Hogar
    { id: 16, kuboId: 'hogar', concepto: 'Detergente', importe: 2.5, fecha: '2026-11-16' },
    { id: 17, kuboId: 'hogar', concepto: 'Productos de limpieza', importe: 3.2, fecha: '2026-11-10' },
    { id: 18, kuboId: 'hogar', concepto: 'Bombillas', importe: 2.5, fecha: '2026-11-05' },
    { id: 19, kuboId: 'hogar', concepto: 'Ferretería', importe: 4.5, fecha: '2026-11-11' },
    { id: 20, kuboId: 'hogar', concepto: 'Papel higiénico', importe: 2, fecha: '2026-11-14' },
    { id: 66, kuboId: 'hogar', concepto: 'Gel de baño', importe: 1.2, fecha: '2026-11-04' },
    { id: 67, kuboId: 'hogar', concepto: 'Esponjas', importe: 0.8, fecha: '2026-11-07' },
    { id: 68, kuboId: 'hogar', concepto: 'Suavizante', importe: 1.6, fecha: '2026-11-12' },
    { id: 69, kuboId: 'hogar', concepto: 'Bolsas de basura', importe: 1, fecha: '2026-11-15' },
    { id: 70, kuboId: 'hogar', concepto: 'Velas', importe: 2, fecha: '2026-11-18' },
    // Salud
    { id: 21, kuboId: 'salud', concepto: 'Farmacia', importe: 3, fecha: '2026-11-18' },
    { id: 22, kuboId: 'salud', concepto: 'Dentista', importe: 15, fecha: '2026-11-12' },
    { id: 23, kuboId: 'salud', concepto: 'Óptica', importe: 20, fecha: '2026-11-03' },
    { id: 24, kuboId: 'salud', concepto: 'Crema hidratante', importe: 2.5, fecha: '2026-11-07' },
    { id: 25, kuboId: 'salud', concepto: 'Ibuprofeno', importe: 1.5, fecha: '2026-11-15' },
    { id: 71, kuboId: 'salud', concepto: 'Pastillas', importe: 2.3, fecha: '2026-11-05' },
    { id: 72, kuboId: 'salud', concepto: 'Tiritas', importe: 0.8, fecha: '2026-11-09' },
    { id: 73, kuboId: 'salud', concepto: 'Jarabe', importe: 2.5, fecha: '2026-11-13' },
    { id: 74, kuboId: 'salud', concepto: 'Vitaminas', importe: 3.3, fecha: '2026-11-16' },
    { id: 75, kuboId: 'salud', concepto: 'Crema solar', importe: 4.2, fecha: '2026-11-20' },
    // Ropa
    { id: 26, kuboId: 'ropa', concepto: 'Camiseta', importe: 5, fecha: '2026-11-19' },
    { id: 27, kuboId: 'ropa', concepto: 'Pantalón', importe: 10, fecha: '2026-11-14' },
    { id: 28, kuboId: 'ropa', concepto: 'Calcetines', importe: 2, fecha: '2026-11-08' },
    { id: 29, kuboId: 'ropa', concepto: 'Zapatillas', importe: 13, fecha: '2026-11-12' },
    { id: 30, kuboId: 'ropa', concepto: 'Bufanda', importe: 4, fecha: '2026-11-06' },
    { id: 76, kuboId: 'ropa', concepto: 'Gorro', importe: 2.5, fecha: '2026-11-03' },
    { id: 77, kuboId: 'ropa', concepto: 'Guantes', importe: 3, fecha: '2026-11-10' },
    { id: 78, kuboId: 'ropa', concepto: 'Chaqueta', importe: 15, fecha: '2026-11-15' },
    { id: 79, kuboId: 'ropa', concepto: 'Pijama', importe: 6, fecha: '2026-11-17' },
    { id: 80, kuboId: 'ropa', concepto: 'Cinturón', importe: 2.5, fecha: '2026-11-21' },
    // Restaurantes
    { id: 31, kuboId: 'restaurantes', concepto: 'Hamburguesa', importe: 5, fecha: '2026-11-16' },
    { id: 32, kuboId: 'restaurantes', concepto: 'Sushi', importe: 6, fecha: '2026-11-19' },
    { id: 33, kuboId: 'restaurantes', concepto: 'Pizza', importe: 4, fecha: '2026-11-11' },
    { id: 34, kuboId: 'restaurantes', concepto: 'Tapas', importe: 5.5, fecha: '2026-11-07' },
    { id: 35, kuboId: 'restaurantes', concepto: 'Desayuno', importe: 1.6, fecha: '2026-11-13' },
    { id: 81, kuboId: 'restaurantes', concepto: 'Bocadillo', importe: 1.8, fecha: '2026-11-04' },
    { id: 82, kuboId: 'restaurantes', concepto: 'Kebab', importe: 2.5, fecha: '2026-11-08' },
    { id: 83, kuboId: 'restaurantes', concepto: 'Menú del día', importe: 3.8, fecha: '2026-11-12' },
    { id: 84, kuboId: 'restaurantes', concepto: 'Helado', importe: 1.2, fecha: '2026-11-14' },
    { id: 85, kuboId: 'restaurantes', concepto: 'Desayuno', importe: 1.5, fecha: '2026-11-18' },
    // Mascotas
    { id: 36, kuboId: 'mascotas', concepto: 'Pienso del perro', importe: 4.2, fecha: '2026-11-17' },
    { id: 37, kuboId: 'mascotas', concepto: 'Juguete del perro', importe: 3, fecha: '2026-11-10' },
    { id: 38, kuboId: 'mascotas', concepto: 'Arena del gato', importe: 2.2, fecha: '2026-11-13' },
    { id: 39, kuboId: 'mascotas', concepto: 'Chuches', importe: 1.2, fecha: '2026-11-08' },
    { id: 40, kuboId: 'mascotas', concepto: 'Collar', importe: 3.3, fecha: '2026-11-15' },
    { id: 86, kuboId: 'mascotas', concepto: 'Pipetas', importe: 5, fecha: '2026-11-04' },
    { id: 87, kuboId: 'mascotas', concepto: 'Huesos', importe: 1.5, fecha: '2026-11-07' },
    { id: 88, kuboId: 'mascotas', concepto: 'Cama del perro', importe: 6.5, fecha: '2026-11-12' },
    { id: 89, kuboId: 'mascotas', concepto: 'Comida del gato', importe: 2.8, fecha: '2026-11-16' },
    { id: 90, kuboId: 'mascotas', concepto: 'Champú', importe: 2.2, fecha: '2026-11-19' },
    // Suscripciones
    { id: 41, kuboId: 'suscripciones', concepto: 'Netflix', importe: 4.5, fecha: '2026-11-16' },
    { id: 42, kuboId: 'suscripciones', concepto: 'Spotify', importe: 3.8, fecha: '2026-11-05' },
    { id: 43, kuboId: 'suscripciones', concepto: 'Gimnasio', importe: 8, fecha: '2026-11-02' },
    { id: 44, kuboId: 'suscripciones', concepto: 'iCloud', importe: 0.5, fecha: '2026-11-03' },
    { id: 45, kuboId: 'suscripciones', concepto: 'Amazon Prime', importe: 1.8, fecha: '2026-11-10' },
    { id: 91, kuboId: 'suscripciones', concepto: 'Disney+', importe: 3, fecha: '2026-11-04' },
    { id: 92, kuboId: 'suscripciones', concepto: 'HBO', importe: 3.3, fecha: '2026-11-07' },
    { id: 93, kuboId: 'suscripciones', concepto: 'Revista', importe: 1.8, fecha: '2026-11-12' },
    { id: 94, kuboId: 'suscripciones', concepto: 'App de idiomas', importe: 2.3, fecha: '2026-11-15' },
    { id: 95, kuboId: 'suscripciones', concepto: 'Cloud extra', importe: 1, fecha: '2026-11-19' },
    // Imprevistos
    { id: 46, kuboId: 'imprevistos', concepto: 'Pilas', importe: 1.2, fecha: '2026-11-18' },
    { id: 47, kuboId: 'imprevistos', concepto: 'Reparación del móvil', importe: 12, fecha: '2026-11-14' },
    { id: 48, kuboId: 'imprevistos', concepto: 'Paraguas', importe: 2, fecha: '2026-11-09' },
    { id: 49, kuboId: 'imprevistos', concepto: 'Cerrojo', importe: 6, fecha: '2026-11-11' },
    { id: 50, kuboId: 'imprevistos', concepto: 'Luz de repuesto', importe: 2, fecha: '2026-11-16' },
    { id: 96, kuboId: 'imprevistos', concepto: 'Tornillos', importe: 1.5, fecha: '2026-11-05' },
    { id: 97, kuboId: 'imprevistos', concepto: 'Pegamento', importe: 1, fecha: '2026-11-08' },
    { id: 98, kuboId: 'imprevistos', concepto: 'Cargador', importe: 5, fecha: '2026-11-12' },
    { id: 99, kuboId: 'imprevistos', concepto: 'Funda del móvil', importe: 3.5, fecha: '2026-11-17' },
    { id: 100, kuboId: 'imprevistos', concepto: 'Bombilla de recambio', importe: 1.5, fecha: '2026-11-20' }
];

// Datos del mes y la semana
const ingresos = 900;
const gastosFijos = 350;

const resumen = {
    ingresos,
    gastosFijos,
    objetivoAhorro: 100,
    ahorroMesActual: 75,
    // Colchón de imprevistos: el 6 % de (ingresos - gastos fijos) cada mes,
    // se va acumulando hasta el tope (que el usuario puede ajustar).
    colchon: Math.round((ingresos - gastosFijos) * 0.06),
    colchonObjetivo: 300,
    semana: { actual: 3, total: 4, desde: 'lunes 16', hasta: 'domingo 22' },
    disponibleSemana: 45,
    buenRitmo: true
};

// Kubos con fecha
const kubosConFecha = [
    { id: 'regalo-maria', nombre: 'Regalo María', icono: '🎁', importe: 20, dia: 18 },
    { id: 'veterinario', nombre: 'Veterinario', icono: '🩹', importe: 15, dia: 24 }
];

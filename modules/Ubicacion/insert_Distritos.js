import connection from "../../db/connection.js";

async function insertDistritos() {
  const distritos = [
    // --- Cantón San José (id_canton_fk = 1)
    ['Carmen', 1],
    ['Merced', 1],
    ['Hospital', 1],
    ['Catedral', 1],
    ['Zapote', 1],
    ['San Francisco de Dos Ríos', 1],
    ['Uruca', 1],
    ['Mata Redonda', 1],
    ['Pavas', 1],
    ['Hatillo', 1],
    ['San Sebastián', 1],

    // --- Cantón Escazú (id_canton_fk = 2)
    ['Escazú', 2],
    ['San Antonio', 2],
    ['San Rafael', 2],

    // --- Cantón Desamparados (id_canton_fk = 3)
    ['Desamparados', 3],
    ['San Miguel', 3],
    ['San Juan de Dios', 3],
    ['San Rafael Arriba', 3],
    ['San Antonio', 3],
    ['Frailes', 3],
    ['Patarrá', 3],
    ['San Cristóbal', 3],
    ['Rosario', 3],
    ['Damas', 3],
    ['San Rafael Abajo', 3],
    ['Gravilias', 3],
    ['Los Guido', 3],

    // --- Cantón Puriscal (id_canton_fk = 4)
    ['Santiago', 4],
    ['Mercedes Sur', 4],
    ['Barbacoas', 4],
    ['Grifo Alto', 4],
    ['San Rafael', 4],
    ['Candelarita', 4],
    ['Desamparaditos', 4],
    ['San Antonio', 4],
    ['Chires', 4],

    // --- Cantón Tarrazú (id_canton_fk = 5)
    ['San Marcos', 5],
    ['San Lorenzo', 5],
    ['San Carlos', 5],

    // --- Cantón Aserrí (id_canton_fk = 6)
    ['Aserrí', 6],
    ['Tarbaca', 6],
    ['Vuelta de Jorco', 6],
    ['San Gabriel', 6],
    ['La Legua', 6],
    ['Monterrey', 6],
    ['Salitrillos', 6],

    // --- Cantón Mora (id_canton_fk = 7)
    ['Colón', 7],
    ['Guayabo', 7],
    ['Tabarcia', 7],
    ['Piedras Negras', 7],
    ['Picagres', 7],
    ['Jaris', 7],
    ['Quitirrisí', 7],

    // --- Cantón Goicoechea (id_canton_fk = 8)
    ['Guadalupe', 8],
    ['San Francisco', 8],
    ['Calle Blancos', 8],
    ['Mata de Plátano', 8],
    ['Ipís', 8],
    ['Rancho Redondo', 8],
    ['Purral', 8],

    // --- Cantón Santa Ana (id_canton_fk = 9)
    ['Santa Ana', 9],
    ['Salitral', 9],
    ['Pozos', 9],
    ['Uruca', 9],
    ['Piedades', 9],
    ['Brasil', 9],

    // --- Cantón Alajuelita (id_canton_fk = 10)
    ['Alajuelita', 10],
    ['San Josecito', 10],
    ['San Antonio', 10],
    ['Concepción', 10],
    ['San Felipe', 10],

    // --- Cantón Vázquez de Coronado (id_canton_fk = 11)
    ['San Isidro', 11],
    ['San Rafael', 11],
    ['Dulce Nombre de Jesús', 11],
    ['Patalillo', 11],
    ['Cascajal', 11],

    // --- Cantón Acosta (id_canton_fk = 12)
    ['San Ignacio', 12],
    ['Guaitil', 12],
    ['Palmichal', 12],
    ['Cangrejal', 12],
    ['Sabanillas', 12],

    // --- Cantón Tibás (id_canton_fk = 13)
    ['San Juan', 13],
    ['Cinco Esquinas', 13],
    ['Anselmo Llorente', 13],
    ['León XIII', 13],
    ['Colima', 13],

    // --- Cantón Moravia (id_canton_fk = 14)
    ['San Vicente', 14],
    ['San Jerónimo', 14],
    ['La Trinidad', 14],

    // --- Cantón Montes de Oca (id_canton_fk = 15)
    ['San Pedro', 15],
    ['Sabanilla', 15],
    ['Mercedes', 15],
    ['San Rafael', 15],

    // --- Cantón Turrubares (id_canton_fk = 16)
    ['San Pablo', 16],
    ['San Pedro', 16],
    ['San Juan de Mata', 16],
    ['San Luis', 16],
    ['Carara', 16],

    // --- Cantón Dota (id_canton_fk = 17)
    ['Santa María', 17],
    ['Jardín', 17],
    ['Copey', 17],

    // --- Cantón Curridabat (id_canton_fk = 18)
    ['Curridabat', 18],
    ['Granadilla', 18],
    ['Sánchez', 18],
    ['Tirrases', 18],

    // --- Cantón Pérez Zeledón (id_canton_fk = 19)
    ['San Isidro de El General', 19],
    ['El General', 19],
    ['Daniel Flores', 19],
    ['Rivas', 19],
    ['San Pedro', 19],
    ['Platanares', 19],
    ['Pejibaye', 19],
    ['Cajón', 19],
    ['Barú', 19],
    ['Río Nuevo', 19],
    ['Páramo', 19],
    ['La Amistad', 19],

    // --- Cantón León Cortés (id_canton_fk = 20)
    ['San Pablo', 20],
    ['San Andrés', 20],
    ['Llano Bonito', 20],
    ['San Isidro', 20],
    ['Santa Cruz', 20],
    ['San Antonio', 20],

    // ========================================================================================================================
    //                                                       Alajuela
    // ========================================================================================================================

    // --- Cantón Alajuela (id_canton_fk = 21)
    ['Alajuela', 21],
    ['San José', 21],
    ['Carrizal', 21],
    ['San Antonio', 21],
    ['Guácima', 21],
    ['San Isidro', 21],
    ['Sabanilla', 21],
    ['San Rafael', 21],
    ['Río Segundo', 21],
    ['Desamparados', 21],
    ['Turrúcares', 21],
    ['Tambor', 21],
    ['Garita', 21],
    ['Sarapiquí', 21],

    // --- Cantón San Ramón (id_canton_fk = 22)
    ['San Ramón', 22],
    ['Santiago', 22],
    ['San Juan', 22],
    ['Piedades Norte', 22],
    ['Piedades Sur', 22],
    ['San Rafael', 22],
    ['San Isidro', 22],
    ['Ángeles', 22],
    ['Alfaro', 22],
    ['Volio', 22],
    ['Concepción', 22],
    ['Zapotal', 22],
    ['Peñas Blancas', 22],
    ['San Lorenzo', 22],

    // --- Cantón Grecia (id_canton_fk = 23)
    ['Grecia', 23],
    ['San Isidro', 23],
    ['San José', 23],
    ['San Roque', 23],
    ['Tacares', 23],
    ['Puente de Piedra', 23],
    ['Bolívar', 23],

    // --- Cantón San Mateo (id_canton_fk = 24)
    ['San Mateo', 24],
    ['Desmonte', 24],
    ['Jesús María', 24],
    ['Labrador', 24],

    // --- Cantón Atenas (id_canton_fk = 25)
    ['Atenas', 25],
    ['Jesús', 25],
    ['Mercedes', 25],
    ['San Isidro', 25],
    ['Concepción', 25],
    ['San José', 25],
    ['Santa Eulalia', 25],
    ['Escobal', 25],

    // --- Cantón Naranjo (id_canton_fk = 26)
    ['Naranjo', 26],
    ['San Miguel', 26],
    ['San José', 26],
    ['Cirrí Sur', 26],
    ['San Jerónimo', 26],
    ['San Juan', 26],
    ['El Rosario', 26],
    ['Palmitos', 26],

    // --- Cantón Palmares (id_canton_fk = 27)

    ['Palmares', 27],
    ['Zaragoza', 27],
    ['Buenos Aires', 27],
    ['Santiago', 27],
    ['Candelaria', 27],
    ['Esquipulas', 27],
    ['La Granja', 27],

    // --- Cantón Poás (id_canton_fk = 28)
    ['San Pedro', 28],
    ['San Juan', 28],
    ['San Rafael', 28],
    ['Carrillos', 28],
    ['Sabana Redonda', 28],

    // --- Cantón Orotina (id_canton_fk = 29)
    ['Orotina', 29],
    ['Mastate', 29],
    ['Hacienda Vieja', 29],
    ['Coyolar', 29],
    ['La Ceiba', 29],

    // --- Cantón San Carlos (id_canton_fk = 30)
    ['Ciudad Quesada', 30],
    ['Florencia', 30],
    ['Buenavista', 30],
    ['Aguas Zarcas', 30],
    ['Venecia', 30],
    ['Pital', 30],
    ['La Fortuna', 30],
    ['La Tigra', 30],
    ['La Palmera', 30],
    ['Venado', 30],
    ['Cutris', 30],
    ['Monterrey', 30],
    ['Pocosol', 30],

    // --- Cantón Zarcero (id_canton_fk = 31)
    ['Zarcero', 31],
    ['Laguna', 31],
    ['Tapezco', 31],
    ['Guadalupe', 31],
    ['Palmira', 31],
    ['Zapote', 31],
    ['Brisas', 31],

    // --- Cantón Valverde Vega (id_canton_fk = 32)
    ['Sarchí Norte', 32],
    ['Sarchí Sur', 32],
    ['Toro Amarillo', 32],
    ['San Pedro', 32],
    ['Rodríguez', 32],

    // --- Cantón Upala (id_canton_fk = 33)
    ['Upala', 33],
    ['Aguas Claras', 33],
    ['San José (Upala)', 33],
    ['Bijagua', 33],
    ['Delicias', 33],
    ['Dos Ríos', 33],
    ['Yolillal', 33],
    ['Canalete', 33],

    // --- Cantón Los Chiles (id_canton_fk = 34)
    ['Los Chiles', 34],
    ['Caño Negro', 34],
    ['El Amparo', 34],
    ['San Jorge', 34],

    // --- Cantón Guatuso (id_canton_fk = 35)
    ['San Rafael', 35],
    ['Buenavista', 35],
    ['Cote', 35],
    ['Katira', 35],

    // --- Cantón Río Cuarto (id_canton_fk = 36)
    ['Río Cuarto', 36],
    ['Santa Rita', 36],
    ['Santa Isabel', 36],
    // ========================================================================================================================
    //                                                       Cartago
    // ========================================================================================================================
      
    // --- Cantón Cartago (id_canton_fk = 37)
    ['Oriental', 37],
    ['Occidental', 37],
    ['Carmen', 37],
    ['San Nicolás', 37],
    ['Aguacaliente (San Francisco)', 37],
    ['Guadalupe (Arenilla)', 37],
    ['Corralillo', 37],
    ['Tierra Blanca', 37],
    ['Dulce Nombre', 37],
    ['Llano Grande', 37],
    ['Quebradilla', 37],

    // --- Cantón Paraíso (id_canton_fk = 38)
    ['Paraíso', 38],
    ['Santiago', 38],
    ['Orosi', 38],
    ['Cachí', 38],
    ['Llanos de Santa Lucía', 38],
    ['Birrisito', 38],

    // --- Cantón La Unión (id_canton_fk = 39)
    ['Tres Ríos', 39],
    ['San Diego', 39],
    ['San Juan', 39],
    ['San Rafael', 39],
    ['Concepción', 39],
    ['Dulce Nombre', 39],
    ['San Ramón', 39],
    ['Río Azul', 39],

    // --- Cantón Jiménez (id_canton_fk = 40)
    ['Jiménez', 40],
    ['Juan Viñas', 40],
    ['Tucurrique', 40],
    ['Pejibaye', 40],

    // --- Cantón Turrialba (id_canton_fk = 41)
    ['Turrialba', 41],
    ['La Suiza', 41],
    ['Peralta', 41],
    ['Santa Cruz', 41],
    ['Santa Teresita', 41],
    ['Pavones', 41],
    ['Tayutic', 41],
    ['Santa Rosa', 41],
    ['Tres Equis', 41],
    ['La Isabel', 41],
    ['Chirripó', 41],

    // --- Cantón Alvarado (id_canton_fk = 42)
    ['Pacayas', 42],
    ['Cervantes', 42],
    ['Capellades', 42],

    // --- Cantón Oreamuno (id_canton_fk = 43)
    ['San Rafael', 43],
    ['Cot', 43],
    ['Potrero Cerrado', 43],
    ['Cipreses', 43],
    ['Santa Rosa', 43],

    // --- Cantón El Guarco (id_canton_fk = 44)
    ['El Tejar', 44],
    ['San Isidro', 44],
    ['Tobosi', 44],
    ['Patio de Agua', 44],
    // ========================================================================================================================
    //                                                       Heredia
    // ========================================================================================================================
        
    // --- Cantón Heredia (id_canton_fk = 45)
    ['Heredia', 45],
    ['Mercedes', 45],
    ['San Francisco', 45],
    ['Ulloa', 45],
    ['Vara Blanca', 45],

    // --- Cantón Barva (id_canton_fk = 46)
    ['Barva', 46],
    ['San Pedro', 46],
    ['San Pablo', 46],
    ['San Roque', 46],
    ['Santa Lucía', 46],
    ['San José de la Montaña', 46],

    // --- Cantón Santo Domingo (id_canton_fk = 47)
    ['Santo Domingo', 47],
    ['San Vicente', 47],
    ['San Miguel', 47],
    ['Paracito', 47],
    ['Santo Tomás', 47],
    ['Santa Rosa', 47],
    ['Tures', 47],
    ['Pará', 47],

    // --- Cantón Santa Bárbara (id_canton_fk = 48)
    ['Santa Bárbara', 48],
    ['San Pedro', 48],
    ['San Juan', 48],
    ['Jesús', 48],
    ['Santo Domingo', 48],
    ['Purabá', 48],

    // --- Cantón San Rafael (id_canton_fk = 49)
    ['San Rafael', 49],
    ['San Josecito', 49],
    ['Santiago', 49],
    ['Los Ángeles', 49],
    ['Concepción', 49],

    // --- Cantón San Isidro (id_canton_fk = 50)
    ['San Isidro', 50],
    ['San Josecito', 50],
    ['Concepción', 50],
    ['San Francisco', 50],

    // --- Cantón Belén (id_canton_fk = 51)
    ['San Antonio', 51],
    ['La Ribera', 51],
    ['La Asunción', 51],

    // --- Cantón Flores (id_canton_fk = 52)
    ['San Joaquín', 52],
    ['Barrantes', 52],
    ['Llorente', 52],

    // --- Cantón San Pablo (id_canton_fk = 53)
    ['San Pablo', 53],
    ['Rincón de Sabanilla', 53],

    // --- Cantón Sarapiquí (id_canton_fk = 54)
    ['Puerto Viejo', 54],
    ['La Virgen', 54],
    ['Horquetas', 54],
    ['Llanuras del Gaspar', 54],
    ['Cureña', 54],
    // ========================================================================================================================
    //                                                       Guanacaste
    // ========================================================================================================================
        
    // --- Cantón Liberia (id_canton_fk = 55)
    ['Liberia', 55],
    ['Cañas Dulces', 55],
    ['Mayorga', 55],
    ['Nacascolo', 55],
    ['Curubandé', 55],

    // --- Cantón Nicoya (id_canton_fk = 56)
    ['Nicoya', 56],
    ['Mansión', 56],
    ['San Antonio', 56],
    ['Quebrada Honda', 56],
    ['Sámara', 56],
    ['Nosara', 56],
    ['Belén de Nosarita', 56],

    // --- Cantón Santa Cruz (id_canton_fk = 57)
    ['Santa Cruz', 57],
    ['Bolsón', 57],
    ['Veintisiete de Abril', 57],
    ['Tempate', 57],
    ['Cartagena', 57],
    ['Cuajiniquil', 57],
    ['Diriá', 57],
    ['Cabo Velas', 57],
    ['Tamarindo', 57],

    // --- Cantón Bagaces (id_canton_fk = 58)
    ['Bagaces', 58],
    ['Fortuna', 58],
    ['Mogote', 58],
    ['Río Naranjo', 58],

    // --- Cantón Carrillo (id_canton_fk = 59)
    ['Filadelfia', 59],
    ['Palmira', 59],
    ['Sardinal', 59],
    ['Belén', 59],

    // --- Cantón Cañas (id_canton_fk = 60)
    ['Cañas', 60],
    ['Palmira', 60],
    ['San Miguel', 60],
    ['Bebedero', 60],
    ['Porozal', 60],

    // --- Cantón Abangares (id_canton_fk = 61)
    ['Las Juntas', 61],
    ['Sierra', 61],
    ['San Juan', 61],
    ['Colorado', 61],

    // --- Cantón Tilarán (id_canton_fk = 62)
    ['Tilarán', 62],
    ['Quebrada Grande', 62],
    ['Tronadora', 62],
    ['Santa Rosa', 62],
    ['Líbano', 62],
    ['Tierras Morenas', 62],
    ['Arenal', 62],

    // --- Cantón Nandayure (id_canton_fk = 63)
    ['Carmona', 63],
    ['Santa Rita', 63],
    ['Zapotal', 63],
    ['San Pablo', 63],
    ['Porvenir', 63],
    ['Bejuco', 63],


    // --- Cantón La Cruz (id_canton_fk = 64)
    ['La Cruz', 64],
    ['Santa Cecilia', 64],
    ['Santa Elena', 64],
    ['Garita', 64],

    // --- Cantón Hojancha (id_canton_fk = 65)
    ['Hojancha', 65],
    ['Monte Romo', 65],
    ['Puerto Carrillo', 65],
    ['Huacas', 65],
    ['Matambú (Hojancha)', 65],

    // ========================================================================================================================
    //                                                       Puntarenas
    // ========================================================================================================================
        
    // --- Cantón Puntarenas (id_canton_fk = 66)
    ['Puntarenas', 66],
    ['Pitahaya', 66],
    ['Chomes', 66],
    ['Lepanto', 66],
    ['Paquera', 66],
    ['Manzanillo', 66],
    ['Guacimal', 66],
    ['Barranca', 66],
    ['Monte Verde', 66],
    ['Isla del Coco', 66],
    ['Cóbano', 66],
    ['Chacarita', 66],
    ['Acapulco', 66],
    ['El Roble', 66],
    ['Arancibia', 66],
    ['Chira', 66],



    // --- Cantón Esparza (id_canton_fk = 67)

    ['Espíritu Santo', 67],
    ['San Juan Grande', 67],
    ['Macacona', 67],
    ['San Rafael', 67],
    ['San Jerónimo', 67],
    ['Caldera', 67],
    


    // --- Cantón Buenos Aires (id_canton_fk = 68)
    ['Buenos Aires', 68],
    ['Volcán', 68],
    ['Potrero Grande', 68],
    ['Boruca', 68],
    ['Brunka', 68],
    ['Pilas', 68],
    ['Colinas', 68],
    ['Chánguena', 68],
    ['Biolley', 68],

    // --- Cantón Montes de Oro (id_canton_fk = 69)
    ['Miramar', 69],
    ['La Unión', 69],
    ['San Isidro', 69],
    ['Quebrada Honda', 69],
    ['Jaris', 69],

    // --- Cantón Osa (id_canton_fk = 70)
    ['Puerto Cortés', 70],
    ['Palmar', 70],
    ['Sierpe', 70],
    ['Bahía Ballena', 70],
    ['Bahía Drake', 70],

    // --- Cantón Quepos (id_canton_fk = 71)
    ['Quepos', 71],
    ['Savegre', 71],
    ['Naranjito', 71],

    // --- Cantón Golfito (id_canton_fk = 72)
  ['Golfito', 72],
  ['Guaycará', 72],
  ['Puerto Jiménez', 72],
  ['Pavón', 72],

    // --- Cantón Coto Brus (id_canton_fk = 73)
    ['San Vito', 73],
    ['Sabalito', 73],
    ['Agua Buena', 73],
    ['Limonal', 73],
    ['Pittier', 73],
    ['Gutiérrez Braun', 73],

    // --- Cantón Parrita (id_canton_fk = 74)
    ['Parrita', 74],
    ['Guadalupe', 74],
    ['Laguna', 74],

    // --- Cantón Corredores (id_canton_fk = 75)
    ['Corredores', 75],
    ['La Cuesta', 75],
    ['Canoas', 75],
    ['Laurel', 75],

    // --- Cantón Garabito (id_canton_fk = 76)
    ['Jacó', 76],
    ['Tárcoles', 76],

    // --- Cantón Monteverde (id_canton_fk = 77)
    ['Monteverde', 77],

    // ========================================================================================================================
    //                                                       Limon
    // ========================================================================================================================
            
    // --- Cantón Limón (id_canton_fk = 78)
    ['Limón', 78],
    ['Valle La Estrella', 78],
    ['Río Blanco', 78],
    ['Matama', 78],

    // --- Cantón Pococí (id_canton_fk = 79)
    ['Guápiles', 79],
    ['Jiménez', 79],
    ['La Rita', 79],
    ['Roxana', 79],
    ['Cariari', 79],
    ['Colorado', 79],
    ['La Colonia', 79],

    // --- Cantón Siquirres (id_canton_fk = 80)
    ['Siquirres', 80],
    ['Pacuarito', 80],
    ['Florida', 80],
    ['Germania', 80],
    ['Cairo', 80],
    ['Alegría', 80],
    ['Reventazón', 80],

    // --- Cantón Talamanca (id_canton_fk = 81)
    ['Bratsi', 81],
    ['Sixaola', 81],
    ['Cahuita', 81],
    ['Puerto Viejo de Talamanca', 81],

    // --- Cantón Matina (id_canton_fk = 82)
    ['Matina', 82],
    ['Batán', 82],
    ['Carrandí', 82],

    // --- Cantón Guácimo (id_canton_fk = 83)
    ['Guácimo', 83],
    ['Mercedes', 83],
    ['Pocora', 83],
    ['Río Jiménez', 83],
    ['Duacarí', 83]

 
  ];

  try {
    const badRows = distritos.filter(r => !Array.isArray(r) || r.length !== 2);
    if (badRows.length > 0) {
      console.error('Se encontraron filas malformadas en distritos:', badRows);
      throw new Error('Filas malformadas en array de distritos');
    }

    const values = distritos.map(d => `('${d[0]}', ${d[1]})`).join(", ");
    const query = `
      INSERT INTO dbo.distritos (nombre_distrito, id_canton_fk)
      VALUES ${values};
    `;
    await connection.request().query(query);

    console.log("Distritos insertados correctamente.");
  } catch (err) {
    console.error("Error al insertar distritos :", err);
  }
}

export default insertDistritos;

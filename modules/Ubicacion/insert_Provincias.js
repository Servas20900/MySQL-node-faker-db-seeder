import connection from "../../db/connection.js";

async function insertProvincias() {
  const provincias = [
    "San José",
    "Alajuela",
    "Cartago",
    "Heredia",
    "Guanacaste",
    "Puntarenas",
    "Limón"
  ];

  try {
    const values = provincias.map(p => `('${p}')`).join(", ");
    const query = `
      INSERT INTO dbo.provincias (nombre_provincia)
      VALUES ${values};
    `;
    await connection.request().query(query);
    console.log(" Provincias insertadas correctamente.");
  } catch (err) {
    console.error(" Error al insertar provincias:", err);
  }
}

export default insertProvincias;

import connection from "../../db/connection.js";

const puestos = [
  ["Gerente", "Encargado general"],
  ["Cocinero", "Preparación de alimentos"],
  ["Mesero", "Atención a clientes"],
  ["Bodeguero", "Manejo de inventario"]
];

async function insertPuestos() {
  try {
    const pool = await connection; // asegúrate de usar el pool de conexión activo

    // Sanitizar comillas simples para evitar errores SQL
    const valuesStr = puestos
      .map(([nombre, descripcion]) => 
        `('${nombre.replace(/'/g, "''")}', '${descripcion.replace(/'/g, "''")}')`
      )
      .join(", ");

    const query = `
      INSERT INTO puesto (nombre_puesto, descripcion)
      VALUES ${valuesStr};
    `;

    await pool.request().query(query);
    console.log(" Puestos insertados correctamente.");
  } catch (err) {
    console.error(" Error al insertar puestos:", err);
  }
}

export default insertPuestos;

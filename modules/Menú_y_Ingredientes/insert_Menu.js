import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 500;
const BATCH_SIZE = 500;

async function insertMenu() {
  try {
    const pool = await connection; // obtener el pool activo de SQL Server
    console.log(`Insertando ${TOTAL} platillos en tandas de ${BATCH_SIZE}...`);

    for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
      const values = [];
      const currentBatchSize = Math.min(BATCH_SIZE, TOTAL - i);

      for (let j = 0; j < currentBatchSize; j++) {
        const nombre = faker.commerce.productName();
        const precio = faker.number.int({ min: 1500, max: 6000 });
        const descripcion = faker.commerce.productDescription();

        // Escapar comillas simples para evitar errores en SQL Server
        const safe = (str) => str.replace(/'/g, "''");

        values.push([safe(nombre), precio, safe(descripcion)]);
      }

      const valuesStr = values
        .map((v) => `('${v[0]}', ${v[1]}, '${v[2]}')`)
        .join(", ");

      const query = `
        INSERT INTO menu (nombre_platillo, precio, descripcion)
        VALUES ${valuesStr};
      `;

      await pool.request().query(query);

      const completed = i + currentBatchSize;
      const percentage = ((completed / TOTAL) * 100).toFixed(2);
      console.log(` Insertados ${completed} platillos (${percentage}%)`);
    }

    console.log(" Inserción de menú finalizada correctamente.");
  } catch (err) {
    console.error(" Error al insertar platillos del menú:", err);
  }
}

export default insertMenu;

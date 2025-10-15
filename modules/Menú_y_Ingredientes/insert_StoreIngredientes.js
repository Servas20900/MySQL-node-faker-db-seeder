import sql from "mssql";
import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 2000;
const BATCH_SIZE = 1000;

async function insertIngredientes() {
  try {
    const pool = await connection;
    console.log(`Iniciando inserción de ${TOTAL} ingredientes en tandas de ${BATCH_SIZE}...`);

    for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
      const values = [];
      const currentBatchSize = Math.min(BATCH_SIZE, TOTAL - i);

      for (let j = 0; j < currentBatchSize; j++) {
        // Escapado de comillas simples para SQL Server
        const safe = (str) => str.replace(/'/g, "''");

        const nombre = safe(faker.food.ingredient());
        const cantidad = faker.number.int({ min: 10, max: 200 });

        values.push([nombre, cantidad]);
      }

      const valuesStr = values.map(v => `('${v[0]}', ${v[1]})`).join(", ");
      const query = `
        INSERT INTO store_ingrediente (nombre_ingrediente, cantidad)
        VALUES ${valuesStr};
      `;

      await pool.request().query(query);

      const completed = i + currentBatchSize;
      const percentage = ((completed / TOTAL) * 100).toFixed(2);
      console.log(` Insertados ${completed} ingredientes (${percentage}%)`);
    }

    console.log(" Inserción de ingredientes finalizada correctamente.");
  } catch (err) {
    console.error(" Error al insertar ingredientes:", err);
  }
}

export default insertIngredientes;

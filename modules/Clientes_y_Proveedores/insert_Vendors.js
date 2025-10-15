import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 10000;
const MAX_DISTRITO_ID = 492;
const BATCH_SIZE = 1000;

async function insertVendors() {
  console.log(` Iniciando inserción de ${TOTAL} vendors en tandas de ${BATCH_SIZE}...`);

  try {
    const pool = await connection; // usa el pool de conexión exportado en connection.js

    for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
      const values = [];
      const currentBatchSize = Math.min(BATCH_SIZE, TOTAL - i);

      for (let j = 0; j < currentBatchSize; j++) {
        const nombre = faker.company.name().replace(/'/g, ""); // evitar errores por comillas
        const telefono = faker.string.numeric(8);
        const email = faker.internet.email({ firstName: nombre }).replace(/'/g, "");
        const distritoId = faker.number.int({ min: 1, max: MAX_DISTRITO_ID });

        values.push(`('${nombre}', '${telefono}', '${email}', ${distritoId})`);
      }

      const query = `
        INSERT INTO vendor (nombre_proveedor, telefono, email, id_distrito_fk)
        VALUES ${values.join(", ")};
      `;

      await pool.request().query(query);

      const completed = i + currentBatchSize;
      const percentage = ((completed / TOTAL) * 100).toFixed(2);
      console.log(` Insertados ${completed} vendors (${percentage}%)`);
    }

    console.log(" Inserción de vendors finalizada correctamente.");

  } catch (err) {
    console.error(" Error durante la inserción de vendors:", err);
  }
}

export default insertVendors;

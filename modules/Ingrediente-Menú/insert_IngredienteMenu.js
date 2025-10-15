import sql from "mssql";
import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 500;
const BATCH_SIZE = 500;
const MAX_PLATILLO_ID = 500;
const MAX_INGREDIENTE_ID = 500;

async function insertIngredienteMenu() {
  try {
    const pool = await connection;
    console.log(`Iniciando inserción de ${TOTAL} relaciones ingrediente-menú...`);

    for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
      const values = [];
      const combinaciones = new Set(); 
      const currentBatchSize = Math.min(BATCH_SIZE, TOTAL - i);

      for (let j = 0; j < currentBatchSize; j++) {
        let platilloId, ingredienteId, key;

        do {
          platilloId = faker.number.int({ min: 1, max: MAX_PLATILLO_ID });
          ingredienteId = faker.number.int({ min: 1, max: MAX_INGREDIENTE_ID });
          key = `${platilloId}-${ingredienteId}`;
        } while (combinaciones.has(key));

        combinaciones.add(key);

        const cantidadUtilizada = faker.number.int({ min: 1, max: 5 });
        values.push([platilloId, ingredienteId, cantidadUtilizada]);
      }

      const valuesStr = values.map(v => `(${v[0]}, ${v[1]}, ${v[2]})`).join(", ");
      const query = `
        INSERT INTO ingrediente_menu (id_platillo_fk, id_ingrediente_fk, cantidad_utilizada)
        VALUES ${valuesStr};
      `;

      await pool.request().query(query);

      const completed = i + currentBatchSize;
      const percentage = ((completed / TOTAL) * 100).toFixed(2);
      console.log(` Insertadas ${completed} relaciones (${percentage}%)`);
    }

    console.log(" Inserción de relaciones ingrediente-menú finalizada correctamente.");
  } catch (err) {
    console.error(" Error al insertar relaciones ingrediente-menú:", err);
  }
}

export default insertIngredienteMenu;

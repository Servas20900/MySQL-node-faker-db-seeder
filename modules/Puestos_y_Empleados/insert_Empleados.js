import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 2000;
const MAX_PUESTO_ID = 4;
const BATCH_SIZE = 1000;

async function insertEmpleados() {
  try {
    const pool = await connection; // obtiene el pool de conexión mssql
    console.log(`Insertando ${TOTAL} empleados en tandas de ${BATCH_SIZE}...`);

    for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
      const values = [];
      const currentBatchSize = Math.min(BATCH_SIZE, TOTAL - i);

      for (let j = 0; j < currentBatchSize; j++) {
        const nombre = faker.person.firstName();
        const apellido1 = faker.person.lastName().split(" ")[0];
        const apellido2 = faker.person.lastName().split(" ")[0];
        const puestoId = faker.number.int({ min: 1, max: MAX_PUESTO_ID });
        const salario = faker.number.int({ min: 500000, max: 1500000 });
        const telefono = faker.string.numeric(8);
        const email = faker.internet.email({ firstName: nombre, lastName: apellido1 });

        // Escapar comillas simples para SQL Server
        const safe = (str) => str.replace(/'/g, "''");

        values.push([
          safe(nombre),
          safe(apellido1),
          safe(apellido2),
          puestoId,
          salario,
          safe(telefono),
          safe(email),
        ]);
      }

      // Construir VALUES en formato SQL válido
      const valuesStr = values
        .map(
          (v) =>
            `('${v[0]}', '${v[1]}', '${v[2]}', ${v[3]}, ${v[4]}, '${v[5]}', '${v[6]}')`
        )
        .join(", ");

      const query = `
        INSERT INTO empleado
        (nombre, primer_apellido, segundo_apellido, id_puesto_fk, salario, telefono, email)
        VALUES ${valuesStr};
      `;

      await pool.request().query(query);

      const completed = i + currentBatchSize;
      const percentage = ((completed / TOTAL) * 100).toFixed(2);
      console.log(` Insertados ${completed} empleados (${percentage}%)`);
    }

    console.log(" Inserción de empleados finalizada correctamente.");
  } catch (err) {
    console.error(" Error al insertar empleados:", err);
  }
}

export default insertEmpleados;

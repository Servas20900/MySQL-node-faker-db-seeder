import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 500;
const BATCH_SIZE = 500;

async function insertClientes() {
  console.log(`Insertando ${TOTAL} clientes en tandas de ${BATCH_SIZE}...`);

  for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
    const values = [];

    for (let j = 0; j < BATCH_SIZE && i + j < TOTAL; j++) {
      const nombre = faker.person.firstName().replace(/'/g, "''");
      const apellido1 = faker.person.lastName().split(" ")[0].replace(/'/g, "''");
      const apellido2 = faker.person.lastName().split(" ")[0].replace(/'/g, "''");
      const telefono = faker.string.numeric(8);
      const email = faker.internet.email({ firstName: nombre, lastName: apellido1 }).replace(/'/g, "''");
      const distritoId = faker.number.int({ min: 1, max: 492 });

      values.push(`('${nombre}', '${apellido1}', '${apellido2}', '${telefono}', '${email}', ${distritoId})`);
    }

    const query = `
      INSERT INTO dbo.cliente (nombre, primer_apellido, segundo_apellido, telefono, email, id_distrito_fk)
      VALUES ${values.join(", ")};
    `;

    try {
      await connection.request().query(query);
      console.log(` Insertados ${Math.min(i + BATCH_SIZE, TOTAL)} registros`);
    } catch (err) {
      console.error(" Error al insertar clientes:", err);
      break;
    }
  }

  console.log(" Inserción de clientes finalizada correctamente.");
}

export default insertClientes;

import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 10500; 

async function insertProvincias() {
  const values = [];
  for (let i = 0; i < TOTAL; i++) {
    values.push(faker.location.state());
  }

  const valuesStr = values.map(v => `('${v.replace(/'/g, "''")}')`).join(', ');
  const query = `INSERT INTO provincias (nombre_provincia) VALUES ${valuesStr};`;
  await connection.request().query(query);

  console.log(`Insertadas ${TOTAL} provincias`);
}

export default insertProvincias;
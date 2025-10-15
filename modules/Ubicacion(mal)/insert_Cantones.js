import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 10500;
const MAX_PROVINCIA_ID = 10500; 

async function insertCantones() {
  const values = [];
  for (let i = 0; i < TOTAL; i++) {
    const provinciaId = faker.number.int({ min: 1, max: MAX_PROVINCIA_ID });
    values.push([faker.location.city(), provinciaId]);
  }

  const valuesStr = values.map(v => `('${v[0].replace(/'/g, "''")}', ${v[1]})`).join(', ');
  const query = `INSERT INTO cantones (nombre_canton, id_provincia_fk) VALUES ${valuesStr};`;
  await connection.request().query(query);

  console.log(`Insertados ${TOTAL} cantones`);
}

export default insertCantones;
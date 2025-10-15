import { fakerES as faker } from "@faker-js/faker";
import connection from "../../db/connection.js";

const TOTAL = 10500; 
const MAX_CANTON_ID = 10500; 

async function insertDistritos() {
  const values = [];
  for (let i = 0; i < TOTAL; i++) {
    const cantonId = faker.number.int({ min: 1, max: MAX_CANTON_ID });
    values.push([faker.location.county(), cantonId]);
  }

  const valuesStr = values.map(v => `('${v[0].replace(/'/g, "''")}', ${v[1]})`).join(', ');
  const query = `INSERT INTO distritos (nombre_distrito, id_canton_fk) VALUES ${valuesStr};`;
  await connection.request().query(query);

  console.log(`Insertados ${TOTAL} distritos`);
}

export default insertDistritos;
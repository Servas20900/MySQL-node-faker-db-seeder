import sql from "mssql";

const config = {
  user: "sa",                     
  password: "Root1234!",          
  database: "Restaurante_Grupo8", 
  server: "159.223.194.157",            
  port: 1433,                     
  options: {
    encrypt: false,               
    trustServerCertificate: true, 
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

const connection = await sql.connect(config);

export default connection;

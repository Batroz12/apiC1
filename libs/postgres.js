const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'divine123456',
    database: 'concesionaria'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;

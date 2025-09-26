require('dotenv').config();
const { Sequelize } = require('sequelize');

// Instancia de conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME = 'BD1',        // nombre de la BD
  process.env.DB_USER = 'Jos',   // usuario
  process.env.DB_PASSWORD = 'Jos2629*', // contraseña
  {
    host: process.env.DB_HOST = 'localhost',
    port: process.env.DB_PORT = 5432,
    dialect: 'postgres'
  }
);

module.exports = sequelize;
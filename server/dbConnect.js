const Sequelize = require("sequelize");
require("dotenv").config();
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306, // Default MySQL port
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = sequelize;

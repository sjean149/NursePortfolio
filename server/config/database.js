const { Sequelize } = require("sequelize");
require("dotenv").config();

// Render (and most hosts) provide a single DATABASE_URL.
// Locally you can either set DATABASE_URL or the individual DB_* variables.
const useSSL =
  process.env.DB_SSL === "true" ||
  (process.env.DB_SSL !== "false" && process.env.NODE_ENV === "production");

const options = {
  dialect: "postgres",
  logging: false,
  dialectOptions: useSSL
    ? { ssl: { require: true, rejectUnauthorized: false } }
    : {},
};

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, options)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        ...options,
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
      },
    );

module.exports = sequelize;

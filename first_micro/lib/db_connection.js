const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.env.DB_NAME,
  password: process.env.DB_PASS,
  multipleStatements: true,
});

module.exports = con;

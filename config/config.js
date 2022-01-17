require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "bfd7943bd514f8",
    password: "f1c5f393",
    database: "heroku_ebf21452f1372da",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  },
};

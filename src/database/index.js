const Sequelize = require("sequelize");
// const config = require("../config/database");
const dotenv = require("dotenv");

dotenv.config();
const Pizza = require("../model/Pizzas");

const connection = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: "postgres",
  define: {
    timestamps: true,
    underscored: true,
  },
});

(async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

Pizza.init(connection);
module.exports = connection;

const Sequelize = require("sequelize");
const config = require("../config/database");

export const connection = new Sequelize(config);
module.exports = connection;

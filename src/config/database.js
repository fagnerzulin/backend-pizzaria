const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  url: process.env.DB_CONNECTION_STRING,
  dialect: "postgres",
  define: {
    timestamps: true,
    underscored: true,
  },
};

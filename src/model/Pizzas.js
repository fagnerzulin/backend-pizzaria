const { Model, DataTypes } = require("sequelize");

class Pizza extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        preco: DataTypes.INTEGER,
        nome_imagem: DataTypes.STRING,
        tipo: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
module.exports = Pizza;

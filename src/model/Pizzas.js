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
  static associate(models) {
    this.belongsToMany(models.Ingrediente, {
      through: "pizzas-ingredientes",
      foreignKey: "pizza_id",
      as: "ingredientes",
    });
  }
}
module.exports = Pizza;

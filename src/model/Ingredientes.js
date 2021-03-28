const { Model, DataTypes } = require("sequelize");

class Ingrediente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Pizza, {
      through: "pizzas-ingredientes",
      foreignKey: "ingrediente_id",
      as: "pizzas",
    });
  }
}
module.exports = Ingrediente;

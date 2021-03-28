const Ingredientes = require("../model/Ingredientes");
const Pizzas = require("../model/Pizzas");

module.exports = {
  async index(req, res) {
    try {
      const { id } = req.params;

      const pizza = await Pizzas.findByPk(id, {
        include: {
          association: "ingredientes",
          attributes: ["nome"],
          through: {
            attributes: [],
          },
        },
      });

      return res.status(200).json(pizza.ingredientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async store(req, res) {
    try {
      const { id } = req.params;
      const nome = req.body.nome.toLowerCase().trim();

      const pizza = await Pizzas.findByPk(id);

      if (!pizza) {
        return res.status(400).json({ error: "Pizza não encontrada" });
      }

      const [ingrediente] = await Ingredientes.findOrCreate({
        where: { nome },
      });

      await pizza.addIngredientes(ingrediente);

      return res.status(200).json(ingrediente);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};

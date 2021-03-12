const Pizzas = require("../model/Pizzas");
module.exports = {
  async index(req, res) {
    try {
      const pizzas = await Pizzas.findAll();

      return res.status(200).json(pizzas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async store(req, res) {
    try {
      const { nome, preco, nome_imagem, tipo } = req.body;
      const pizza = await Pizzas.create({ nome, preco, nome_imagem, tipo });

      return res.status(200).json(pizza);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};

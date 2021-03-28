const Pizzas = require("../model/Pizzas");
const precosPorTipo = require("../utils/precosPorTipo");

module.exports = {
  async index(req, res) {
    try {
      const pizzas = await Pizzas.findAll({
        include: {
          association: "ingredientes",
          attributes: ["nome"],
          through: {
            attributes: [],
          },
        },
      });

      const resposta = pizzas.map((pizza) => {
        const { id, nome, preco, nome_imagem, tipo, ingredientes } = pizza;
        const precos = precosPorTipo.valores(preco, tipo);
        const novoIngredientes = ingredientes.map(
          (ingrediente) => ingrediente.nome
        );
        return {
          id,
          nome,
          precos,
          nome_imagem,
          ingredientes: novoIngredientes,
        };
      });

      return res.status(200).json(resposta);
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

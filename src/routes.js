const express = require("express");
const IngredientesController = require("./controllers/IngredientesController");
const PizzasController = require("./controllers/PizzasController");

const routes = express.Router();

routes.get("/pizzas", PizzasController.index);
routes.post("/pizzas", PizzasController.store);

routes.get("/pizzas/:id/ingredientes", IngredientesController.index);
routes.post("/pizzas/:id/ingredientes", IngredientesController.store);

module.exports = routes;

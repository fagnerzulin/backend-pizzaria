const express = require("express");
const PizzasController = require("./controllers/PizzasController");

const routes = express.Router();

routes.get("/pizzas", PizzasController.index);
routes.post("/pizzas", PizzasController.store);

module.exports = routes;

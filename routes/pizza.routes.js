const express = require('express')
const PizzaSchema = require("../models/Pizza");

const pizzaRoutes = express.Router();


pizzaRoutes.get('/', (req, res) => {
    PizzaSchema.find({}, (err, pizzas) => {
        if (err) {
            res.send('Pizzas not found')
        } else {
            res.json(pizzas)

        }
    })
});

module.exports = pizzaRoutes;


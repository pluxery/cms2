const express = require('express')
const PizzaSchema = require("../models/Pizza");

const pizzaRoutes = express.Router();


pizzaRoutes.get("/", async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        res.json(pizzas)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = pizzaRoutes;


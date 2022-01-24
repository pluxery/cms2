
const {Router} = require("express");
const pizzaRoutes = Router();
const Pizza = require("../models/Pizza");


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


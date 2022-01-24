const express = require('express')
const Drink = require("../models/Drink");


const drinkRoutes = express.Router();


drinkRoutes.get("/", async (req, res) => {
    try {
        const drinks = await Drink.find({});
        res.json(drinks)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})


module.exports = drinkRoutes;
const express = require('express')

const Dessert = require("../models/Dessert");


const dessertRoutes = express.Router();


dessertRoutes.get("/", async (req, res) => {
    try {
        const desserts = await Dessert.find({});
        res.json(desserts)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})


module.exports = dessertRoutes;
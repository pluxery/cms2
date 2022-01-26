
const {Router} = require("express");
const ComboRoutes = Router();
const Combo = require("../models/Combo");


ComboRoutes.get("/", async (req, res) => {
    try {
        const combos = await Combo.find({});
        res.json(combos)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = ComboRoutes;
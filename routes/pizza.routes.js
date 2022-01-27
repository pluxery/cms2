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

pizzaRoutes.post("/", (req, res) => {
    const pizza = new Pizza(req.body);
    pizza.save((err) => {
        if (err) return res.status(400).json({ message: err.message});
        return res.status(200).json({ success: true });
    });
});

pizzaRoutes.post("/find/:id", async (req, res) => {
    try {
        const pizza = await Pizza.findOne({_id: req.params.id});
        res.json(pizza)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

pizzaRoutes.delete("/delete/:id",(req, res) => {
    Pizza.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
        if (error) res.send(error);
        return res.json(deletedItem);
    });
});

pizzaRoutes.put("/update/:id", (req, res) => {
    Pizza.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err) => {
            if (err) return res.status(400).json({  message: err.message });
            return res.status(200).json({ success: true });
        }
    );
});


module.exports = pizzaRoutes;

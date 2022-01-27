const express = require("express");
const Order = require("../models/Order");
const orderRouter = express.Router();
const {check, validationResult} = require('express-validator')

orderRouter.get("/", async (req, res) => {
    try {
        const orders = await Order.find({});
        orders.sort()
        res.json(orders)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

orderRouter.post('/', [
        check('email', 'Некорректный email').isEmail(),
        check('phone', 'Некорректный номер телефона').isMobilePhone(),],
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные'
                })
            }
            const newOrder = new Order({
                phone: req.body.phone,
                userId: req.body.userId,
                orderItems: req.body.orderItems,
                uniq: req.body.uniq,
                address: req.body.address,
                date: req.body.date,
                totalPrice: req.body.totalPrice,
                email: req.body.email,
                name: req.body.name,
            })
            await newOrder.save((err) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send(req.body)
                }
            })
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})

        }
    })


orderRouter.post("/user", async (req, res) => {
    const {userId} = req.body;
    try {
        const orders = await Order.find({userId});
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message: "error",
            error: error.stack,
        });
    }
})

orderRouter.delete("/delete/:id", (req, res) => {
    Order.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
        if (error) {
            res.send(error);
        }
        return res.json(deletedItem);
    });
});

module.exports = orderRouter;
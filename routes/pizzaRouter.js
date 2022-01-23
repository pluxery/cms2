const express = require('express')
const {Pizza} = require('../models/Pizza')

const urlencodedParser = express.urlencoded({extended: false});


const pizzaRouter = express.Router();


pizzaRouter.get('/', (req, res) => {
    Pizza.find({}, (err, pizza) => {
        if (err) {
            res.send('Pizzas not found')
        } else {
            res.send(pizza)
        }
    })
});

module.exports = pizzaRouter;
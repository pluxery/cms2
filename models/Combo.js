const {Schema, model} = require('mongoose')

const schema = new Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    compound: {type: String, required: true}
})

module.exports = model('Combo', schema)
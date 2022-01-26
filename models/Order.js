const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const orderSchema = new Schema(
    {
        phone: String,
        userId: String,
        orderItems: [],
        uniq: [],
        address: String,
        date: String,
        totalPrice: Number,
        email: String,
        name: String,

    }
);

module.exports = mongoose.model("order", orderSchema);

const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const orderSchema = new Schema(
    {
        phone: {type: String,required:true},
        userId: String,
        orderItems: {type:[], required: true},
        uniq: {type:[], required: true},
        address:{type: String,required:true},
        totalPrice: Number,
        email: String,
        name: {type: String,required:true},

    },{
            timestamps : true
    }
);

module.exports = mongoose.model("order", orderSchema);

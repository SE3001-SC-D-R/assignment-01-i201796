const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    product : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const CartModel = mongoose.model("carts",CartSchema)
module.exports = CartModel
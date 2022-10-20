const mongoose = require("mongoose")

const CheckoutSchema = new mongoose.Schema({
    country : {
        type: String,
        required: true
    },
    firstname : {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    orderNote: {
        type: String,
    }
});

const CheckoutModel = mongoose.model("checkout-infos",CheckoutSchema)
module.exports = CheckoutModel
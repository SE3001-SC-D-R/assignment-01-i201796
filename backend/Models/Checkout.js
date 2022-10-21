const mongoose = require("mongoose")

const currentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}

const cuDate = currentDate()

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
    },
    orderProducts : {
        type: Object,
        required : true
    },
    payment: {
        type: String,
        required: true
    },
    totalAmount:{
        type: Number,
        required: true
    }, 
    date: {
        type : Date,
        default : cuDate
    }
});

const CheckoutModel = mongoose.model("checkout-infos",CheckoutSchema)
module.exports = CheckoutModel
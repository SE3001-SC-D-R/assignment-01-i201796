const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CheckoutModel = require("./Models/Checkout");
const CartModel = require("./Models/Cart")
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://saraq268:4n4XSMe1IE8vukPN@cluster0.l2i8oag.mongodb.net/armoire?retryWrites=true&w=majority"
);

const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/getCartItems", (req, res) => {
  CartModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/addBillingInfo", async (req, res) => {
  const billInfo = req.body;
  const newBill = new CheckoutModel(billInfo);
  await newBill.save();
  res.json(newBill);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

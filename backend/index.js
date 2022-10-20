const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CheckoutModel = require("./Models/Checkout");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://nolifenoodler:nolife_12345678@checkout.nqorw3h.mongodb.net/Checkout?retryWrites=true&w=majority"
);

const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/getBillingInfo", (req, res) => {
  CheckoutModel.find({}, (err, result) => {
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

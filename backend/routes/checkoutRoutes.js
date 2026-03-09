const express = require("express");
const router = express.Router();
const cart = require("../cartData");
const products = require("../products.json");

router.post("/", (req, res) => {

  if (cart.length === 0) {
    return res.json({ message: "Cart is empty" });
  }

  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    total += product.price * item.quantity;
  });

  cart.length = 0;

  res.json({
    message: "Order placed successfully",
    totalAmount: total
  });

});

module.exports = router;
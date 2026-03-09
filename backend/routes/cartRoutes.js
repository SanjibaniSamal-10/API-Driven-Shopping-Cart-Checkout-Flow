const express = require("express");
const router = express.Router();
const products = require("../products.json");
const cart=require("../cartData");

router.post("/add", (req, res) => {
  const { productId, quantity } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const existing = cart.find(item => item.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  res.json({ message: "Product added to cart" });
});

router.get("/", (req, res) => {

  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.productId);

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.total, 0);

  res.json({
    items: cartItems,
    totalPrice
  });
});

router.delete("/:productId", (req, res) => {

  const id = parseInt(req.params.productId);

  const index = cart.findIndex(item => item.productId === id);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  res.json({ message: "Item removed" });
});

router.delete("/", (req, res) => {
  cart.length=0;
  res.json({ message: "Cart cleared" });
});

module.exports = router;
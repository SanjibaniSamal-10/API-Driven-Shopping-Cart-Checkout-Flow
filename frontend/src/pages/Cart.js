import React, { useEffect, useState } from "react";
import API from "../api";

function Cart() {

  const [cart, setCart] = useState([]);

  const loadCart = () => {

    API.get("/cart").then(res => {
      setCart(res.data);
    });
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = (id) => {

    API.delete(`/cart/${id}`).then(() => {
      loadCart();
    });
  };

  const checkout = () => {

    API.post("/checkout").then(res => {
      alert(res.data.message);
      loadCart();
    });
  };

  return (
  <div>

    <h2>Your Cart</h2>

    {cart.items?.map(item => (

      <div className="cart-item" key={item.productId}>

        <h3>{item.name}</h3>

        <p>Price: ₹{item.price}</p>

        <p>Quantity: {item.quantity}</p>

        <button onClick={() => removeItem(item.productId)}>
          Remove
        </button>

      </div>

    ))}

    <h3>Total: ₹{cart.totalPrice}</h3>

    <button onClick={checkout}>
      Checkout
    </button>

  </div>
);
}

export default Cart;
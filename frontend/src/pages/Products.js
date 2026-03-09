import React, { useEffect, useState } from "react";
import API from "../api";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then(res => {
      setProducts(res.data);
    });
  }, []);

  const addToCart = (id) => {

    API.post("/cart/add", {
      productId: id,
      quantity: 1
    });

    alert("Added to cart");
  };

  return (
  <div>

    <h2>Products</h2>

    <div className="products-grid">

      {products.map(p => (

        <div className="product-card" key={p.id}>

          <img src={p.image} alt={p.name} />

          <h3>{p.name}</h3>

          <p>Price: ₹{p.price}</p>

          <button onClick={() => addToCart(p.id)}>
            Add to Cart
          </button>

        </div>

      ))}

    </div>

  </div>
);
}

export default Products;
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
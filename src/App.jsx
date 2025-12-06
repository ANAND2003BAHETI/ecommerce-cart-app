import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./products";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  return (
    <div className="container">
      <h1>🛍️ E-Commerce Product Store</h1>
      <div className="content">
        <div className="products">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;

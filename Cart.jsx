import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty...</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ₹{item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>X</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

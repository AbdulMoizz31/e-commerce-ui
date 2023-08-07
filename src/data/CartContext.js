import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedCart);
  };
  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to consume the cart context
export const useCartContext = () => useContext(CartContext);

// Cart context provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Define the value of the context provider
  const contextValue = {
    cartItems,
    addToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
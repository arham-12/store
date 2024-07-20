// AuthContext.js
import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [ShowCart, setShowCart] = useState(false);
  const [CartProducts, setCartProducts] = useState([]);
  const [Product, setproduct] = useState([]);

  // Functions
  const addToCart = (Id, Title, Desc, Url, Label, Price) => {
    setCartProducts((prevCart) => [
      ...prevCart,
      {
        Id: Id,
        Title: Title,
        Desc: Desc,
        Url: Url,
        Label: Label,
        Price: Price,
      },
    ]);
    console.log(CartProducts);
  };
  return (
    <CartContext.Provider
      value={{ ShowCart, setShowCart, CartProducts, Product, addToCart ,setproduct}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

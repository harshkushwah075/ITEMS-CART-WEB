import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

import { initialProducts } from "../Data/Product";

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const products = initialProducts;

  // Add Items into cart
  const AddToCart = (product) => {
    setCart((prevCart) => {
      const ExistingItem = prevCart.find((item) => item.id === product.id);
      if (ExistingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remmove Items from Cart
  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const ExistingItem = prevCart.find((item) => item.id === productId);
      if (!ExistingItem) return prevCart;
      if (removeAll || ExistingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // Clear Cart Items or Remove All Items

  const clearCartItems = () => {
    setCart([]);
  };

  const cartCount = useMemo(() => {
    Cart.reduce((total, item) => total + item.quantity, 0);
  });

  const cartTotal = useMemo(
    () =>
      Cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [Cart]
  );

  console.log("My Cart",Cart);

  return (
    <CartContext.Provider
      value={{
        products,
        Cart,
        AddToCart,
        clearCartItems,
        removeFromCart,
        cartTotal,
        cartCount,
      }}
    >
      {props.children}
    </CartContext.Provider> 
  );
};

export const useCart = () => useContext(CartContext);

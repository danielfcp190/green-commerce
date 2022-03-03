import React, { createContext } from "react";

export const CartContext = createContext(undefined);

export function CartProvider({ children, value }) {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

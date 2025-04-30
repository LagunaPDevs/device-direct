import { createContext, useEffect, useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

// Create the context
export const CartContext = createContext();

const initialState= {
  items: []
};

// Create the provider component
export function CartProvider({ children }) {
  const [cartStorage, setCartStorage] = useLocalStorage('device-direct-cart', initialState);
  const [cartItems, setCartItems] = useState([]);


  const onAddCartItem = (item) => {
    setCartStorage({items: [...cartStorage.items, item]});
  }

  useEffect(()=> {
    const storage = JSON.stringify(cartStorage);
    const parsedStorage = JSON.parse(storage);
    setCartItems(parsedStorage.items);
  }, [cartStorage])
  
  return (
    <CartContext.Provider value={{ cartItems, onAddCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

import { createContext, useState } from "react";
import { useParams } from "react-router";

import { useCachedFetch } from "@/hooks/useCachedFetch";

import { API_PRODUCT, API_CART } from "@/constants/url-constants";

const FETCH_PRODUCT_ENDPOINT = ({ id }) =>
  `${import.meta.env.VITE_API_URL}${API_PRODUCT}/${id}`;

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const routeParams = useParams();
  const [cartErrors, setCartErrors] = useState(null);
  const [isCartLoading, setIsCartLoading] = useState(false);

  // variant selection
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  // current product info fetching
  const { data, isLoading, error } = useCachedFetch({
    url: FETCH_PRODUCT_ENDPOINT({ id: routeParams.id }),
    fetchOptions: {
      method: "GET",
    },
  });

  async function addToCart({ onAddCartItem }) {
    setIsCartLoading(true);
    const url = `${import.meta.env.VITE_API_URL}${API_CART}`;
    try {
      const payload = {
        id: data.id,
        colorCode: parseInt(selectedColor),
        storageCode: parseInt(selectedStorage),
      };

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.count) onAddCartItem(payload);
    } catch (error) {
      setCartErrors(error.message);
    } finally {
      setIsCartLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        addToCart,
        cartErrors,
        errors: error,
        isLoading,
        isCartLoading,
        product: data,
        selectedStorage,
        selectedColor,
        setSelectedColor,
        setSelectedStorage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

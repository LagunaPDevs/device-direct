import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { API_PRODUCT, API_CART } from "@/constants/url-constants";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const routeParams = useParams();
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackarMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      if (!routeParams.id) {
        setIsLoading(false);
        return;
      }
      const url = `${import.meta.env.VITE_API_URL}${API_PRODUCT}/${
        routeParams.id
      }`;
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [routeParams.id]);

  async function addToCart({ onAddCartItem }) {
    const url = `${import.meta.env.VITE_API_URL}${API_CART}`;
    try {
      const payload = {
        id: product.id,
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
      setErrors(error);
      // TODO: ERROR MESSAGE
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        errors,
        isLoading,
        product,
        addToCart,
        selectedStorage,
        selectedColor,
        setSelectedColor,
        setSelectedStorage,
        snackbarOpen,
        snackbarMessage,
        setSnackarMessage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

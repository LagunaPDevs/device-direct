import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router";

import { useSnackbar } from "notistack";

import { useCachedFetch } from "@/hooks/useCachedFetch";

import { API_PRODUCT, API_CART } from "@/constants/url-constants";

const FETCH_PRODUCT_ENDPOINT = ({ id }) =>
  `${import.meta.env.VITE_API_URL}${API_PRODUCT}/${id}`;

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const routeParams = useParams();
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

  useEffect(() => {
    setDefaultVariant(data);
  }, [data]);

  // handle add item to cart
  const { enqueueSnackbar } = useSnackbar();

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
        headers,
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.count) {
        onAddCartItem(payload);
        enqueueSnackbar("Item successfully added to cart!");
      }
    } catch (error) {
      enqueueSnackbar(error.message);
    } finally {
      setIsCartLoading(false);
    }
  }

  const setDefaultVariant = (data) => {
    if (data?.options?.colors?.length === 1)
      setSelectedColor(data.options.colors[0].code);
    if (data?.options?.storages?.length === 1)
      setSelectedStorage(data.options.storages[0].code);
  };

  return (
    <ProductContext.Provider
      value={{
        addToCart,
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

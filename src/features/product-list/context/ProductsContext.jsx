import { createContext, useEffect,  useState } from "react";

import { useCachedFetch } from "@/hooks/useCachedFetch";

import { API_PRODUCT } from "@/constants/url-constants";

const FETCH_PRODUCTS_ENDPOINT = `${import.meta.env.VITE_API_URL}${API_PRODUCT}`;

// Create the context
export const ProductsContext = createContext({
  errors: null,
  isLoading: true,
  products: [],
  refetch: () => {},
});

// Create the provider component
export function ProductsProvider({ children }) {
  const [productsCopy, setProductsCopy] = useState(null);
  const [products, setProducts] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("model");

  // products list fetching
  const { data, isLoading, error } = useCachedFetch({
    url: FETCH_PRODUCTS_ENDPOINT,
    fetchOptions: { method: "GET" },
  });

  useEffect(() => {
    setProducts(data);
    setProductsCopy(data);
  }, [data]);

  useEffect(() => {
    const productResult = products?.filter(
      (product) =>
        product[selectedFilter].toLowerCase().includes(searchInput.toLowerCase())
    );
    setProducts(productResult);
    if (searchInput === "") setProducts(productsCopy);
  }, [searchInput]);

  return (
    <ProductsContext.Provider
      value={{
        errors: error,
        isLoading,
        products,
        searchInput,
        selectedFilter,
        setSelectedFilter,
        setSearchInput,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

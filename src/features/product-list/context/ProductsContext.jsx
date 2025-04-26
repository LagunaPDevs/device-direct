import React, { createContext,  useEffect, useState } from "react";

import { API_PRODUCT } from "@/constants/url-constants";


// Create the context
export const ProductsContext = createContext({
  errors: null,
  isLoading: true,
  products: [],
  refetch: () => {},
});

// Create the provider component
export function ProductsProvider({ children }) {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productsCopy, setProductsCopy] = useState(null);
  const [products, setProducts] = useState(null);
  const [searchInput, setSearchInput] = useState("");


  const url = `${import.meta.env.VITE_API_URL}${API_PRODUCT}`;

  const fetchProducts = async () => {
    setIsLoading(true);
    setErrors(null);
    try {
      const request = await fetch(url, { method: "GET" });
      const result = await request.json();
      setProducts(result);
      setProductsCopy(result);
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  useEffect(()=>{
    const productResult = products?.filter((product)=> product.model.toLowerCase().includes(searchInput.toLowerCase()) || product.brand.toLowerCase().includes(searchInput.toLowerCase()));
    setProducts(productResult);
    if(searchInput === "") setProducts(productsCopy);

  },[searchInput])

  return (
    <ProductsContext.Provider value={{ errors, isLoading, products, refetch: fetchProducts, searchInput, setSearchInput }}>
      {children}
    </ProductsContext.Provider>
  );
}



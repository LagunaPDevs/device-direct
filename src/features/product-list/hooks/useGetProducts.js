import { useEffect, useState } from "react";

import { API_PRODUCT } from "@/constants/url-constants";

export function useGetProducts() {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  const url = `${import.meta.env.VITE_API_URL}${API_PRODUCT}`;

  useEffect(() => {
    async function fetchProducts() {
      const request = fetch(
        url,
        {
          method: "GET",
        }
      );
      (await request)
        .json()
        .then((result) => setProducts(result))
        .catch((errors) => setErrors(errors))
        .finally(() => setIsLoading(false));
    }
    fetchProducts();
  }, []);

  return { errors, isLoading, products };
}

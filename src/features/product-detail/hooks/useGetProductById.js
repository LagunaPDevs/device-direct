import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { API_PRODUCT } from "@/constants/url-constants";

export function useGetProductById() {
  const routeParams = useParams();

  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!routeParams.id) return null;
      const url = `${import.meta.env.VITE_API_URL}${API_PRODUCT}/${
        routeParams.id
      }`;
      const request = fetch(url, {
        method: "GET",
      });
      (await request)
        .json()
        .then((result) => setProduct(result))
        .catch((errors) => setErrors(errors))
        .finally(() => setIsLoading(false));
    }
    fetchProduct();
  }, []);

  return { errors, isLoading, product };
}

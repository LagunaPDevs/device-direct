import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

export function useGetProductById() {
  const context = useContext(ProductContext);
  if (!context) throw Error("ProductContext must be insided provider");
  return context;
}

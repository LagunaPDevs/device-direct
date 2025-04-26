import { useContext } from "react";

import {ProductsContext} from "@/features/product-list/context/ProductsContext";

export function useGetProducts() {
  const context = useContext(ProductsContext);
  if (!context) throw Error("ProductContext must be insided provider");
  return context;
}

import { Box } from "@mui/material";

import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";
import { useGetProducts } from "../features/product-list/hooks/useGetProducts";

export function ProductListPage() {
  const {errors, isLoading, products} = useGetProducts();
  return <Box><Breadcrumbs /></Box>;
}

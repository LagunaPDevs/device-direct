import { Box, CircularProgress } from "@mui/material";

import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";

import { useGetProducts } from "@/features/product-list/hooks/useGetProducts";
import ProductListGrid from "@/features/product-list/components/ProductListGrid";

export function ProductListPage() {
  const { errors, isLoading, products } = useGetProducts();

  if(isLoading) return <CircularProgress />
  
  return (
    <Box>
      <>
        <Breadcrumbs />
      </>
      <ProductListGrid products={products}/>
    </Box>
  );
}

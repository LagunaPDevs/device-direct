import { Box, CircularProgress } from "@mui/material";

import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";


import { useGetProducts } from "@/features/product-list/hooks/useGetProducts";
import { ProductsProvider } from "@/features/product-list/context/ProductsContext";
import ProductListGrid from "@/features/product-list/components/ProductListGrid";
import { SearchProducts } from "@/features/product-list/components/SearchProducts";

export function ProductListPage() { 
  return (
    <ProductsProvider>
      <PageContent />
    </ProductsProvider>
  );
}

function PageContent() {
  const { errors, isLoading, products } = useGetProducts();

  if (isLoading) return <CircularProgress />;

  return (
    <Box>
      <Box
        sx={{
          pb: 2,
          display: { xs: "flex" },
          flexDirection: "row",
          gap: 1,
          width: "100%",
          overflow: "auto",
          justifyContent: "space-between",
        }}
      >
        <Breadcrumbs />
        <SearchProducts />
      </Box>
      <ProductListGrid products={products} />
    </Box>
  );
}

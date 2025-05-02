import { Box } from "@mui/material";

import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";


import { useGetProducts } from "@/features/product-list/hooks/useGetProducts";
import { ProductsProvider } from "@/features/product-list/context/ProductsContext";
import ProductListGrid from "@/features/product-list/components/ProductListGrid";
import { SearchProducts } from "@/features/product-list/components/SearchProducts";
import { ProductListSkeleton } from "@/features/product-list/components/ProductListSkeleton";

export function ProductListPage() { 
  return (
    <ProductsProvider>
      <PageContent />
    </ProductsProvider>
  );
}

function PageContent() {
  const {isLoading, products } = useGetProducts();

  if (isLoading) return <ProductListSkeleton />;

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "flex" },
          flexDirection: "row",
          gap: 1,
          width: "100%",
          overflow: "auto",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Breadcrumbs />
        <SearchProducts />
      </Box>
      <ProductListGrid products={products} />
    </Box>
  );
}

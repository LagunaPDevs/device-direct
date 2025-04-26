import { Typography } from "@mui/material";

import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";

import { useGetProductById } from "@/features/product-detail/hooks/useGetProductById";

import { ProductCard } from "@/features/product-detail/components/ProductCard";
import { ProductProvider } from "@/features/product-detail/context/ProductContext";

export function ProductDetailPage() {

  return (
    <>
      <Breadcrumbs {...{ links: [{ title: "Product detail" }] }} />
      <ProductProvider>
       <PageContent />
      </ProductProvider>
    </>
  );
}

function PageContent() {
  const { isLoading, product } = useGetProductById();

  if (isLoading) return <Typography>Loading...</Typography>;
  return <ProductCard {...{product}}/>
}

import { Typography } from "@mui/material";

import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";

import { ProductCard } from "@/features/product-detail/components/ProductCard";
import { useGetProductById } from "@/features/product-detail/hooks/useGetProductById";

export function ProductDetailPage() {
  const { isLoading, product } = useGetProductById();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <>
      <Breadcrumbs {...{ links: [{ title: "Product detail" }] }} />
      <ProductCard product={product} />
    </>
  );
}

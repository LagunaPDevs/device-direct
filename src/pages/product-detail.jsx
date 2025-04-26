import { Breadcrumbs } from "@/components/@extended/Breadcrumbs";

import {ProductCard} from "@/features/product-detail/components/ProductCard";
import { useGetProductById } from "@/features/product-detail/hooks/useGetProductById";

export function ProductDetailPage() {
  const { product } = useGetProductById();
  return (
    <>
      <Breadcrumbs {...{ links: [{ title: "Product detail" }] }} />
      <ProductCard product={product} />
    </>
  );
}

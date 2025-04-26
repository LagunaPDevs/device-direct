import { Loadable } from "@/components/loaders/Loadable";

import { MainLayout } from "@/layout/MainLayout";

import { ProductDetailPage } from "@/pages/product-detail";
import { ProductListPage } from "@/pages/product-list";

const ProductDetail = Loadable(() => <ProductDetailPage />);
const ProductList = Loadable(() => <ProductListPage />);

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "product-detail",
      element: <ProductDetail />,
    },
  ],
};

import {test, describe, expect, screen, render } from "@testing-library/react";

import { ProductCard } from "@/features/product-detail/components/ProductCard";

import { PRODUCT_DETAIL_SAMPLE_DATA } from "@/data/product-detail-sample-data";

describe("render ProductCard", () => {
  test("render ProductCard if product is not null", () => {
    render(<ProductCard product={PRODUCT_DETAIL_SAMPLE_DATA} />);

    const productCardEl = screen.getByLabelText("Product Card");
    const productNotFoundEl = screen.queryByText("Product not found");

    expect(productCardEl).toBeInTheDocument();
    expect(productNotFoundEl).not.toBeInTheDocument();
  });

  test("do not render ProductCard if product is null", () => {
    render(<ProductCard />);

    const productCardEl = screen.queryByLabelText("Product Card");
    const productNotFoundEl = screen.getByText("Product not found");

    expect(productCardEl).not.toBeInTheDocument();
    expect(productNotFoundEl).toBeInTheDocument();
  });
});

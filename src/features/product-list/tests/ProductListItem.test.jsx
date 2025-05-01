import { describe, test, expect, screen, render } from "@/utils/testing/testing-library-utils";

import { ProductListItem } from "@/features/product-list/components/ProductListItem";

import { PRODUCT_LIST_SAMPLE_DATA } from "@/data/product-list-sample-data";

describe("render product item", () => {
  test("renders product if is not empty", () => {
    render(<ProductListItem product={PRODUCT_LIST_SAMPLE_DATA[0]} />);

    const productItemEl = screen.getByLabelText("Product Item");
    const emptyProductEl = screen.queryByText("Product Unknown");

    expect(productItemEl).toBeInTheDocument();
    expect(emptyProductEl).not.toBeInTheDocument();
  });

  test("do not render product if it is empty", () => {
    render(<ProductListItem />);

    const productItemEl = screen.queryByLabelText("Product Item");
    const emptyProductEl = screen.getByText("Product Unknown");

    expect(productItemEl).not.toBeInTheDocument();
    expect(emptyProductEl).toBeInTheDocument();
  });
});

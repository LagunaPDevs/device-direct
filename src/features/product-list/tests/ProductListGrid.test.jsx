import { screen, render } from "@testing-library/react"

import ProductListGrid from "@/features/product-list/components/ProductListGrid"

import { PRODUCT_LIST_SAMPLE_DATA } from "@/data/product-list-sample-data"

describe("renders product list", ()=> {
    test("renders product list if there is products in the list", () => {
        render(<ProductListGrid products={PRODUCT_LIST_SAMPLE_DATA} />);

        const productListEl = screen.getByLabelText("Product List");
        const productItemsEl = screen.getAllByLabelText("Product Item");

        expect(productListEl).toBeInTheDocument();
        expect(productItemsEl).toHaveLength(5);
    });

    test("do not render product list if ther is no products in the list", () => {
        render(<ProductListGrid  />);

        const productListEl = screen.queryByLabelText("Product List");
        const productItemsEl = screen.queryAllByLabelText("Product Item");

        expect(productListEl).not.toBeInTheDocument();
        expect(productItemsEl).toHaveLength(0);
    })
})
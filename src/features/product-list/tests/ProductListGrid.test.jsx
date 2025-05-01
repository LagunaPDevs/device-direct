import { describe, test, expect, screen, render } from "@/utils/testing/testing-library-utils"

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
    });

    test("renders empty list component if list is empty", ()=>{
        render(<ProductListGrid products={[]} />);
        const productListEl = screen.getByLabelText("Product List");
        const noItemsFoundEl = screen.getByText("No items found");

        expect(productListEl).toBeInTheDocument();
        expect(noItemsFoundEl).toBeInTheDocument();
    })
});

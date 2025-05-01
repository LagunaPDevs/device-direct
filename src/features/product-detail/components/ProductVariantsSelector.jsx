import { Grid, Button } from "@mui/material";

import { useCart } from "@/features/cart/hooks/useCart";

import { useGetProductById } from "@/features/product-detail/hooks/useGetProductById";

import { ProductColorVariants } from "./ProductColorVariants";
import { ProductStorageVariants } from "./ProductStorageVariants";

export function ProductVariantsSelector() {
  const { onAddCartItem, isCartLoading } = useCart();
  const { selectedColor, selectedStorage, addToCart } = useGetProductById();

  return (
    <Grid container spacing={2} mt={2}>
      <ProductColorVariants />
      <ProductStorageVariants />

      <Button
        fullWidth
        disabled={!selectedColor || !selectedStorage || isCartLoading}
        variant="contained"
        onClick={() => addToCart({onAddCartItem})}
      >
        Add to cart
      </Button>
    </Grid>
  );
}

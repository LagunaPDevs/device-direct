import { Grid, Button } from "@mui/material";

import { useGetProductById } from "../hooks/useGetProductById";

import { ProductColorVariants } from "./ProductColorVariants";
import { ProductStorageVariants } from "./ProductStorageVariants";

export function ProductVariantsSelector() {
  const {  selectedColor, selectedStorage, addToCart } = useGetProductById();

  return (
    <Grid container spacing={2} mt={2}>
      <ProductColorVariants  />
      <ProductStorageVariants />

      <Button
        fullWidth
        disabled={(!selectedColor) || (!selectedStorage)}
        variant="contained"
        onClick={()=> addToCart()}
      >
        Add to cart
      </Button>
    </Grid>
  );
}

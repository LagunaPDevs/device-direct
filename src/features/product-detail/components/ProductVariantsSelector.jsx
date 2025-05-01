import { Grid, Button } from "@mui/material";

import { styled } from "@mui/material/styles";
import { useCart } from "@/features/cart/hooks/useCart";

import { useGetProductById } from "@/features/product-detail/hooks/useGetProductById";

import { ProductColorVariants } from "./ProductColorVariants";
import { ProductStorageVariants } from "./ProductStorageVariants";

const AnimatedButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  backgroundColor: theme.palette.primary,
  fontWeight: "bold",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export function ProductVariantsSelector() {
  const { onAddCartItem, isCartLoading } = useCart();
  const { selectedColor, selectedStorage, addToCart } = useGetProductById();

  return (
    <Grid container spacing={2} mt={2}>
      <ProductColorVariants />
      <ProductStorageVariants />
      <AnimatedButton
        fullWidth
        disabled={!selectedColor || !selectedStorage || isCartLoading}
        variant="contained"
        onClick={() => addToCart({ onAddCartItem })}
      >
        Add to cart
      </AnimatedButton>
    </Grid>
  );
}

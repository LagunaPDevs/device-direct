import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { ProductFeatures } from "./ProductFeatures";
import { ProductImage } from "./ProductImage";
import { ProductNotFoundCard } from "./ProductNotFoundCard";

export function ProductCard({ product }) {
    
  if (!product) return <ProductNotFoundCard />;

  const { model, imgUrl } = product;

  return (
    <Container id="Product-Card" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }} aria-label="Product Card">
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          {model}
        </Typography>
      </Box>
      <Grid container gap={2}>
        <ProductImage {...{ imgUrl }} />
        <ProductFeatures product={product} />
      </Grid>
    </Container>
  );
}

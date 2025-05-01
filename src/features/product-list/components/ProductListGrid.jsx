import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { ProductListItem } from "./ProductListItem";
import { NoItemsFound } from "./NoItemsFound";

export default function ProductListGrid({ products }) {
  if (!products) return null;
  
  return (
    <Box
      id="product-list"
      aria-label="Product List"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 16 },
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid container spacing={2}>
          {products.map((item, index) => (
            <ProductListItem key={index} product={item} />
          ))}
          {products.length === 0 && <NoItemsFound />}
        </Grid>
      </Container>
    </Box>
  );
}

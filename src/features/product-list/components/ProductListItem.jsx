import { useNavigate } from "react-router";

import { Box, Grid, Stack, Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { HandledImage } from "@/components/HandledImage";

const AnimatedCard = styled(Card)(({ theme }) => ({
  color: "inherit",
  height: "100%",
  borderColor: "hsla(220, 25%, 25%, 0.3)",
  backgroundColor: theme.palette.grey[800],
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export function ProductListItem({ product }) {
  if (!product) {
    return (
      <ProductItemWrapper>
        <Typography variant="body2">Product Unknown</Typography>
      </ProductItemWrapper>
    );
  }

  const navigate = useNavigate();
  const { id, brand, model, price, imgUrl } = product;

  return (
    <ProductItemWrapper>
      <Box
        key={id}
        component={Button}
        sx={{ display: "flex", alignItems: "center", gap: 2 }}
        aria-label="Product Item"
        onClick={()=> navigate(`/product-detail/${id}`)}
      >
        <HandledImage src={imgUrl} />
        <Box>
          <Typography gutterBottom sx={{ fontWeight: "medium" }}>
            {brand}
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            {model}
          </Typography>
          <Typography>
            {price ? `${price}€` : "Unavailable for purchase"}
          </Typography>
        </Box>
      </Box>
    </ProductItemWrapper>
  );
}

function ProductItemWrapper({ children }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Stack
        direction="column"
        component={AnimatedCard}
        spacing={1}
        useFlexGap
        sx={{
          color: "inherit",
          height: "100%",
          borderColor: "hsla(220, 25%, 25%, 0.3)",
          backgroundColor: "grey.800",
          borderRadius: "8px",
        }}
      >
        {children}
      </Stack>
    </Grid>
  );
}

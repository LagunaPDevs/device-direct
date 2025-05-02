import { v4 as uuidv4 } from "uuid";

import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import { styled } from "@mui/material";

export function ProductListSkeleton() {
  return (
    <Box
      id="product-list"
      aria-label="Product List Skeleton"
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
          {Array.from({ length: 12 }).map(() => (
            <ProductItemSkeleton key={uuidv4()} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const AnimatedCard = styled(Skeleton)(() => ({
  maxWidth: "500px",
  height: "100%",
  borderRadius: "8px",
}));

function ProductItemWrapperSkeleton() {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Stack direction="column" component={AnimatedCard} spacing={1} useFlexGap>
        <Skeleton variant="rectangular" width="100%" height={150} />
        <Box sx={{ px: 2 }}>
          <Skeleton width="60%" />
          <Skeleton width="90%" />
          <Skeleton width="40%" />
        </Box>
      </Stack>
    </Grid>
  );
}

export function ProductItemSkeleton() {
  return <ProductItemWrapperSkeleton />;
}

import {Grid, Card} from "@mui/material";

import {HandledImage} from "@/components/HandledImage";

export function ProductImage({ imgUrl }) {
  return (
    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          width: "100%",
          display: { sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <HandledImage src={imgUrl} width="100%" />
      </Card>
    </Grid>
  );
}

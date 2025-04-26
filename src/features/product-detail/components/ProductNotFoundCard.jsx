import { Card, Typography } from "@mui/material";

export function ProductNotFoundCard() {
  return (
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
      <Typography variant="h6">Product not found</Typography>
    </Card>
  );
}

import {Box, Typography} from "@mui/material";

export function ProductFeatureItem({ title, value }) {
    return (
      <Box
        sx={{
          p: 1,
          width: "100%",
          display: "flex",
          alignItems: "left",
          gap: 1,
          textAlign: "left",
          textTransform: "none",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "40%", color: "text.secondary" }}>
          <Typography variant="body2">{title}</Typography>
        </Box>
        <Typography value="h6">{value}</Typography>
      </Box>
    );
  }
  
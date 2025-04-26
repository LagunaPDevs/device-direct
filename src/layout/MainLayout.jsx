import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box>Header content</Box>
      <Grid>
        <Outlet />
      </Grid>
    </Box>
  );
}

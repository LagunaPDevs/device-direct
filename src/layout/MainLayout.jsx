import { Outlet } from "react-router";

import { Box } from "@mui/material";
import Container from "@mui/material/Container";

import Header from "@/layout/Header";

export function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%"}}>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ padding: "8px 12px" }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}

import * as React from "react";

import {Link} from "react-router";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography} from "@mui/material";

import { CartIconButton } from "@/features/cart/components/CartIconButton";

import DeviceDirectLogo from "@/assets/device-direct-logo.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function AppAppBar() {
  return (
    <Container maxWidth="lg">
      <StyledToolbar variant="dense" disableGutters>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", textDecoration: "none", color:"inherit" }} component={Link} to="/" >
          <Box sx={{maxWidth: "250px"}}>
          <img src={DeviceDirectLogo} alt="logo" width="100%" /> 
          </Box>
        </Box>
        <CartIconButton />
      </StyledToolbar>
    </Container>
  );
}

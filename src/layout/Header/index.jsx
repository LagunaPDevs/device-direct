import * as React from "react";

import {Link} from "react-router";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography} from "@mui/material";

import { CartIconButton } from "@/features/cart/components/CartIconButton";

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  return (
    <Container maxWidth="lg">
      <StyledToolbar variant="dense" disableGutters>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", textDecoration: "none", color:"inherit" }} component={Link} to="/" >
          <PhoneAndroidIcon />
          <Typography variant="h5">Device Direct</Typography>
        </Box>
        <CartIconButton />
      </StyledToolbar>
    </Container>
  );
}

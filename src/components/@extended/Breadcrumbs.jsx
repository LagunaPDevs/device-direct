import * as React from "react";

import Link from "@mui/material/Link";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { Typography } from "@mui/material";

export function Breadcrumbs(props) {
  const { links } = props;
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        <Typography variant="subtitle1">Home</Typography>
      </Link>
      {links && (
        <MuiBreadcrumbs>
          {links?.map((link, index) => (
            <Typography
              key={index}
              variant={!link.to ? "subtitle1" : "h6"}
              sx={{ textDecoration: "none" }}
              color={!link.to ? "textPrimary" : "textSecondary"}
              {...(link.to && { component: Link, to: link.to })}
            >
              {link.title}
            </Typography>
          ))}
        </MuiBreadcrumbs>
      )}
    </MuiBreadcrumbs>
  );
}

import { Box, Grid } from "@mui/material";

import PanoramaIcon from "@mui/icons-material/Panorama";

export function HandledImage({
  width = "50px",
  height = "65px",
  emptySizeIcon = "1.2rem",
  src,
}) {
  if (!src || src === "")
    return (
      <Box
        aria-label="Empty Image"
        sx={{
          width,
          height,
          backgroundColor: "grey.800",
          alignContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            textAlign: "center",
            fontSize: emptySizeIcon,
            color: "hsla(220, 25%, 25%, 0.3)",
            padding: "0.3rem",
          }}
          justifyContent="center"
        >
          <PanoramaIcon />
        </Grid>
      </Box>
    );

  return <img src={src} width={width} height={height} sx={{  objectFit: "cover" }} />;
}

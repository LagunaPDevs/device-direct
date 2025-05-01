// ==============================|| DEFAULT THEME - PALETTE ||============================== //

export function Palette(
) {

  let greyPrimary = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  const contrastText = "#fff";

  let primaryColors = [
    "#1c2628",
    "#1d3539",
    "#22454a",
    "#23595f",
    "#26737c",
    "#288d99",
    "#47a6ad",
    "#6dbec0",
    "#96d0d0",
    "#c5dfde",
  ];
  
  let errorColors = ["#321d1d", "#7d2e28", "#d13c31", "#e66859", "#f8baaf"];
  let warningColors = ["#342c1a", "#836611", "#dda705", "#e9bf28", "#f8e577"];
  let infoColors = ["#1a2628", "#11595f", "#058e98", "#1ea6aa", "#64cfcb"];
  let successColors = ["#1a2721", "#115c36", "#05934c", "#1da65d", "#61ca8b"];

  return {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      lighter: primaryColors[0],
      100: primaryColors[1],
      200: primaryColors[2],
      light: primaryColors[3],
      400: primaryColors[4],
      main: primaryColors[5],
      dark: primaryColors[6],
      700: primaryColors[7],
      darker: primaryColors[8],
      900: primaryColors[9],
    },
    secondary: {
        lighter: greyPrimary[0],
        100: greyPrimary[1],
        200: greyPrimary[2],
        light: greyPrimary[3],
        400: greyPrimary[4],
        main: greyPrimary[5],
        600: greyPrimary[6],
        dark: greyPrimary[7],
        800: greyPrimary[8],
        darker: greyPrimary[9],
        A100: "#fff",
        A200: greyPrimary[10],
        contrastText: "#fff",
      },
    error: {
      lighter: errorColors[0],
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      darker: errorColors[4],
      contrastText,
    },
    warning: {
      lighter: warningColors[0],
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      darker: warningColors[4],
      contrastText,
    },
    info: {
      lighter: infoColors[0],
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      darker: infoColors[4],
      contrastText,
    },
    success: {
      lighter: successColors[0],
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      darker: successColors[4],
      contrastText,
    },
    text: {
      primary: "#ffffff",
      secondary: "#d9d9d9",
      disabled: "#bfbfbf",
    },
    action: {
      disabled: "#bfbfbf",
    },
    divider: "#bfbfbf",
    background: {
      paper: "grey.800",
      default: "#212121",
    },
  };
}

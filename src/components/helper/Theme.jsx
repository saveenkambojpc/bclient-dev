import { createTheme } from "@mui/material/styles";
import { blue, green, grey, purple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      // muted: "#0000008A",
      lightText: "#000000DE",
      lightText87: "#000000DE",
      lightTextSec: "#00000099",
      lightText60: "#00000099",
      lightText54:"#0000008A",
      lightText47:"#00000078",
      lightBg: "#0000000A",
      black:"#1F1F1F",
      zBlack:"#000000",
      danger:"#D21919"
    },

  },
  fontSize: {
    font12: 12,
    font14: 14,
    font20: 20,
    font22: 22,
    font24:24,
  },
  width: {
    width12: 12,
    width16: 16,
  },
  height: {
    height16: 16,
  },
  fontWeight:{
    weight300:300,
    weight400:400,
    weight500:500,
    weight600:600
  },
  letterSpacing:{
    spacing17:'0.17px'
  }
});

// export const palette =

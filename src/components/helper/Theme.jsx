import { createTheme } from "@mui/material/styles";
import { blue, green, grey, purple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      muted: "#666666",
      black: "#212121",
    },
    secondary: {
      main: green[500],
    },
  },
});

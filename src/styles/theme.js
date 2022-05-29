import { createTheme } from "@mui/material/styles";

// Colors
const primaryMain = "#8FD0FF";
const primaryDark = "#6491b2";
const primaryLight = "#a5d9ff";

const shadeOne = "rgba(25, 118, 210, 0.04)";
const shadeTwo = "rgba(25, 118, 210, 0.08)";
const shadeThree = "rgba(25, 118, 210, 0.12)";
const shadeFour = "rgba(25, 118, 210, 0.30)";
const shadeFive = "rgba(25, 118, 210, 0.50)";

const darkHover = "rgba(100, 145, 178, 1)";

const secondaryMain = "#e47600";
const secondaryDark = "#d44d00";
const secondaryLight = "#f2b04b";

const customPurple = "#6200EA";
const customGreen = "#009688";
const customPink = "#C51162";

const textSecondary = "rgba(0,0,0,0.6)";

const error = "#d32f2f";

const info = "#4fb4fd";

const dividerLight = "rgba(0,0,0,0.5)";
const deviderDark = "#eeeeee";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: primaryMain,
      dark: primaryDark,
      light: primaryLight,
    },
    primaryShades: {
      one: shadeOne,
      two: shadeTwo,
      three: shadeThree,
      four: shadeFour,
      five: shadeFive,
    },
    secondary: {
      main: secondaryMain,
      dark: secondaryDark,
      light: secondaryLight,
    },
    customPurple: {
      main: customPurple,
    },
    customGreen: {
      main: customGreen,
    },
    customPink: {
      main: customPink,
    },
    hover: {
      dark: darkHover,
    },
    text: {
      secondary: textSecondary,
    },
    error: {
      main: error,
    },
    info: {
      main: info,
    },
    divider: dividerLight,
  },
  typography: {
    h1: {
      fontSize: "2rem",
      letterSpacing: "0.03em",
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      letterSpacing: "-0.03em",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: "400",
      letterSpacing: "0.01em",
    },
    h6: {
      fontSize: "1rem",
      letterSpacing: "0.01em",
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    overline: {
      fontSize: 10,
    },
    largerNumbers: {
      fontSize: "1.7rem",
      fontWeight: 400,
      letterSpacing: "0.016em",
      fontFamily: `"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    smallerNumbers: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.016em",
      fontFamily: `"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    menuItem: {
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "0.15px",
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: primaryMain,
      dark: primaryDark,
      light: primaryLight,
      shades: {
        one: shadeOne,
        two: shadeTwo,
        three: shadeThree,
        four: shadeFour,
        five: shadeFive,
      },
    },
    secondary: {
      main: secondaryMain,
      dark: secondaryDark,
      light: secondaryLight,
    },
    customPurple: {
      main: customPurple,
    },
    customGreen: {
      main: customGreen,
    },
    customPink: {
      main: customPink,
    },
    text: {
      secondary: textSecondary,
    },
    error: {
      main: error,
    },
    info: {
      main: info,
    },
    divider: deviderDark,
  },
  typography: {
    h1: {
      fontSize: "2rem",
      letterSpacing: "0.03em",
      fontWeight: 400,
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      letterSpacing: "-0.03em",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 400,
      letterSpacing: "0.01em",
    },
    h6: {
      fontSize: "1rem",
      letterSpacing: "0.01em",
    },
    overline: {
      fontSize: 10,
    },
    largerNumbers: {
      fontSize: "2.8rem",
      fontWeight: 400,
      letterSpacing: "0.016em",
      fontFamily: `"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    smallerNumbers: {
      fontSize: "2.8rem",
      fontWeight: 400,
      letterSpacing: "0.016em",
      fontFamily: `"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#6491b2",
        color: "#fff",
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
});

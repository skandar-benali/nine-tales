import colors from "./colorsPalette";

const defaultTheme = {
  fontFamily: {
    primary: "Roboto,Helvetica Neue,sans-serif",
    secondary: "sans-serif",
    additional: "sans-serif"
  },
  colors: {
    basic: colors.black,
    primary: colors.indigo["500"],
    accent: colors.pink["A200"],
    warn: colors.red["500"]
  },
  white: colors.white,
  black: colors.black
};

export default defaultTheme;

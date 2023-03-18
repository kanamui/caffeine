import { extendTheme, theme as nbTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#6F3C28",
      700: "#552A00",
      800: "#472400",
      900: "#361b00",
    },
  },
  config: {
    initialColorMode: "light",
  },
});

export default theme;

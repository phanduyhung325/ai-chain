import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1e1b2e",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white",
      },
    },
  },
  fonts: {
    body: "Public Sans,Open Sans",
    heading: "Public Sans, Open Sans",
  },
});

export default theme;

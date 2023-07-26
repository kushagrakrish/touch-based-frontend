import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button-styles";

export const theme = extendTheme({
  colors: {
    primary: "#060606",
    content: "#9F9F9F",
  },
  components: {
    Button: buttonTheme,
  },
});

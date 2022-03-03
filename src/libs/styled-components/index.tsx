import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import { Props } from "./types";
import theme from "./theme";

const DesignSystemProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;

import Layout from "../components/layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme/theme.style";
import GlobalStyle from "../styles/global.style";
// Tell Font Awesome to skip adding the CSS
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;

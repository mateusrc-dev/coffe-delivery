import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </ThemeProvider>
);

import React from "react";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./features/Header";

export default function App(): JSX.Element {
  return (
    <div id="app">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

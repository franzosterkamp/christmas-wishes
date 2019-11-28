import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/defaultTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>App</div>
          </Route>
          <Route exact path="/new">
            <div>New</div>
          </Route>
          <Route>
            <div>404 Not found</div>
          </Route>
        </Switch>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;

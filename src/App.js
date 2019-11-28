import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/defaultTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import styled from "@emotion/styled";
import Title from "./components/Title";
import Wishlist from "./pages/Wishlist";
import Snowfall from "react-snowfall";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

const Header = styled.header`
  height: 60px;
`;

const Footer = styled.footer`
  height: 60px;
  background: ${props => props.theme.colors.secondary};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Container>
          <Snowfall snowflakeCount={80} />
          <Header>
            <Title>
              <span role="img" aria-label="Christmas tree">
                🎄
              </span>
              Christmas Wishes{" "}
              <span role="img" aria-label="Christmas tree">
                🎄
              </span>
            </Title>
          </Header>
          <Main>
            <Switch>
              <Route exact path="/">
                <Wishlist />
              </Route>
              <Route exact path="/new">
                <div>New</div>
              </Route>
              <Route>
                <div>404 Not found</div>
              </Route>
            </Switch>
          </Main>
          <Footer>
            <BottomNavigation />
          </Footer>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

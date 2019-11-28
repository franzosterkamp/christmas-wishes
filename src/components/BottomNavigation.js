import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

const NavigationLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  flex-grow: 1;
  height: 100%;
  text-decoration: none;
  background: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
`;

function BottomNavigation() {
  const location = useLocation();

  return (
    <Container>
      <NavigationLink to="/" active={location.pathname === "/"}>
        Wishlist
      </NavigationLink>
      <NavigationLink to="/new" active={location.pathname === "/new"}>
        Add
      </NavigationLink>
    </Container>
  );
}

export default BottomNavigation;

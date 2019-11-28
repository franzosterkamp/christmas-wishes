import React from "react";
import styled from "@emotion/styled";

const H1 = styled.h1`
  margin: 8px;
  font-size: 1.4rem;
  text-align: center;
`;

function Title({ children }) {
  return <H1>{children}</H1>;
}

export default Title;

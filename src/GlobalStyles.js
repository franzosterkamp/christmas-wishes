import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-size: 16px;
          font-family: "Lato", sans-serif;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
}

export default GlobalStyles;

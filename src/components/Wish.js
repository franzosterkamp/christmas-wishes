import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.article`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 4px;
`;

function Wish({ title, priority }) {
  return (
    <Container>
      <div>{title}</div>
      <div>{priority}</div>
    </Container>
  );
}

Wish.propTypes = {
  title: PropTypes.string,
  priority: PropTypes.number
};

export default Wish;

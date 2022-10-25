import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNav = ({ title }) => {
  const Wrapper = styled.section`
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 3.2rem;
    padding-left: 1.2rem;
    a {
      font-size: 3.2rem;
    }
    .capitalise:first-letter {
      text-transform: capitalize;
    }
  `;
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/ <NavLink to="/products">Products</NavLink>
      /<span className="capitalise">{title}</span>.
    </Wrapper>
  );
};

export default PageNav;

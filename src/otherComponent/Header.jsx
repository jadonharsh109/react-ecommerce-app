import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
      height: 5rem;
      font-size: 3rem;
      font-family: "Comforter Brush", cursive;
      position: relative;
      top: -0.5rem;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
        transition: 0.5s;
      }
      .big {
        font-size: 5rem;
        color: blueviolet;

        font-family: "Comforter Brush", cursive;
      }
      &::after {
        content: "";
        height: 0.2rem;
        width: 0;
        background: blueviolet;
        position: absolute;
        bottom: -1rem;
        left: 0;
        transition: 0.5s;
      }
      &:hover::after {
        width: 20rem;
      }
    }
  `;
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <div className="logo">
            <span className="big">H</span>ARSH
            <span className="big">C</span>ART
          </div>
        </NavLink>
        <Nav />
      </MainHeader>
    </>
  );
};

export default Header;

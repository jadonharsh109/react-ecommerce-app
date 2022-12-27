import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./../styles/Button";
const HeroSection = ({ title }) => {
  const Wrapper = styled.section`
    padding: 8rem 0;
    img {
      min-width: 10rem;
      height: 10rem;
    }
    .hero-section-data {
      p {
        margin: 2rem 0;
      }
      h1 {
        text-transform: capitalize;
        font-weight: bold;
      }
      .intro-data {
        margin-bottom: 0;
      }
    }
    .hero-section-image {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .scroll-animation {
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #84c5ff63;
        position: absolute;
        left: 0;
        top: 5rem;
        z-index: -1;
        -webkit-transition: 0.5s;
        transition: 0.7s;
      }

      &:hover::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #84c5ff63;
        position: absolute;
        left: 6rem;
        top: -1rem;
        z-index: -1;
      }
    }
    .img-style {
      width: 100%;
      height: auto;
      position: relative;
    top: 5rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      padding: 6rem 0;
      .grid {
        gap: 0;
      }
      .scroll-animation {

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #84c5ff63;
        position: absolute;
        left: 0;
        top: 5rem;
        z-index: -1;
        -webkit-transition: 0.5s;
        transition: 0.7s;
      }

      &:hover::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #84c5ff63;
        position: absolute;
        left: 0;
        top: 5rem;
        z-index: -1;
      }
    }

      .hero-section-data {

        h1 {
            font-size: 5rem;
        }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome To</p>
            <h1>{title}</h1>
            <p>
              E-commerce (electronic commerce) is the activity of electronically
              buying or selling of products on online services or over the
              Internet. E-commerce draws on technologies such as mobile
              commerce, electronic funds transfer, supply chain management,
              Internet marketing, online transaction processing, electronic data
              interchange (EDI), inventory management systems, and automated
              data collection systems.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-img">
            <figure className="scroll-animation">
              <img
                src="images/img-shopping.jpg"
                alt="Hero-Img"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

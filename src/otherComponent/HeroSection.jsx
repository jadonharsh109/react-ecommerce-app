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
    figure {
      position: relative;
      &::after {
        content: "";
        width: 80%;
        height: 90%;
        background-color: rgb(228 38 38 / 67%);
        position: absolute;
        left: 30%;
        top: -5rem;
        z-index: -1;
      }
    }
    .img-style {
      width: 100%;
      height: auto;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      padding: 6rem 0;
      .grid {
        gap: 10rem;
      }
      figure::after {
        content: "";
        width: 100%;
        height: 100%;
        left: 2rem;
        top: 2rem;
        background-color: rgb(228 38 38 / 67%);
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
            <figure>
              <img
                src="images/img-2.jpg"
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

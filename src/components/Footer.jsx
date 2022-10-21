import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
const Footer = () => {
  const Wrapper = styled.section`
    width: 100%;
    height: 50vh;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    color: ${({ theme }) => theme.colors.white};

    .upper-footer {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      background: white;
      color: black;
      padding: 2rem 4rem;
      border-radius: 1.3rem;
      position: relative;
      bottom: 5rem;
      margin: auto;
      font-size: 1.4rem;
    }
    .middle-footer {
      width: 90%;
      height: 30vh;
      text-align: center;
      margin: 2rem auto;
    }
    .middle-footer-1,
    .middle-footer-2,
    .middle-footer-3,
    .middle-footer-4 {
      padding: 1rem 1rem;
    }
    .middle-footer-2 {
      input {
        width: 90%;
        margin-bottom: 1rem;
      }
      .btn-footer {
        width: 90%;
        margin: auto;
      }
    }
    .middle-footer-4 {
      a {
        color: white;
        font-size: 1.3rem;
      }
    }
    p {
      margin-bottom: 1.2rem;
      font-size: 1.3rem;
      color: white;
    }
    .bold {
      font-weight: bold;
    }
    .icon-container {
      display: flex;
      gap: 1rem;
    }
    .footer-icon {
      font-size: 3rem !important;
      padding: 5px;
      border: 2px solid white;
      border-radius: 50%;
      cursor: pointer;
      color: white;

      &:hover {
        background: white;
        color: black;
        transition: 0.5s;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="container">
        <div className="upper-footer bold">
          <div className="upper-footer-left">
            Ready To Get Started?
            <br />
            Talk to us today.
          </div>
          <div className="upper-footer-right">
            <Button>GET STARTED</Button>
          </div>
        </div>
        <div className="middle-footer grid grid-four-column">
          <div className="middle-footer-1">
            <p className="bold">Harshvardhan Singh Jadon</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              dolore.
            </p>
          </div>
          <div className="middle-footer-2">
            <p className="bold">Subscribe To get Important Updates</p>
            <input type="text" placeholder="Enter Your Email" />
            <Button className="btn-footer">SUBSCRIBE</Button>
          </div>
          <div className="middle-footer-3">
            <p className="bold">Follow Us</p>
            <div className="icon-container">
              <a href="https://github.com/jadonharsh109" target="blank">
                <AiFillGithub className="footer-icon" />
              </a>
              <a
                href="https://www.instagram.com/harshhhhhhh_____/"
                target="blank"
              >
                <AiOutlineInstagram className="footer-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshvardhan-singh-jadon-095a92205/"
                target="blank"
              >
                <ImLinkedin2 className="footer-icon" />
              </a>
            </div>
          </div>
          <div className="middle-footer-4">
            <p className="bold">Call Us</p>
            <a href="tel:+917691997918" target="blank">
              +91 7691997918
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

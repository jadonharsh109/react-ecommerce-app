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
    margin-top: 20rem;

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
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    .middle-footer {
      width: 90%;
      height: 30vh;
      text-align: center;
      padding: 5rem auto;
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
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      margin-top: 2rem;
      height: fit-content;
      .grid {
        gap: 2rem;
      }
      .btn {
        padding: 0.4rem 2.4rem;
      }
      .upper-footer {
        border-radius: 5rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      }
      .name {
        font-size: 2rem;
      }
      .icon-container {
        justify-content: center;
      }
      .footer-icon {
        font-size: 5rem !important;
        padding: 5px;
      }
      .middle-footer {
        height: fit-content;
        margin: auto;
        padding: 3rem 2rem;
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
            <Button className="btn">GET STARTED</Button>
          </div>
        </div>
        <div className="middle-footer grid grid-four-column">
          <div className="middle-footer-1">
            <p className="bold name">Harshvardhan Singh Jadon</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              dolore.
            </p>
          </div>
          <div className="middle-footer-2">
            <p className="bold name">Subscribe To get Important Updates</p>
            <input type="text" placeholder="Enter Your Email" />
            <Button className="btn-footer">SUBSCRIBE</Button>
          </div>
          <div className="middle-footer-3">
            <p className="bold name">Follow Us</p>
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
            <p className="bold name">Call Us</p>
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

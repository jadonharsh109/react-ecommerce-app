import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 0 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    /* &::before {
      content: "";
      height: 125vh;
      z-index: -1;
      position: absolute;
      width: 100%;
      background: url("images/bg2.jpg") no-repeat center center/cover;
      opacity: 0.85;
      top: 0px;
      left: 0px;
    } */
  `;

  return (
    <Wrapper>
      <div className="container">
        <h2 className="common-heading">Feel Free To Contact Us</h2>
        <div className="grid grid-two-column">
          <div className="grid-column2">
            <div className="contact-form">
              <form
                action="https://formspree.io/f/xrgdaqza"
                method="POST"
                className="contact-inputs"
              >
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  required
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter Message"
                  required
                  autoComplete="off"
                />
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
          <div className="grid-column1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.784958958979!2d78.20017051431843!3d26.203672696562126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c3f808b4d513%3A0x1d94605354a56e51!2sSirol%20Rd%2C%20New%20Govindpuri%2C%20Mahalgaon%2C%20Gwalior%2C%20Madhya%20Pradesh%20474011!5e0!3m2!1sen!2sin!4v1666095991871!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

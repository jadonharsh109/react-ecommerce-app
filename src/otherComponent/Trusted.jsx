import React from "react";
import styled from "styled-components";

const Trusted = () => {
  const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    .brand-section {
      padding: 12rem 0 0 0;
    }
    h3 {
      text-align: center;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
      font-size: 2rem;
      font-weight: bold;
    }
    img {
      min-width: 10rem;
      height: 10rem;
      &:hover {
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        transform: scale(1.2);
        cursor: pointer;
      }
    }
    .brand-section-slider {
      margin-top: 3.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .brand-section-slider {
        margin-top: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* background-color: red; */
        text-align: center;
      }
    }
  `;
  return (
    <>
      <Wrapper className="brand-section">
        <div className="container">
          <h3>Trusted by 100+ Companies</h3>
          <div className="brand-section-slider">
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Trusted;

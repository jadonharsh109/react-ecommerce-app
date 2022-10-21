import React from "react";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  const Wrapper = styled.section`
    padding: 9rem 0;
    .grid {
      display: grid;
      gap: 6rem;
      grid-template-columns: 1.2fr 1.5fr 1.2fr;
      margin: auto;
      grid-template-rows: 1fr 1fr;

      .box1,
      .box3 {
        background: ${({ theme }) => theme.colors.bg};
        border-radius: 2rem;
        width: auto;
        height: 30rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      }

      .box1 {
        grid-row: 1/4;
        grid-column: 1/2;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      .box2-1st {
        grid-row: 1/2;
        grid-column: 2/3;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        background: ${({ theme }) => theme.colors.bg};
        border-radius: 2rem;
        gap: 1rem;
        height: 12rem;
      }
      .box2-2nd {
        grid-row: 2/3;
        grid-column: 2/3;
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-direction: row;
        background: ${({ theme }) => theme.colors.bg};
        border-radius: 2rem;
        height: 12rem;
      }

      .box3 {
        grid-row: 1/4;
        grid-column: 3/4;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .box1:hover,
      .box2-1st:hover,
      .box2-2nd:hover,
      .box3:hover {
        background: #e7e8fa;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
      h3 {
        margin-top: 1rem;
        font-size: 1.7rem;
        font-weight: 600;
      }
      .icon {
        /* font-size: rem; */
        width: 8rem;
        height: 8rem;
        padding: 2rem;
        border-radius: 50%;
        color: #5138ee;
      }
      
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
          gap: 3rem;
          grid-template-columns: 1fr;
          margin: auto;
          grid-template-rows: 1fr 1fr 1fr 1fr;

          .box1 {
        grid-row: 1/2;
        grid-column: 1/2;
        }
        .box2-1st{
            grid-row: 2/3;
        grid-column: 1/2;
        display: flex;
        flex-direction: column;
        }
        .box2-2nd{
            grid-row: 3/4;
        grid-column: 1/2;
        display: flex;
        flex-direction: column;
        }
        .box3{
            grid-row: 4/5;
        grid-column: 1/2;
        }

        .box1, .box3, .box2-2nd, .box2-1st{
            height: 17rem;
        }
      }
  `;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <div className="box1">
            <FaShippingFast className="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>

          <div className="box2-1st">
            <MdSecurity className="icon" />
            <h3>Non-Contact Shipping</h3>
          </div>
          <div className="box2-2nd">
            <GiReceiveMoney className="icon" />
            <h3>Money-Back Guaranteed</h3>
          </div>

          <div className="box3">
            <RiSecurePaymentFill className="icon" />
            <h3>Secured Payment</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

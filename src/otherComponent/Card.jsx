import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PriceFormat from "../helpers/PriceFormat";

const Card = ({ whatToMap }) => {
  const Wrapper = styled.section`
    .cover {
      position: relative;
      width: 300px;
      height: 350px;
      background: #fff;
      margin: 0 auto;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      cursor: pointer;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: #fff;
        transition: 0.5s;
        z-index: -1;
      }
      &:hover:before {
        transform: rotate(20deg);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      }
      &:hover:after {
        transform: rotate(10deg);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      }
      .featureProducts-cards {
        position: absolute;
        top: 10px;
        left: 10px;
        bottom: 10px;
        right: 10px;
        background: #222;
        transition: 0.5s;
        z-index: 1;
      }

      img {
        width: 30rem;
      }
      .details {
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 10px;
        height: 60px;
        text-align: center;

        h2 {
          margin: 0;
          padding: 0;
          font-weight: 600;
          font-size: 20px;
          color: #777;
          text-transform: uppercase;

          span {
            font-weight: 500;
            font-size: 16px;
            color: #f38695;
            display: block;
            margin-top: 5px;
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="grid grid-three-column">
        {whatToMap.map(({ id, name, image, price, category }) => {
          return (
            <NavLink to={`/singleproduct/${id}`} key={id}>
              <div className="featureProducts-cards" key={id}>
                <div className="cover">
                  <figure>
                    <img src={image} alt={name} />
                    <figcaption className="caption">{category}</figcaption>
                  </figure>
                  <div className="details">
                    <h2>
                      {name}
                      <br />
                      <span>
                        <PriceFormat price={price} />
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Card;

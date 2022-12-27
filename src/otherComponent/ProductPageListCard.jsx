import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PriceFormat from "../helpers/PriceFormat";
import { Button } from "../styles/Button";

const Card = ({ whatToMap }) => {
  const Wrapper = styled.section`
    .cover {
      position: relative;
      width: 100%;
      padding: 3rem 3rem;
      height: 100%;
      background: #fff;
      margin: 0 auto;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: row;

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
        width: 50rem;
        margin: 0 2rem;

        p {
          font-size: 1.5rem;
          padding: 1rem 0;
        }
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
      <div className="featureProducts-cards" key={whatToMap.id}>
        <div className="cover">
          <figure>
            <img src={whatToMap.image} alt={whatToMap.name} />
            <figcaption className="caption">{whatToMap.category}</figcaption>
          </figure>
          <div className="details">
            <h2>
              {whatToMap.name}
              <br />
              <p>{whatToMap.description.slice(0, 148)}...</p>
              <span>
                <PriceFormat price={whatToMap.price} />
              </span>
              <NavLink
                to={`/singleproduct/${whatToMap.id}`}
                className="btn-main"
              >
                <Button className="btn">VIEW MORE</Button>
              </NavLink>
            </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

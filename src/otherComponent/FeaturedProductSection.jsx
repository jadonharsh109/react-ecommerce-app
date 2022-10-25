import React from "react";
import { useContext } from "react";
import { CreateProductContext } from "../context/ProductContext";
import styled from "styled-components";
import Card from "./Card";

const FeaturedProductSection = () => {
  const { featureProducts } = useContext(CreateProductContext);

  const Wrapper = styled.section`
    .container {
      text-align: center;
    }
  `;
  return (
    <Wrapper>
      <div className="container">
        <h2 className="common-heading">Featured Products</h2>
        <Card whatToMap={featureProducts} />
      </div>
    </Wrapper>
  );
};

export default FeaturedProductSection;

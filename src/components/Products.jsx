import React from "react";
import { useContext } from "react";
import { CreateProductContext } from "../context/ProductContext";
import Card from "../otherComponent/Card";
import styled from "styled-components";

const Products = () => {
  const { products } = useContext(CreateProductContext);

  const Wrapper = styled.section`
    margin-top: 10rem;
  `;

  return (
    <Wrapper>
      <div className="container">
        <Card whatToMap={products} />
      </div>
    </Wrapper>
  );
};

export default Products;

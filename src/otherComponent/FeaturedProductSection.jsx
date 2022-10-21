import React from "react";
import { useContext } from "react";
import { CreateProductContext } from "../context/ProductContext";
import styled from "styled-components";

const FeaturedProductSection = () => {
  const { featureProducts, isLoading } = useContext(CreateProductContext);
  //   console.log(isLoading);
  if (isLoading) {
    return <div>.....Loading......</div>;
  }

  const Wrapper = styled.section``;
  return <Wrapper></Wrapper>;
};

export default FeaturedProductSection;

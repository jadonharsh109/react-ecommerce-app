import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CreateProductContext } from "../context/ProductContext";
import { useEffect } from "react";
import PageNav from "../otherComponent/PageNav";
import styled from "styled-components";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const Wrapper = styled.section``;

  const { id } = useParams();
  console.log(id);

  const { FetchSingleProduct, isSingleLoading, SingleProduct } =
    useContext(CreateProductContext);
  console.log(SingleProduct);

  const {
    id: alias,
    name,
    company,
    price,
    category,
    description,
    reviews,
    shipping,
    stars,
    stock,
  } = SingleProduct;

  useEffect(() => {
    FetchSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page-loading">Loading.......</div>;
  }
  return (
    <Wrapper>
      <PageNav title={name} />
    </Wrapper>
  );
};

export default SingleProduct;

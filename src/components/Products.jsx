import React from "react";
import styled from "styled-components";
// import FilterSection from "../otherComponent/FilterSection";
import Sort from "../otherComponent/Sort";
import ProductList from "../otherComponent/ProductList";
import { useFilterContext } from "../context/FilterContext";
const Products = () => {
  const Wrapper = styled.section`
    .grid-filter-columns {
      grid-template-columns: 1fr;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid-flter-columns {
        grid-template-columns: 1fr;
      }
    }
  `;
  const { filter_products } = useFilterContext();
  console.log(filter_products);
  return (
    <Wrapper>
      <div className="container grid grid-filter-columns">
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Products;

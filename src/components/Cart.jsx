import React from "react";
import styled from "styled-components"
const Cart = () => {
  const Wrapper = styled.section`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2rem;
    font-size: 3rem
  }
  `
  return <Wrapper>Still in progress, under maintenance :( 

  </Wrapper>;
};

export default Cart;

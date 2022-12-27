import styled from "styled-components";
import ProductPageListCard from "./ProductPageListCard";

const ListViewFile = ({ products }) => {
  const Wrapper = styled.section`
    padding: 9rem 0;
    .container {
      max-width: 120rem;
    }
    .grid {
      gap: 3.2rem;
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
    .btn-main .btn:hover {
      color: #fff;
    }
  `;

  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((currElem) => {
          return <ProductPageListCard key={currElem.id} whatToMap={currElem} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ListViewFile;
